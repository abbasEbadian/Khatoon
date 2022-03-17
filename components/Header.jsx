import React from 'react'
import styles from '../styles/Header.module.css'
import HeaderSearcBox from './elements/HeaderSearcBox'
import HeaderMegaMenu from './elements/HeaderMegaMenu'
import Image from 'next/image'
import Link from 'next/link'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import useScrollingUp from './utils/ScrollHook'
import Sidebar from './Sidebar'
function Header() {
    
    const [isScrollingUp, scrollAmount] = useScrollingUp()    
    return (
        <header className={isScrollingUp? styles.headersticky: scrollAmount> 120? styles.headerhide: styles.header }>
            <div className='container_custom'>
                <div className={styles.headerTop}>
                    <Sidebar />
                    <Image className={styles.headerLogo} src={'/images/logo/logo.png'} width={150} height={50} alt="logo"/>
                    <HeaderSearcBox className={styles.header_searchbox}/>
                    <div className={styles.headerActions}>
                        <Link href="/auth">
                            <a className={styles.headerActionsItem}>
                                <FingerprintIcon/>
                                <small>ورود / ثبت نام</small>
                            </a>
                        </Link>
                        <Link href="/blog">
                            <a className={styles.headerActionsItem}>
                                <ArticleIcon/>
                                <small>مجله</small>
                            </a>
                        </Link>
                        <Link href="/messages">
                            <a className={styles.headerActionsItem}>
                                <ChatBubbleOutlineIcon/>
                                <small>پیام ها</small>
                            </a>
                        </Link>
                        <Link href="/basket">
                            <a className={styles.headerActionsItem}>
                                <ShoppingBasketIcon/>
                                <small>سبد خرید</small>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <span className={styles.headerDevider}></span>

            <div className={' container_custom'}>
                <div className={styles.headerBottom}>
                    <HeaderMegaMenu />
                </div>
            </div>

            
        </header>
    )
}

export default Header