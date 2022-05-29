import React from 'react'
import { useState } from 'react';
import FormItem from 'antd/lib/form/FormItem';
import Image from 'next/image'
import BasketItem from '../../components/Ui/BasketItem/BasketItem';
import BasketFactor from '../../components/Ui/BasketFactor/BasketFactor';
import BoxItems from '../../components/Ui/BoxItems/BoxItems';
import BasketTabs from '../../components/Ui/BasketTabs/BasketTabs';
import withAuth from '../../redux/withAuth'
import PaymentMethods from '../../components/Ui/PaymentMethods';
import AddressList from '../../components/Ui/AddressList';
import {useSelector} from 'react-redux'
import Head from 'next/head'
import {ThreeDots} from 'react-loader-spinner'

function Card() {
  const {user, loadingUser: loading, basket, loadingBasket} = useSelector(s=>s.auth)  
  const [tab, setTab] = React.useState(0)
  const [address, setAddress] = React.useState(0)

  const [basketList, setBasketList] = useState([])

  React.useEffect(()=>{
    setBasketList(basket?.orderlines || [])
  },[basket, setBasketList])

  return (
    <section>
      <Head><title>خاتون زیبا | سبد خرید</title></Head>
      <div className=" container">
        {basket?.orderlines?
          <>
            <div className="row py-5">
              <div className="col-12">
                {/* buy process tabs */}
                <BasketTabs tab={tab} setTab={setTab} />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-8'>
                {
                  tab===0?
                    basketList.map((item, index) =>{
                      return <BasketItem key={index} item={item} />
                      })
                  :tab===1?
                      <AddressList address={address} setAddress={setAddress} linear  />
                  : 
                      <PaymentMethods />
                }
                
              </div>
              <div className='col-12 col-md-4'>
                <BasketFactor basket={basket} />
              </div>
            </div>
          </>: !loadingBasket? <div className="alert alert-info w-100 py-4">
            سبد خرید شما خالیست
          </div>:
          <div className="alert alert-info w-100 py-4 d-flex align-items-center justify-content-center">
            <span className="mx-2">در حال دریافت</span>
            
            <ThreeDots width={20} height={20} color="bule"/> 
          </div>
        }
       
      </div>
    </section>
  )
}


export default withAuth(Card)