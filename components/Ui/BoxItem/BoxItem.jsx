import React from 'react'
import styles from './BoxItem.module.scss';
import Image from 'next/image'
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function BoxItem({item}) {
    return (
        <div className={styles.box_item}>
            <Image src={item.image} width="100%" height="100%" layout="responsive" objectFit="contain" />
            <h5 className={styles.box_item_title}>
                <a>
                    {item.title}
                </a>
            </h5>
            <div className={styles.box_item_price}>
                <div >
                    <IconButton color="error" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
                <div className='d-flex flex-column'>
                    <span >{item.price}</span>
                    <del style={{ color: '#7D7D7D', marginLeft: '4px' }}>244000</del>
                </div>
            </div>
        </div>
    )
}

export default BoxItem