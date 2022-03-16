import React from 'react'
import styles from './BlogItem.module.scss';
import Image from 'next/image'
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function BlogItem({item}) {
    return (
        <div className={styles.blog_item}>
            <Image src={item.image} width="100%" height="60%" layout="responsive" objectFit="cover" />
            
            <h3 className={styles.blog_item_title}>
               {item.title}
            </h3>
        </div>
    )
}

export default BlogItem