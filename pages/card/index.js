import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import ContactUsOptions from '../../components/Ui/ContactUsOptions';
import styles from '../../styles/card.module.scss'
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle';
import { Box, Button, IconButton, Tab, Tabs } from '@mui/material';
import FormItem from 'antd/lib/form/FormItem';
import Image from 'next/image'
import BasketItem from '../../components/Ui/BasketItem/BasketItem';
import BasketFactor from '../../components/Ui/BasketFactor/BasketFactor';
import BoxItems from '../../components/Ui/BoxItems/BoxItems';



function card() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [basketList, setBasketList] = useState([
    {
      id: 1,
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
  ])


  const handleIncrement = (id) => {
    let basketItem = basketList.find(item => item.id == id);
    basketItem.count += 1;
  };

  const handleDecrement = (id) => {
    let basketItem = basketList.find(item => item.id == id);
    basketItem.count -= 1;
  };

  const removeItem = (id) => {
    let basketItems = basketList.filter(item => item.id != id);
    setBasketList(basketItems)
  }

  return (
    <section>
      <Head><title>خاتون زیبا | سبد خرید</title></Head>
      <div className=" container">
        <div className="row py-5">
          {/* buy process tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'white' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="سبد خرید" />
              <Tab label="افزودن آدرس" />
              <Tab label="پرداخت" />
              <Tab label="تاییده پرداخت" />
            </Tabs>
          </Box>
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            {basketList.map((item, index) => <BasketItem removeItem={removeItem} decrement={handleDecrement} increment={handleIncrement} klass="mb-3" key={index} item={item} />)}
          </div>
          <div className='col-12 col-md-4'>
            <BasketFactor />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 mt-5'>
            <BoxItems boxClasses="my-5" title={'محصولات پیشنهادی'} />
          </div>
        </div>
      </div>
    </section>
  )
}


export default card