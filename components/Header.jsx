import React from 'react'
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
import BecomeVendorButton from './elements/BecomeVendorButton'
import { Badge } from '@mui/material'

function Header({ handleLoginClose, handleLoginOpen, loginModalOpen }) {
    const {basket} = useSelector(s=>s.auth)
    const [isScrollingUp, scrollAmount] = useScrollingUp()    
    const [pinHeader, setPinHeader] = React.useState(false)    
    const togglePinHeader = ()=>{
        setPinHeader(!pinHeader)
    }
    const { user, authenticated } = useSelector(s=>s.auth)
    // <header className={isScrollingUp? "headersticky ": ? "headerhide ": "header " }>
    return (<>
        <header className={"header " + " " + (pinHeader? "stickHeader " : "") }>
            <div className='container_custom'>
                <div className={"headerTop "}>
                    <Sidebar />
                    <Link href="/">
                        <a>
                        <Image className={"headerLogo "} src={'/images/logo/logo.png'} width={150} height={50} alt="logo"/>
                        </a>
                    </Link>
                    <HeaderSearcBox className={"header_searchbox "}/>
                    <div className={"headerActions "}>
                        
                        {!authenticated? <a className={"headerActionsItem "} onClick={handleLoginOpen}>
                            <FingerprintIcon/>
                            <small>ورود / ثبت نام</small>
                        </a>:
                            <Link href="/user-panel/profile">
                            <a className={"headerActionsItem "}>
                                <PersonIcon/>
                                <small>حساب </small>
                            </a>
                        </Link>}
                        <Link href="/blog">
                            <a className={"headerActionsItem "}>
                                <ArticleIcon/>
                                <small>مجله</small>
                            </a>
                        </Link>
                        <Link href="/user-panel/messages">
                            <a className={"headerActionsItem "}>
                                <Badge badgeContent={user?.unread_message_count || 0} color="error">
                                    <ChatBubbleOutlineIcon/>
                                </Badge>
                                <small>پیام ها</small>
                            </a>
                        </Link>
                        <Link href="/card">
                            <a className={"headerActionsItem "}>

                                <Badge badgeContent={basket?.products_count||0} color="error">
                                    <ShoppingBasketIcon/>
                                </Badge>
                                
                                <small>سبد خرید</small>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <span className={"headerDevider "}></span>
        </header>
        <div className={' container_custom ' + "header_bot "}>
        <div className={"headerBottom " + " " + (scrollAmount>= 90 ? "headerBottomScrolled " : "") }>
            <HeaderMegaMenu />
            <BecomeVendorButton />
            {pinHeader?
                <ArrowCircleUpIcon className={"arrow "} role="button" onClick={togglePinHeader}/>
                :
                <ArrowCircleDownIcon className={"arrow "} role="button" onClick={togglePinHeader}/>
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