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
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Sidebar from './Sidebar'
import PersonIcon from '@mui/icons-material/Person';
import {useSelector} from 'react-redux'

function Header({ handleLoginClose, handleLoginOpen, loginModalOpen }) {
    const [isScrollingUp, scrollAmount] = useScrollingUp()    
    const [pinHeader, setPinHeader] = React.useState(false)    
    const togglePinHeader = ()=>{
        setPinHeader(!pinHeader)
    }
    const { user, authenticated } = useSelector(s=>s.auth)
    // <header className={isScrollingUp? styles.headersticky: ? styles.headerhide: styles.header }>
    return (<>
        <header className={styles.header + " " + (pinHeader? styles.stickHeader : "") }>
            <div className='container_custom'>
                <div className={styles.headerTop}>
                    <Sidebar />
                    <Link href="/">
                        <a>
                        <Image className={styles.headerLogo} src={'/images/logo/logo.png'} width={150} height={50} alt="logo"/>
                        </a>
                    </Link>
                    <HeaderSearcBox className={styles.header_searchbox}/>
                    <div className={styles.headerActions}>
                        
                        {!authenticated? <a className={styles.headerActionsItem} onClick={handleLoginOpen}>
                            <FingerprintIcon/>
                            <small>ورود / ثبت نام</small>
                        </a>:
                            <Link href="/user-panel/profile">
                            <a className={styles.headerActionsItem}>
                                <PersonIcon/>
                                <small>حساب </small>
                            </a>
                        </Link>}
                        <Link href="/blog">
                            <a className={styles.headerActionsItem}>
                                <ArticleIcon/>
                                <small>مجله</small>
                            </a>
                        </Link>
                        <Link href="/user-panel/tickets">
                            <a className={styles.headerActionsItem}>
                                <ChatBubbleOutlineIcon/>
                                <small>پیام ها</small>
                            </a>
                        </Link>
                        <Link href="/card">
                            <a className={styles.headerActionsItem}>
                                <ShoppingBasketIcon/>
                                <small>سبد خرید</small>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <span className={styles.headerDevider}></span>
        </header>
        <div className={' container_custom ' + styles.header_bot}>
        <div className={styles.headerBottom + " " + (scrollAmount>= 90 ? styles.headerBottomScrolled : "") }>
            <HeaderMegaMenu />
            {pinHeader?
                <ArrowCircleUpIcon className={styles.arrow} role="button" onClick={togglePinHeader}/>
                :
                <ArrowCircleDownIcon className={styles.arrow} role="button" onClick={togglePinHeader}/>
            }
        </div>
    </div>
        </>
    )
}

export function getInitialProps(props) {
    console.log(props)
    return props
}
export default Header