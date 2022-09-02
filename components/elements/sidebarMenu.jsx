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
import userss from '../../static/img/icon/user.svg'
import Exit from '../../static/img/icon/Exit.svg'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { user_imlink } from '../utils'
import { OrderedMap } from 'immutable';
import IconButton from "@mui/material/IconButton"
import setting from '../../static/img/icon/setting-2.svg'
import Barrier from '../utils/SVGBarrier'

function SidebarMenu({active, openSidebar, setOpenSidebar}) {

    const user = useSelector(s=>s.auth.user)
    const menu_items=[
        {name:"wallet",primary:"کیف پول",ename:"/user-panel/wallet", icon:Wallet},
        {name:"pending_orders",primary:"سفارش های من",ename:"/user-panel/orders",icon:Order},
        {name:"favorites",primary:"علاقه مندی ها",ename:"/user-panel/favorites",icon:Bookmark},
        {name:"download",primary:"دانلودها",ename:"/user-panel/downloads",icon:Download},
        {name:"address",primary:"آدرس ها",ename:'/user-panel/address',icon:Address},
        {name:"tickets",primary:"تیکت های پشتیبانی",ename:'/user-panel/tickets',icon:Ticket},
        {name:"managment",primary:"مدیریت غرفه",ename:'/vendor-panel/dashboard',icon:ManageShop},
        {name:"profile",primary:"پروفایل",ename:'/user-panel/profile',icon:userss},
        {name:"exit",primary:"خروچ",ename:'/user-panel/exit',icon:Exit},
    ]
    const handleMouseOver = (prop) => (event) => {
       if(active!==prop){
        setColors({ ...colors, [prop]: "#e9696d" });
        setIconcolor({...iconcolor,[prop]:"filter-colors"});
       }
      
    };
    const handleMouseLeave = (prop) => (event) => {
        setColors({ ...colors, [prop]: "#000000" });
        setIconcolor({...iconcolor,[prop]:""});

    };
    return (
            <aside className={"sidebar_menu" +( openSidebar ? ` ${ "open"}` : '')}>
                <div className={"header_sidebar"}>
                
                    <div className="row row-cols-3 p-3">
                    <div className={"profile_pic col-4"}>
                        <img src={user_imlink(user?.avatar_image)} style={{width:"20px",height:"20px"}}/>
                    </div>
                    <div className="col-5 pt-5">
                            <p>{user?.first_name}</p>
                            <span></span>
                    </div>
                    <div className="col-3 pt-4 mt-1">
                    <Link href="/user-panel/edit">
                            <IconButton>
                                <Image src={setting} alt="Settings" />
                            </IconButton>
                            
                    </Link>
                    </div>
                    </div>
                    
                    <div className={"link_menu"}>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                        {menu_items.map((item,idx)=>(
                          <ListItemButton selected={active === item.name} key={idx}>
                            <Link href={item.ename}>
                                <a className={"menu_item_new"}>
                                <ListItemIcon className={"LinkIcon"}>
                                    <Barrier Component={item.icon} className={"menu_item_new"} width="18px" height="18px"/>
                                </ListItemIcon>
                                <ListItemText className="ms-3" primary={item.primary} />
                                </a>
                            </Link>
                            
                        </ListItemButton >
                        ))}               

                        </List>
                    </div>
                   
                </div>
        </aside>
    )
}

export default SidebarMenu