import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import TextHeadTiltle from './TextHeadTiltle';
import BasketFactor from './BasketFactor/BasketFactor';
import BasketTabs from './BasketTabs/BasketTabs';
import PaymentMethodBox from './PaymentMethodBox/PaymentMethodBox';
import withAuth from '../../redux/withAuth'

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
    <div className='card p-3'>
      <TextHeadTiltle title={'روش پرداخت خود را انتخاب کنید'}
        description={'شما میتوانید هرکدام از روش های موجود را برای پرداخت هزینه سفارش خود انتخاب کنید ..'}
      />

      <div className='row'>
        {
          paymentMethods.map((item, index) => {
            return (
              <div className='col-md-4' key={index}>
                <PaymentMethodBox item={item} key={index} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default withAuth(PaymentMethods)