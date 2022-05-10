import React from 'react'
import styles from './BoxItem.module.scss';
import Image from 'next/image'
import { IconButton, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddToCardButton from '../../elements/AddToCardButton'
import IR from '../../elements/IR'
import { BASE_URL } from '../../../redux/endpoints';
import Link from 'next/link';
function BoxItem({item}) {
    return (
        <div className={styles.box_item}>
            <Link href={"/shop/product/" + item.url}>
                <a>
                    {item.image?
                    <Image src={BASE_URL + item.image} width="100%" height="100%" layout="responsive" objectFit="cover" alt="product" sx={{borderRadius: "16px"}}/>
                    : null}
                    <h5 className={styles.box_item_title}>
                        {item.name} 
                    </h5>
                </a>
            </Link>
            <div className={styles.box_item_price}>
                <div >
                    <AddToCardButton />
                </div>
                <div className='d-flex similar-products-price'>
                    {item.off?
                    <>
                        <del className="text-black-50 mx-2"><IR amount={244000} /></del>
                        <span> <IR amount={item.price} /></span>
                    </>
                    :
                        <Typography sx={{fontSize :"16px"}} > <IR amount={item.price} /></Typography>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default BoxItem