import Image from 'next/image'
import React from 'react'
import style from '../../../styles/Home.module.scss'
import PinDropIcon from '@mui/icons-material/PinDrop';
import VerifiedIcon from '@mui/icons-material/Verified';
import IR from '../../elements/IR'
import { Chip } from '@mui/material';
import AddToCardButton from '../../elements/AddToCardButton';

function SuggestSlideItem({_product}) {
  const [product, setProduct] = React.useState({
    title: "کود گیاهی آپارتمانی",
    city: "مشهد",
    badge: "فروش کود اصلی",
    off: "28%",
    price: 180000,
    off_price: 130000,
    vendor: "فروشگاه خانگی ریحان",
    reviews: "4.5",
    reviews_count: 100
  }) 
  return (
    <div className={style.suggest_slider_item}>
      <div className={style.suggest_slider_item_image + " position_relative"} >
        <Image src="/images/cards/peste.png" width="180" height="150"/>
      </div>
      <div className={style.suggest_slider_item_content}>
        <h2>{product.title}</h2>
        <div>
          <span>
            {/* <PinDropIcon/> */}
            <small>{product.city}</small>
          </span>

          <span className="mx-3">
            {/* <VerifiedIcon/> */}
            <small className="mx-1">{product.vendor}</small>
          </span>
        </div>
        <div className="my-3 reviews d-flex align-items-center justify-content-between">
          <span className="text-black-50 ">
          {product.reviews} ({product.reviews_count} {" نظر"})
          </span>

          <span className="">
            <small className=""><Chip label={product.off} color="error" /></small>
          </span>
        </div>
      
        <div className="d-flex align-items-center justify-content-between mt-2">
          <AddToCardButton/>
          {product.off ? <>
            <s className="text-muted"><IR amount={product.price}/></s>
            <IR amount={product.off_price}></IR>
            </>
          : <IR amount={product.price}></IR> }
          
          
        </div>
      </div>

    </div>
  )
}

export default SuggestSlideItem