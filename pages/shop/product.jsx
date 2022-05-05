import { Typography } from '@mui/material'
import React from 'react'
import ProductNotAvailable from '../../components/Product/ProductNotAvailable'
import ProductSpecs from '../../components/Product/ProductSpecs'
import ProductToolbar from '../../components/Product/ProductToolbar'
import ProductSwiper from '../../components/Product/ProductSwiper'
import ProductVendor from '../../components/Product/ProductVendor'
import BoxItems from '../../components/Ui/BoxItems/BoxItems'

function Product() {
  
  const ProductSuggested = [
    {
        id: 1,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10 (1)f.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 2,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 3,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 4,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 5,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 6,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 7,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
    {
        id: 8,
        title: 'بلوز شلوار مخمل طرح پوست ماری',
        category_id: '123',
        seller: 'پوشاک کده نیل',
        garanty: 'کار با کیفیت جنس اصل',
        sendType: ' پست سفارشی',
        count: 1,
        image: '/static/img/imgs/image 10.png',
        price: '500000',
        priceWithDiscount: '400000'
    },
];
  
  const product = {
    
    name: "کاپشن بلند ترکیبی فوق‌العاده گرم",
    attributes: [
      {
        name: "وزن",
        value: "200 گرم"
      },
      {
        name: "وزن خالص",
        value: "250 گرم"
      }
    ], 
    about: <div>
      <p>📢 یه کاپشن بلند ترکیبی فوق العاده گرم واسه سرمای زمستون و پاییزتون حتما لازم میشه 😋</p>
      <p>🇮🇷  کالکشن پاییز 1400🧵 مدل </p>
      <p>lV کد 225سایز بندی 2 سایز مناسب برای 36 تا 44🧥 ...</p>
    </div>
  }
  return (
    <section id="product-page" className="container_custom">
      <div className="product-main card_style">
        <ProductToolbar/>
        <div className="row">
          <div className="col-lg-4 col-12">
            <ProductSwiper />
          </div>
          <div className="col-lg-8 col-12 py-4 py-lg-0">
            <Typography component="h1" fontSize="20px">{product.name}</Typography>
            <div className="row">
              <div className="col-lg-6 col-12">
                <ProductNotAvailable />
              </div>
              <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                <ProductVendor/>
              </div>
              <div className="col-12">
                <ProductSpecs product={product} />
              </div>
            </div>
          </div>
        </div>

      </div>
        <div className='row'>
          <div className='col-12 mt-5'>
            <BoxItems boxClasses="my-5" items={ProductSuggested} title={'محصولات مشابه'} />
          </div>
        </div>
      
    </section>
  )
}

export default Product