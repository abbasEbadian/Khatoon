import React,{useState} from 'react'
import Image from 'next/image'

import Profile from '../../static/img/icon/memoji.png'
import Order from '../../static/img/icon/basic/send-sqaure-2.svg'
import Wallet from '../../static/img/icon/basic/wallet-2.svg'
import Favorites from '../../static/img/icon/basic/heart.svg'
import Download from '../../static/img/icon/basic/arrow-down-2.svg'
import Address from '../../static/img/icon/basic/map.svg'
import Ticket from '../../static/img/icon/basic/messages-2.svg'
import ManageShop from '../../static/img/icon/basic/shop.svg'
import userprofile from '../../static/img/icon/basic/user-square.svg'
import Exit from '../../static/img/icon/basic/logout-1.svg'
import setting from '../../static/img/icon/basic/setting-2.svg'
import Giftmoney from '../../static/img/icon/basic/gift.svg';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { user_imlink } from '../utils'
import IconButton from "@mui/material/IconButton"

import Barrier from '../utils/SVGBarrier'


function SidebarMenu({active, openSidebar, setOpenSidebar}) {

    const user = useSelector(s=>s.auth.user)
    const selected_class="menu_item_selected"
    const [colorClass, setcolorClass] = useState({
        wallet:"menu_item_selection",
        pending_orders:"menu_item_selection",
        favorites:"menu_item_selection",
        download:"menu_item_selection",
        address:"menu_item_selection",
        tickets:"menu_item_selection",
        managment:"menu_item_selection",
        magicmoney:"menu_item_selection",
        profile:"menu_item_selection",
        exit:"menu_item_selection",
    });
    const menu_items=[
        {name:"wallet",primary:"کیف پول",ename:"/user-panel/wallet", icon:Wallet,color:colorClass.wallet},
        {name:"pending_orders",primary:"سفارش های من",ename:"/user-panel/orders",icon:Order,color:colorClass.pending_orders},
        {name:"favorites",primary:"علاقه مندی ها",ename:"/user-panel/favorites",icon:Favorites,color:colorClass.favorites},
        {name:"download",primary:"دانلودها",ename:"/user-panel/downloads",icon:Download,color:colorClass.download},
        {name:"address",primary:"آدرس ها",ename:'/user-panel/address',icon:Address,color:colorClass.address},
        {name:"tickets",primary:"تیکت های پشتیبانی",ename:'/user-panel/tickets',icon:Ticket,color:colorClass.tickets},
        {name:"managment",primary:"مدیریت غرفه",ename:'/vendor-panel/dashboard',icon:ManageShop,color:colorClass.managment},
        {name:"magicmoney", primary:"پوادارشو", ename: "/vendor-panel/magicmoney",icon:Giftmoney,color:colorClass.magicmoney},
        {name:"profile",primary:"پروفایل",ename:'/user-panel/profile',icon:userprofile,color:colorClass.profile},
        {name:"exit",primary:"خروچ",ename:'/user-panel/exit',icon:Exit,color:colorClass.exit},
    ]
    const handleMouseOver = (prop) => (event) => {
       if(active!==prop){
        setcolorClass({ ...colorClass, [prop]: "menu_item_selection_hover" });     
      }
      else{
        setcolorClass({ ...colorClass, [prop]: "menu_item_selected" });     
      }
      
    };
    const handleMouseLeave = (prop) => (event) => {
        if(active!==prop){
            setcolorClass({ ...colorClass, [prop]: "menu_item_selection" });

        }
        else{
            setcolorClass({ ...colorClass, [prop]: "menu_item_selected" });     
          }
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
                                <Barrier Component={setting} />
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
                                <a  onMouseOver={handleMouseOver(item.name)} onMouseLeave={handleMouseLeave(item.name)}>
                                <ListItemIcon className={"LinkIcon"}>
                                    <Barrier Component={item.icon} className={active===item.name?selected_class:item.color} />
                                </ListItemIcon>
                                <ListItemText  className={item.color+" ms-3"} primary={item.primary} />
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