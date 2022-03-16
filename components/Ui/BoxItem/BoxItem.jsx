import React from 'react'
import styles from './BoxItem.module.scss';
import Image from 'next/image'
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function BoxItem() {
    return (
        <div className={styles.box_item}>
            <Image src="/static/img/imgs/image 10 (1).png" width="100%" height="100%" layout="responsive" objectFit="contain" />
            <h5 className={styles.box_item_title}>
                <a>
                    بولیز شلوار طرح پوست ماری
                </a>
            </h5>
            <div className={styles.box_item_price}>
                <div >
                    <IconButton color="error" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
                <div >
                    <span >300000</span>
                    <span style={{ textDecoration: 'line-through', color: '#7D7D7D', marginLeft: '4px' }}>244000</span>
                </div>
            </div>
        </div>
    )
}

export default BoxItem