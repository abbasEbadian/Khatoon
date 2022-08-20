import React from 'react'
import { useState } from 'react';
import BoxAddress from './BoxAddress';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button';
import { useSelector} from 'react-redux'
import {lightGreen} from '@mui/material/colors'
import AddressDialog from './Dialogs/AddressDialog';
import { Alert, AlertTitle } from '@mui/material';

function AddressList({address, setAddress, linear=false}) {
    const user = useSelector(s=>s.auth.user)
    const [addressModalOpen, setAddressModalOpen] = React.useState(false);
    const [addressList, setAddressList] = useState([]);
    const [createMode, setCreateMode] = useState(true);
    const [editAddress, setEditAddress] = useState({});

    
    const openAddressModal = () => setAddressModalOpen(true);
    const closeAddressModal = () => setAddressModalOpen(false);

    const onEditClick = (address)=>{
        setEditAddress(address)
        setCreateMode(false);
        openAddressModal();
    }
    const onCreateClick = ()=>{
        setCreateMode(true);
        openAddressModal();
    }

    
    React.useEffect(() => {
        if(user && user.address_set){
            setAddressList(user.address_set)
            if(setAddress)
                setAddress(user.address_set.find(o=>o.active))
        }
    }, [user])
  return (
      <>
        <div className='d-flex justify-content-start flex-wrap'>
            {
                addressList.length ? 
                    
                    addressList.map((_address, index) => {
                        return (
                            !linear?
                            <BoxAddress address={_address} key={index} seq={index+1} onClick={e=>onEditClick(_address)}/>
                            :
                            <Alert role="button" 
                                onClick={e=>setAddress?setAddress(_address):{}}
                                severity={"success"} 
                                variant={_address.id === address.id? "filled": "standard" } 
                                icon={_address.id === address.id? <CheckCircleOutlineIcon fontSize="inherit" />: false } 
                                className="col-12 shadow-sm mb-2">

                                <AlertTitle>{" آدرس " +(index+1)}</AlertTitle>
                                <b>{_address.city_id?.name}</b> - <span>{_address.address}</span>

                            </Alert>
                        )
                    })
                    : <span className="alert alert-info w-100">آدرسی ثبت نکرده اید</span>
            } 
        </div>
        <div className={"No_Address"}>
            <Button onClick={onCreateClick}  variant="contained" size="large" style={{backgroundColor:"#ff676d",borderRadius:"20px"}}>
                    افزودن آدرس جدید
                    <AddBoxIcon />
            </Button>
                
        </div> 
        <AddressDialog open={addressModalOpen} handleClose={closeAddressModal} create_mode={createMode} _address={editAddress}/>
        {/* {createMode
        ?
        :
        <AddressDialog open={addressModalOpen} handleClose={closeAddressModal}  _address={editAddress}/>
        } */}
    </>
    )
}

export default AddressList