import Image from 'next/image'
import React from 'react'
import style from '../../../styles/Home.module.scss'
import PinDropIcon from '@mui/icons-material/PinDrop';
import VerifiedIcon from '@mui/icons-material/Verified';
import IR from '../../elements/IR'
import { Chip } from '@mui/material';

function TimerSlideItem({_product}) {
  const [product, setProduct] = React.useState({
    title: "کود گیاهی آپارتمانی",
    city: "مشهد",
    badge: "فروش کود اصلی",
    off: "28%",
    price: 180000,
    off_price: 130000
  }) 
  return (
    <div className={style.timer_slider_item}>
      <div className={style.timer_slider_item_image + " position_relative"} >
        <Image src="/images/cards/peste.png" width="180" height="150"/>
      </div>
      <div className={style.timer_slider_item_content}>
        <h2>{product.title}</h2>
        <div>
          <span>
            <PinDropIcon/>
            <small>{product.city}</small>
          </span>

          <span className="mx-3">
            <VerifiedIcon/>
            <small className="mx-1">{product.badge}</small>
          </span>
        </div>
      
        <div className="d-flex align-items-center justify-content-between mt-2">
          {product.off ? <>
            <s className="text-muted"><IR amount={product.price}/></s>
            <IR amount={product.off_price}></IR>
            <Chip label={product.off} color="error" />
            </>
          : <IR amount={product.price}></IR>}
          
        </div>
      </div>

    </div>
  )
}

export default TimerSlideItem