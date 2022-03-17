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
import BasketTabs from '../../components/Ui/BasketTabs/BasketTabs';
import PaymentMethodBox from '../../components/Ui/PaymentMethodBox/PaymentMethodBox';


function PaymentMethods() {

  const [paymentMethods, setPaymentMethods] = useState([
    {
      title: 'پرداخت از طریق کیف پول',
      description: 'با موجودی کیف پول خود خرید کنید',
      amount: 20000,
      icon: '/static/img/imgs/payment-terminal 1.png',
    },
    {
      title: 'پرداخت آنلاین',
      description: 'پرداخت از طریق درگاه بانکی مطمین و ایمن',
      amount: null,
      icon: '/static/img/imgs/payment-terminal 2.png',
    },
    {
      title: 'پرداخت از طریق کیف پول',
      description: 'با موجودی کیف پول خود خرید کنید',
      amount: null,
      icon: '/static/img/imgs/payment-terminal 3.png',
    }
  ])


  return (
    <section>
      <Head><title>خاتون زیبا | روش های پرداخت</title></Head>
      <div className=" container">
        <div className="row py-5">
          {/* buy process tabs */}
          <BasketTabs tab={2} />
        </div>
        <div className='row'>
          <div className='col-12 col-md-8'>
            <div className='card p-3'>
              <TextHeadTiltle title={'روش پرداخت خود را انتخاب کنید'}
                description={'شما میتوانید هرکدام از روش های موجود را برای پرداخت هزینه سفارش خود انتخاب کنید ..'}
              />

              <div className='row'>
                {
                  paymentMethods.map((item, index) => {
                    return (
                      <div className='col-md-4'>
                        <PaymentMethodBox item={item} key={index} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <BasketFactor />
          </div>
        </div>

      </div>
    </section>
  )
}


export default PaymentMethods