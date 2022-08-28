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
import discount from '../../static/img/icon/discount-shape.svg'






function SidebarVendor({active="dashboard", openSidebar, setOpenSidebar}) {
    const user = useSelector(s=>s.auth.user) 
    
    const [colors,setColors]=React.useState({
        dashboard:"#000000",
        products:"#000000",
        orders:"#000000",
        messages:"#000000",
        settings:"#000000",
        exit:"#000000",
        transfer:"#000000",
        bestshop:"#000000",
        customers:"#000000",
        support:"#000000",
        shopcustomer:"#000000",
        peyment:"#000000",
        discount:"#000000"
    });
    const menu_items = [
        {name:'dashboard',primary: "پیشخوان", ename: "/vendor-panel/dashboard",icons:menu,colorid:colors.dashboard},
        {name:"products",primary:"محصولات", ename: "/vendor-panel/products",icons:cube,colorid:colors.products},
        {name:"orders",primary:"سفارشات", ename: "/vendor-panel/orders",icons:Order,colorid:colors.orders},
        {name:"messages", primary:"گفتگو با مشتریان", ename: "/vendor-panel/messages",icons:message,colorid:colors.messages},
        {name:"transfer",primary:"روش و هزینه های ارسال", ename: "/vendor-panel/transfer",icons:truck,colorid:colors.transfer},
        {name:"peyment",primary:"تسویه حساب و امور مالی", ename: "/signout",icons:dollar,colorid:colors.peyment},
        {name:"bestshop",primary:"غرفه برتر", ename: "/vendor-panel/bestshop",icons:cup,colorid:colors.bestshop},
        {name:"discount",primary:"تخفیف به هزینه", ename: "/vendor-panel/discount",icons:discount,colorid:colors.discount},
        {name:"customers",primary:"لیست مشتریان من", ename: "/vendor-panel/customers",icons:users,colorid:colors.customers},
        {name:"shopcustomer",primary:"تحربه خریدمشتریان", ename: "/vendor/shopcustomer",icons:shoppingcard,colorid:colors.shopcustomer},
        {name:"support",primary:"راهنماو پشتیبانی", ename: "/vendor-panel/support",icons:question,colorid:colors.support},
        {name:"settings",primary:"تنظیمات", ename: "/vendor-panel/settings",icons:setting,colorid:colors.settings},
        {name:"exit",primary:"خروج", ename: "/signout",icons:Exit,colorid:colors.exit},
      
    ]
    const handleMouseOver = (prop) => (event) => {
        if(active!==prop){
         setColors({ ...colors, [prop]: "#e9696d" });
        }
       
     };
     const handleMouseLeave = (prop) => (event) => {
         setColors({ ...colors, [prop]: "#000000" });
     };
    return (
        <aside className={"sidebar_vendor " + (openSidebar ? ` ${"open "}` : '')} style={{marginBottom:"100px"}}>
            <div className={"header_vendor_sidebar "} >
                <div className={"header_vendor_bg"}>
                    <Image src={user?.market?.cover ? BASE_URL + user.market.cover :  "/images/cover.png"} objectFit="cover" alt="cover" layout="fill"></Image>
                </div>
                <div className={"vendor_profile_pic "} >
                    <Image src={user?.market?.image? BASE_URL + user.market.image : Profile} alt="avatar"  objectFit="cover" width={67} height={67}/>
                </div>
                <p className={"vendor_name "}>{user?.market?.name}</p>
                <p className={"vendor_owner "}>{user?.first_name}</p>
            </div>
            <div className={"link_menu "}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {menu_items.map((item)=>(
                         <ListItemButton selected={active === item.name}>
                         <Link href={item.ename}>
                             <a style={{color:item.colorid}} onMouseOver={handleMouseOver(item.name)} onMouseLeave={handleMouseLeave(item.name)}>
                             <ListItemIcon className={"LinkIcon"}>
                               <Image src={item.icons} alt="icon" width="20" height="20"/>
                             </ListItemIcon>
                             <ListItemText  primary={item.primary} />
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