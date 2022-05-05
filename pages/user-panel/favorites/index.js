import React, { useState } from 'react'
import BoxItem from '../../../components/Ui/BoxItem/BoxItem'
import UserPanelBase from '../../../components/UserPanelBase';
import styles from './favorits.module.scss'
import withAuth from '../../../redux/withAuth'

function index() {

    const favorites = [
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

    ];


  



    return (
        <UserPanelBase active={"favorites"} title={"علاقه مندی ها"} >
            <main className={styles.favorites + " pb-5"}>
                <div className='row'>
                    {
                        favorites.map((item, index) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-3 mb-3' key={index}>
                                    <BoxItem item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </UserPanelBase>
        
    )
}

export default withAuth(index)