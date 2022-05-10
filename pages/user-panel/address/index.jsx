import React from 'react'
import { useState } from 'react';
import BoxAddress from '../../../components/Ui/BoxAddress';
import styles from '../../../styles/NoAddress.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox';

import Button from '@mui/material/Button';
import UserPanelBase from '../../../components/UserPanelBase';
import withAuth from '../../../redux/withAuth'
import { useSelector} from 'react-redux'

import AddressDialog from '../../../components/Ui/Dialogs/AddressDialog';

function BasketAddress() {
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
        if(user && user.address_set)
            setAddressList(user.address_set)
    }, [user])
    return (
        <main>
        <UserPanelBase active="address" title="آدرس ها" >
            <div className='row justify-content-start'>
                           {
                               addressList.length ? addressList.map((address, index) => {
                                   return (<BoxAddress address={address} key={index} seq={index+1} onClick={e=>onEditClick(address)}/>)
                               }) : null
                           } 
                        </div>
                        <div className={styles.No_Address}>
                            <div>
                                <Button onClick={onCreateClick}>
                                    <p>
                                        افزودن آدرس جدید
                                        <AddBoxIcon />
                                    </p>

                                </Button>
                               
                            </div>
                        </div> 
                        {createMode
                        ?
                        <AddressDialog open={addressModalOpen} handleClose={closeAddressModal} create_mode _address={editAddress}/>
                        :
                        <AddressDialog open={addressModalOpen} handleClose={closeAddressModal}  _address={editAddress}/>
                        }
            </UserPanelBase>
        </main>
    )
}


export default withAuth(BasketAddress)