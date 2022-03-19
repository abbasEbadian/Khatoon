import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <div>
            <footer className={styles.footer}>
                <div className='container'>
                    <div className={styles.footer_top + ' row'}>
                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_top_item}>
                                <Image src={'/static/img/imgs/footer_icon1.svg'} width={60} height={60} />
                                <div>
                                    ۷ روز ضمانت بازگشت محصول
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_top_item}>
                                <Image src={'/static/img/imgs/footer_icon2.svg'} width={60} height={60} />
                                <div>
                                    ۷ روز ضمانت بازگشت محصول
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_top_item}>
                                <Image src={'/static/img/imgs/footer_icon1.svg'} width={60} height={60} />
                                <div>
                                    ۷ روز ضمانت بازگشت محصول
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_top_item}>
                                <Image src={'/static/img/imgs/footer_icon1.svg'} width={60} height={60} />
                                <div>
                                    ۷ روز ضمانت بازگشت محصول
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer_bottom + ' row'}>
                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_col}>
                                <div className={styles.head}>پشتیبانی </div>
                                <ul>
                                    <li><a href="">
                                        تلفن تماس: ۰۲۱ - ۳۳۳۳۳۳
                                    </a></li>
                                    <li><a href="">
                                        پشتیبانی آنلاین
                                    </a></li>
                                    <li><a href="">
                                        پیگیری سفارشات
                                    </a></li>
                                    <li><a href="">بازگشت کالا</a></li>
                                    <li><a href="">گزارش تخلف</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_col}>
                                <div className={styles.head}>پشتیبانی </div>
                                <ul>
                                    <li><a href="">
                                        تلفن تماس: ۰۲۱ - ۳۳۳۳۳۳
                                    </a></li>
                                    <li><a href="">
                                        پشتیبانی آنلاین
                                    </a></li>
                                    <li><a href="">
                                        پیگیری سفارشات
                                    </a></li>
                                    <li><a href="">بازگشت کالا</a></li>
                                    <li><a href="">گزارش تخلف</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_col}>
                                <div className={styles.head}>پشتیبانی </div>
                                <ul>
                                    <li><a href="">
                                        تلفن تماس: ۰۲۱ - ۳۳۳۳۳۳
                                    </a></li>
                                    <li><a href="">
                                        پشتیبانی آنلاین
                                    </a></li>
                                    <li><a href="">
                                        پیگیری سفارشات
                                    </a></li>
                                    <li><a href="">بازگشت کالا</a></li>
                                    <li><a href="">گزارش تخلف</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-12 col-md-3'>
                            <div className={styles.footer_col}>
                                <div className={styles.head}>درباره ما </div>
                                <div>
                                    <Image className={styles.headerLogo} src={'/images/logo/logo.png'} width={150} height={50} alt="logo" />
                                    <p className={styles.footer_about}>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer