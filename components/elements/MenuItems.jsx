import React,{useState} from 'react'
import Image from 'next/image'
import Profile from '../../static/img/icon/memoji.png'
import Order from '../../static/img/icon/Vector.svg'
import Wallet from '../../static/img/icon/Shape.svg'
import OrderHistory from '../../static/img/icon/OrderHistory.svg'
import Bookmark from '../../static/img/icon/Bookmark.svg'
import Download from '../../static/img/icon/Download.svg'
import Address from '../../static/img/icon/Address.svg'
import Ticket from '../../static/img/icon/Ticket.svg'
import ManageShop from '../../static/img/icon/ManageShop.svg'
import Exit from '../../static/img/icon/Exit.svg'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { user_imlink } from '../utils'
export default function MenuItems(active) {
    const user = useSelector(s=>s.auth.user);
    const [colors,setColors]=useState({
        bag:"#000000",
        order:"#000000",
        favorite:"#000000",
        download:"#000000",
        address:"#000000",
        ticket:"#000000",
        manage:"#000000",
        profile:"#000000",
        exit:"#000000",
    });
    
    const handleMouseOver = (prop) => (event) => {
        setColors({ ...colors, [prop]: "#e9696d" });
    };
    const handleMouseLeave = (prop) => (event) => {
        setColors({ ...colors, [prop]: "#000000" });
    };
  return (
    <div>
        <div className={"header_sidebar"} dir="rtl" style={{width:"260px"}}>
                    <div className={"profile_pic mt-2"} style={{paddingRight:"10%"}}>
                        <Image src={user_imlink(user?.avatar_image)} alt={"profile"} width="50" height={50} objectFit="cover"/>
                    </div>
                    <div className={"id_menu"}>
                        <div>
                            <p>{user?.first_name}</p>
                            <p>{user?.email}</p>
                            <span></span>
                        </div>
                    </div>
                    <div className={"link_menu"}>
                    <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton selected={active === "wallet"}>
                                <Link href="/user-panel/wallet">
                                    <a style={{color:colors.bag}} onMouseOver={handleMouseOver('bag')} onMouseLeave={handleMouseLeave('bag')}>
                                    <ListItemIcon className={"LinkIcon"}>
                                        <Image src={Wallet} alt="Wallet"/>
                                    </ListItemIcon>
                                    <ListItemText  primary="کیف پول" />
                                    </a>
                                </Link>
                                
                            </ListItemButton >
                            <ListItemButton  selected={active === "pending_orders"}>
                                <Link href="/user-panel/orders">
                                    <a  style={{color:colors.order}} onMouseOver={handleMouseOver('order')} onMouseLeave={handleMouseLeave('order')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Order} alt="Order" />
                                        </ListItemIcon>
                                        <ListItemText primary="سفارش های من" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            
                            <ListItemButton  selected={active === "favorites"}>
                                <Link href="/user-panel/favorites">
                                    <a style={{color:colors.favorite}} onMouseOver={handleMouseOver('favorite')} onMouseLeave={handleMouseLeave('favorite')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Bookmark} alt="Bookmark" />
                                        </ListItemIcon>
                                        <ListItemText primary="علاقه مندی ها" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton selected={active === "downloads"}> 
                                <Link href="/user-panel/downloads">
                                    <a style={{color:colors.download}} onMouseOver={handleMouseOver('download')} onMouseLeave={handleMouseLeave('download')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Download} alt="Download" />
                                        </ListItemIcon>
                                        <ListItemText primary="دانلودها" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton selected={active === "address"}>
                                <Link href="/user-panel/address">
                                    <a style={{color:colors.address}} onMouseOver={handleMouseOver('address')} onMouseLeave={handleMouseLeave('address')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Address} alt="Address" />
                                        </ListItemIcon>
                                        <ListItemText primary="آدرس ها" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            
                            <ListItemButton selected={active === "ticket"}>
                                <Link href="/user-panel/tickets">
                                    <a style={{color:colors.ticket}} onMouseOver={handleMouseOver('ticket')} onMouseLeave={handleMouseLeave('ticket')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Ticket} alt="Ticket" />
                                        </ListItemIcon>
                                        <ListItemText primary="تیکت های پشتیبانی" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton selected={active === "managment"}>
                                <Link href="/vendor-panel/dashboard">
                                    <a style={{color:colors.manage}} onMouseOver={handleMouseOver('manage')} onMouseLeave={handleMouseLeave('manage')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={ManageShop} alt="ManageShop" />
                                        </ListItemIcon>
                                        <ListItemText primary="مدیریت غرفه" />
                                    </a>
                                </Link>
                            </ListItemButton >
                            <ListItemButton selected={active === "profile"}>
                                <Link href="/user-panel/profile">
                                    <a style={{color:colors.profile}} onMouseOver={handleMouseOver('profile')} onMouseLeave={handleMouseLeave('profile')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="پروفایل" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton >
                                <Link href="/signout">
                                    <a style={{color:colors.exit}} onMouseOver={handleMouseOver('exit')} onMouseLeave={handleMouseLeave('exit')}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Exit} alt="Exit" />
                                        </ListItemIcon>
                                        <ListItemText primary="خروج" />
                                    </a>
                                </Link>
                            </ListItemButton>

                        </List>
                    </div>
                   
                </div>
    </div>
  )
}
