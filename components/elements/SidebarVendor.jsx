import React from 'react'
import Image from 'next/image'
import Profile from '../../static/img/icon/memoji.png'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { BASE_URL } from '../../redux/endpoints';

import Order from '../../static/img/icon/basic/send-sqaure-2.svg'
import menu from '../../static/img/icon/basic/home-trend-up.svg';
import message from '../../static/img/icon/basic/message-text-1.svg'
import cube from '../../static/img/icon/basic/3dcube.svg'
import Exit from '../../static/img/icon/basic/logout-1.svg'
import ListItemIcon from '@mui/material/ListItemIcon';
import setting from '../../static/img/icon/basic/setting-2.svg'
import truck from '../../static/img/icon/basic/truck-tick.svg'
import cup from '../../static/img/icon/basic/cup.svg'
import users from '../../static/img/icon/basic/profile-2user.svg'
import question from '../../static/img/icon/basic/message-question.svg'
import shoppingcard from '../../static/img/icon/basic/shopping-cart.svg'
import dollar from '../../static/img/icon/basic/money.svg'
import discountIcon from '../../static/img/icon/basic/discount-circle.svg'
import gift from '../../static/img/icon/basic/gift.svg'
import Barrier from '../utils/SVGBarrier'
import userprofile from '../../static/img/icon/basic/user-square.svg'

function SidebarVendor({active="dashboard", openSidebar, setOpenSidebar}) {
    const user = useSelector(s=>s.auth.user);
    const selected_class="menu_item_selected";

    const [colorClass, setcolorClass] = React.useState({
        dashboard:"menu_item_selection",
        products:"menu_item_selection",
        orders:"menu_item_selection",
        transfer:"menu_item_selection",
        peyment:"menu_item_selection",
        bestshop:"menu_item_selection",
        discount:"menu_item_selection",
        customers:"menu_item_selection",
        shhopcustomer:"menu_item_selection",
        magicmoney:"menu_item_selection",
        messages:"menu_item_selection",
        support:"menu_item_selection",
        settings:"menu_item_selection",
        exit:"menu_item_selection",
        profile:"menu_item_selection",

    });

    const menu_items = [
        {name:'dashboard',primary: "پیشخوان", ename: "/vendor-panel/dashboard",icon:menu,color:colorClass.dashboard},
        {name:"products",primary:"محصولات", ename: "/vendor-panel/products",icon:cube,color:colorClass.products},
        {name:"orders",primary:"سفارشات", ename: "/vendor-panel/orders",icon:Order,color:colorClass.orders},
        {name:"transfer",primary:"روش و هزینه‌های‌ ارسال", ename: "/vendor-panel/transfer",icon:truck,color:colorClass.transfer},
        {name:"peyment",primary:"تسویه‌حساب و امور‌مالی", ename: "/vendor-panel/peyment",icon:dollar,color:colorClass.peyment},
        {name:"bestshop",primary:"غرفه‌برتر", ename: "/vendor-panel/bestshop",icon:cup,color:colorClass.bestshop},
        {name:"discount",primary:"تخفیف به هزینه", ename: "/vendor-panel/discount",icon:discountIcon,color:colorClass.discount},
        {name:"customers",primary:"لیست مشتریان من", ename: "/vendor-panel/customers",icon:users,color:colorClass.customers},
        {name:"shopcustomer",primary:"تحربه خرید‌مشتریان", ename: "/vendor/shopcustomer",icon:shoppingcard,color:colorClass.shhopcustomer},
        {name:"magicmoney", primary:"پوادارشو", ename: "/vendor-panel/magicmoney",icon:gift,color:colorClass.magicmoney},
        {name:"messages", primary:"گفتگو با مشتریان", ename: "/vendor-panel/messages",icon:message,color:colorClass.messages},
        {name:"support",primary:"راهنماو پشتیبانی", ename: "/vendor-panel/support",icon:question,color:colorClass.support},
        {name:"settings",primary:"تنظیمات", ename: "/vendor-panel/settings",icon:setting,color:colorClass.settings},
        {name:"profile",primary:"پروفایل",ename:'/user-panel/profile',icon:userprofile,color:colorClass.profile},
        {name:"exit",primary:"خروج", ename: "/signout",icon:Exit,color:colorClass.exit},
      
    ]
    const handleMouseOver = (prop) => (event) => {
        if(active!==prop){
         setcolorClass({ ...colorClass, [prop]: "menu_item_selection_hover" });
        }
       
     };
     const handleMouseLeave = (prop) => (event) => {
         setcolorClass({ ...colorClass, [prop]: "menu_item_selection" });
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
                             <a onMouseOver={handleMouseOver(item.name)} onMouseLeave={handleMouseLeave(item.name)}>
                             <ListItemIcon className={"LinkIcon"}>
                                <Barrier Component={item.icon} className={active===item.name?selected_class:item.color}/>
                             </ListItemIcon>
                             <ListItemText primary={item.primary} className={item.color+""} />
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