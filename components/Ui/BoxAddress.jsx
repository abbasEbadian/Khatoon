import React from 'react'
import Link from "next/link";
import { useState } from "react";
import styles from '../../styles/AddressBox.module.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {change_active_address, delete_address} from '../../redux/actions'
import {useDispatch} from 'react-redux'
import DeleteAddressDialog from './Dialogs/DeleteAddressDialog'
import { Button } from '@mui/material';

function ContactUsOptions(props) {
    const {province_id,
        city_id,
        address,
        postal,
        mobile,
        phone,
        active,
        id
    } = props.address;
    const dispatch = useDispatch()
    const [deleteOpen, setDeleteOpen] = React.useState(false) 
    const openDeleteModal = ()=>setDeleteOpen(true)
    const closeDeleteModal = ()=>setDeleteOpen(false)

    const change_active = (id)=>{ 
        dispatch(change_active_address(id))
    }
    const _delete_address = (id)=>{ 
        dispatch(delete_address(id, closeDeleteModal))
    }
    
    return (
        <div className='col-12 col-md-6 col-xxl-4 p-4' >
            <div className={styles.BoxAddress + (active ? ' border-1 border-success' : "")}>
                <div className={styles.HeadBoxAddress + " pb-2"}>
                    <p>
                        <span><strong>آدرس</strong></span> <span>شماره {" "}{props.seq  }</span> 
                        <b className={"text-success"  }>
                            {(active ? ' (پیش فرض)' : "")}
                        </b>
                    </p>
                    <s className="me-auto"></s>
                    {
                        !active &&
                        <Button variant="contained"  onClick={e=>change_active(id)} size="small" color="success">
                            تنظیم پیش فرض
                        </Button>
                    }
                    <EditIcon className="mx-3" role="button" onClick={props.onClick}/>
                    <DeleteIcon onClick={openDeleteModal} role="button"/>
                </div>
                <div className={styles.ContentAddressBox}>
                    <div>
                        <strong>استان :</strong> <span> {province_id.name} </span>
                    </div>
                    <div>
                        <strong>شهرستان :</strong> <span> {city_id.name} </span>
                    </div>
                    <div>
                        <strong>آدرس :</strong> <span> {address}</span>
                    </div>
                    <div>
                        <strong>کدپستی :</strong> <span> {postal} </span>
                    </div>
                    <div>
                        <strong>شماره تلفن :</strong> <span> {mobile} </span>
                    </div>
                    <div>
                        <strong>  تلفن ثابت :</strong> <span> {phone} </span>
                    </div>
                </div>
            </div>
            <DeleteAddressDialog open={deleteOpen} handleClose={closeDeleteModal} onClick={e=>_delete_address(id)} />
            
        </div>
    )
}

export default ContactUsOptions