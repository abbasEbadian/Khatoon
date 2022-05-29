import React from 'react'
import Image from 'next/image'
import { IconButton, Typography } from '@mui/material';
import AddToCardButton from '../../elements/AddToCardButton'
import VerifiedIcon from '@mui/icons-material/Verified';
import IRT from '../../IRT'
import { BASE_URL } from '../../../redux/endpoints';
import Link from 'next/link';
import ProductFavoriteToggler from '../../../components/Products/ProductFavoriteToggler'

function BoxItem({item}) {
    return (
        <div className={"box_item mb-2"}>
            <div className="favbox">
                <ProductFavoriteToggler product_id={item.id} />
            </div>
            <Link href={"/shop/product/" + item.url}>
                <a>
                    {item.image?
                    <Image src={BASE_URL + item.image} width="100%" height="100%" layout="responsive" objectFit="cover" alt="product" sx={{borderRadius: "16px"}}/>
                    : null}
                    <h5 className={"box_item_title "}>
                        {item.name} 
                    </h5>
                </a>
            </Link>
            <div className="my-3">
                {/* <span>
                    <PinDropIcon/>
                    <small>{item?.city}</small>
                </span> */}

                <span >
                    <VerifiedIcon sx={{color: "#bbb"}} />
                    <small className="mx-1">{item?.market_id?.name}</small>
                </span>
            </div>
            <div className={"box_item_price "}>
                <div >
                    <AddToCardButton template_id={item.id} />
                </div>
                <div className='d-flex similar-products-price'>
                    {item.off?
                    <>
                        <del className="text-black-50 mx-2"><IRT amount={244000} /></del>
                        <span> <IRT amount={item.price} /></span>
                    </>
                    :
                        <Typography sx={{fontSize :"14px"}} > <IRT amount={item.price} /></Typography>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default BoxItem