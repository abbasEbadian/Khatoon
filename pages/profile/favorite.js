import React, { useState } from 'react'
import SidebarMenu from '../../components/elements/sidebarMenu';
import BoxItem from '../../components/Ui/BoxItem/BoxItem'
import BoxItems from '../../components/Ui/BoxItems/BoxItems'
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle'
import styles from '../profile/favorits.module.scss'
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


    const relatedProducts = [
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

    ];



    const lastBlogs = [
        {
            id: 1,
            title: 'بلوز شلوار مخمل طرح پوست ماری',
            image: '/static/img/imgs/blog.png',

        },
        {
            id: 2,
            title: 'بلوز شلوار مخمل طرح پوست ماری',
            image: '/static/img/imgs/blog.png',

        },
        {
            id: 3,
            title: 'بلوز شلوار مخمل طرح پوست ماری',
            image: '/static/img/imgs/blog.png',

        },
        {
            id: 4,
            title: 'بلوز شلوار مخمل طرح پوست ماری',
            image: '/static/img/imgs/blog.png',

        },
        {
            id: 5,
            title: 'بلوز شلوار مخمل طرح پوست ماری',
            image: '/static/img/imgs/blog.png',

        },
        {
            id: 6,
            title: 'بلوز شلوار مخمل طرح پوست ماری',
            image: '/static/img/imgs/blog.png',

        },
        {
            id: 7,
            title: 'بلوز شلوار مخمل طرح پوست ماری',
            image: '/static/img/imgs/blog.png',

        },
    ];

    return (
        <div className='container'>
            <div className="card_style">
                <div className='row'>
                    <SidebarMenu />
                    <main className={styles.favorites + " pb-5"}>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className=''>
                                        <TextHeadTiltle title={'علاقه مندی های من'} underline_dec={true} />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                {
                                    favorites.map((item, index) => {
                                        return (
                                            <div className='col-12 col-md-6 col-lg-3 mb-3'>
                                                <BoxItem item={item} />
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </main>
                </div>
            </div>

            {/* Suggestion Products */}
            <div className='card_style mt-5'>
                <div className='row '>
                    <div className='col-12'>
                        <BoxItems title={'محصولات پیشنهادی'} items={relatedProducts} />
                    </div>
                </div>
            </div>

            {/* Last Blogs */}
            <div className='card_style mt-5'>
                <div className='row '>
                    <div className='col-12'>
                        <BoxItems type={'blog'} title={'آخرین مطالب وبلاگ رو براتون آوردیم'} items={lastBlogs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index