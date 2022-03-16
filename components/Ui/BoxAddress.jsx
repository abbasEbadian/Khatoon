import React from 'react'
import Link from "next/link";
import { useState } from "react";
import styles from '../../styles/AddressBox.module.css'
import EditIcon from '@mui/icons-material/Edit';
function ContactUsOptions(props) {
    console.log(props);
    const {province,
        city,
        address,
        zipcode,
        phonenumber,
        telephone} = props.address;
    return (
        <div className='col-12 col-md-5 pb-5'>
            <div className={styles.BoxAddress}>
                <div className={styles.HeadBoxAddress}>
                    <p>
                        <span><strong>آدرس</strong></span> <span>اول</span>
                    </p>
                    <EditIcon />
                </div>
                <div className={styles.ContentAddressBox}>
                    <div>
                        <strong>استان :</strong> <span> {province} </span>
                    </div>
                    <div>
                        <strong>شهرستان :</strong> <span> {city} </span>
                    </div>
                    <div>
                        <strong>آدرس :</strong> <span> {address}</span>
                    </div>
                    <div>
                        <strong>کدپستی :</strong> <span> {zipcode} </span>
                    </div>
                    <div>
                        <strong>شماره تلفن :</strong> <span> {phonenumber} </span>
                    </div>
                    <div>
                        <strong>  تلفن ثابت :</strong> <span> {telephone} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsOptions