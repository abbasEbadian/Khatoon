import React from 'react'
import Image from 'next/image'
import Profile from '../../static/img/icon/memoji.png'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { BASE_URL } from '../../redux/endpoints';
import Order from '../../static/img/icon/Vector.svg'
import Wallet from '../../static/img/icon/Shape.svg'
import menu from '../../static/img/icon/home-trend-up.svg';
import message from '../../static/img/icon/message-text-1.svg'
import cube from '../../static/img/icon/3dcube.svg'
import Exit from '../../static/img/icon/Exit.svg'
import { Fab } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon';
import setting from '../../static/img/icon/setting-2.svg'
import truck from '../../static/img/icon/truck-tick.svg'
import cup from '../../static/img/icon/cup.svg'
import users from '../../static/img/icon/profile-2user.svg'
import question from '../../static/img/icon/message-question.svg'
import shoppingcard from '../../static/img/icon/shopping-cart.svg'
import dollar from '../../static/img/icon/dollar-square.svg'
import discountIcon from '../../static/img/icon/discount-shape.svg'
import Barrier from '../utils/SVGBarrier'

function SidebarVendor({active="dashboard", openSidebar, setOpenSidebar}) {
    const user = useSelector(s=>s.auth.user) 
    
    const menu_items = [
        {name:'dashboard',primary: "پیشخوان", ename: "/vendor-panel/dashboard",icon:menu},
        {name:"products",primary:"محصولات", ename: "/vendor-panel/products",icon:cube},
        {name:"orders",primary:"سفارشات", ename: "/vendor-panel/orders",icon:Order},
        {name:"transfer",primary:"روش و هزینه های ارسال", ename: "/vendor-panel/transfer",icon:truck},
        {name:"peyment",primary:"تسویه حساب و امور مالی", ename: "/signout",icon:dollar},
        {name:"bestshop",primary:"غرفه برتر", ename: "/vendor-panel/bestshop",icon:cup},
        {name:"discount",primary:"تخفیف به هزینه", ename: "/vendor-panel/discount",icon:discountIcon,},
        {name:"customers",primary:"لیست مشتریان من", ename: "/vendor-panel/customers",icon:users},
        {name:"shopcustomer",primary:"تحربه خریدمشتریان", ename: "/vendor/shopcustomer",icon:shoppingcard},
        {name:"messages", primary:"گفتگو با مشتریان", ename: "/vendor-panel/messages",icon:message},
        {name:"support",primary:"راهنماو پشتیبانی", ename: "/vendor-panel/support",icon:question},
        {name:"settings",primary:"تنظیمات", ename: "/vendor-panel/settings",icon:setting},
        {name:"exit",primary:"خروج", ename: "/signout",icon:Exit},
      
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
        <aside className={"sidebar_vendor " + (openSidebar ? ` ${"open "}` : '')} style={{marginBottom:"100px"}}>
            <div className={"header_sidebar"} >
            <div className="row row-cols-3 p-3">
                    <div className={"profile_pic col-4"}>
                    <Image src={user?.market?.image? BASE_URL + user.market.image : Profile} className="rounded-circle" alt="avatar" style={{width:"30px",height:"30px"}}/>
                    </div>
                    <div className="col-5 pt-5">
                    <p className={"vendor_name "}>{user?.market?.name}</p>
                    <p className={"vendor_owner "}>{user?.first_name}</p>
                    </div>
                    </div>
                
                
            </div>
            <div className={"link_menu "}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {menu_items.map((item,idx)=>(
                         <ListItemButton selected={active === item.name} key={idx}>
                         <Link href={item.ename}>
                             <a className={"menu_item_new"} >
                             <ListItemIcon className={"LinkIcon"}>
                                <Barrier Component={item.icon} className={"menu_item_new"} height="20px" width="20px"/>
                             </ListItemIcon>
                             <ListItemText primary={item.primary} />
                             </a>
                         </Link>
                         
                     </ListItemButton >
                    ))}
                </List>
            </div>
            
        </aside>
    )
}

export default SidebarVendor