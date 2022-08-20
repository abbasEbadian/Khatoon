import React,{useState} from 'react'
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
import Menu from '@mui/material/Menu';
import MenuItems from '../components/elements/MenuItems';
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [colors,setColors]=useState({
        user:"grey",
        magazine:"grey",
        message:"grey",
        bag:"grey"
    });
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMouseOver = (prop) => (event) => {
        setColors({ ...colors, [prop]: "#e9696d" });
    };
    const handleMouseLeave = (prop) => (event) => {
        setColors({ ...colors, [prop]: "grey" });
    };
    
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
                        
                        {!authenticated? <a className={"headerActionsItem "}onMouseOver={handleMouseOver("user")} onMouseLeave={handleMouseLeave("user")} onClick={handleLoginOpen}  style={{color:colors.user}}>
                            <FingerprintIcon/>
                            <small>ورود / ثبت نام</small>
                        </a>:
                            <a className={"headerActionsItem "} onMouseOver={handleMouseOver("user")} onMouseLeave={handleMouseLeave("user")}  style={{color:colors.user}} onClick={handleClick}>
                                <PersonIcon/>
                                <small>حساب </small>
                            </a>}
                        <Link href="/blog">
                            <a className={"headerActionsItem "} onMouseOver={handleMouseOver("magazine")} onMouseLeave={handleMouseLeave("magazine")}  style={{color:colors.magazine}}>
                                <ArticleIcon/>
                                <small>مجله</small>
                            </a>
                        </Link>
                        <Link href="/user-panel/messages">
                            <a className={"headerActionsItem "} onMouseOver={handleMouseOver("message")} onMouseLeave={handleMouseLeave("message")} style={{color:colors.message}}>
                                <Badge badgeContent={user?.unread_message_count || 0} color="error">
                                    <ChatBubbleOutlineIcon/>
                                </Badge>
                                <small>پیام ها</small>
                            </a>
                        </Link>
                        <Link href="/card">
                            <a className={"headerActionsItem "} onMouseOver={handleMouseOver("bag")} onMouseLeave={handleMouseLeave("bag")}  style={{color:colors.bag}}>

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
        <Menu
        
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              mr: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              width: 20,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <MenuItems active="address"/>

      </Menu>
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