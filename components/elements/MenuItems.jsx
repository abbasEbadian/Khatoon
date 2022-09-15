import React, { useState } from 'react'
import Image from 'next/image'
import Profile from '../../static/img/icon/memoji.png'
import Order from '../../static/img/icon/basic/send-sqaure-2.svg'
import Wallet from '../../static/img/icon/basic/wallet-2.svg'
import Favorites from '../../static/img/icon/basic/heart.svg'
import Download from '../../static/img/icon/basic/arrow-down-2.svg'
import Address from '../../static/img/icon/basic/map.svg'
import Ticket from '../../static/img/icon/basic/messages-2.svg'
import ManageShop from '../../static/img/icon/basic/shop.svg'
import Exit from '../../static/img/icon/basic/logout-1.svg'
import Giftmoney from '../../static/img/icon/basic/gift.svg';


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { user_imlink } from '../utils'



import Barrier from '../utils/SVGBarrier'

export default function MenuItems(active) {
    const user = useSelector(s => s.auth.user);
    const [colorClass, setcolorClass] = useState({
        wallet:"menu_item_selection",
        pending_orders:"menu_item_selection",
        favorites:"menu_item_selection",
        download:"menu_item_selection",
        address:"menu_item_selection",
        tickets:"menu_item_selection",
        managment:"menu_item_selection",
        magicmoney:"menu_item_selection",
        exit:"menu_item_selection",
    });
    const menu_items = [
        { name: "wallet", primary: "کیف پول", ename: "/user-panel/wallet", icon: Wallet,color:colorClass.wallet },
        { name: "pending_orders", primary: "سفارش های من", ename: "/user-panel/orders", icon: Order ,color:colorClass.pending_orders },
        { name: "favorites", primary: "علاقه مندی ها", ename: "/user-panel/favorites", icon:Favorites ,color:colorClass.favorites },
        { name: "download", primary: "دانلودها", ename: "/user-panel/downloads", icon: Download ,color:colorClass.download },
        { name: "address", primary: "آدرس ها", ename: '/user-panel/address', icon: Address ,color:colorClass.address },
        { name: "tickets", primary: "تیکت های پشتیبانی", ename: '/user-panel/tickets', icon: Ticket,color:colorClass.tickets },
        { name: "managment", primary: "مدیریت غرفه", ename: '/vendor-panel/dashboard', icon: ManageShop,color:colorClass.managment },
        {name:"magicmoney", primary:"پوادارشو", ename: "/vendor-panel/magicmoney",icon:Giftmoney,color:colorClass.magicmoney },
        { name: "exit", primary: "خروچ", ename: '/user-panel/exit', icon: Exit,color:colorClass.exit },
    ]
    const handleMouseOver = (prop) => (event) => {
        if(active!==prop){
         setcolorClass({ ...colorClass, [prop]: "menu_item_selection_hover" });     
       }
       
     };
     const handleMouseLeave = (prop) => (event) => {
         if(active!==prop){
             setcolorClass({ ...colorClass, [prop]: "menu_item_selection" });
 
         }
     };
   
    return (
        <div>
            <div className={"header_sidebar"} dir="rtl" style={{ width: "260px" }}>
                <ListItemButton selected={active === "profile"}>
                    <Link href="/user-panel/profile">

                        <div className="row rows-col-3">
                            <div className="col">
                                <div className={"profile_pic mt-2"} style={{ paddingRight: "10%" }}>
                                    <Image src={user_imlink(user ?.avatar_image)} alt={"profile"} width="120" height={120} objectFit="cover" />
                                </div>
                            </div>
                            <div className="col">
                                <div className={"id_menu"}>
                                    <div>
                                        <p>{user ?.first_name}</p>
                                        <p>{user ?.email}</p>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </ListItemButton>

                <div className={"link_menu"}>
                    <List

                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                        {menu_items.map((item, idx)=>(
                                <ListItemButton selected={active ===item.name } key={idx}>

                                <Link href={item.ename}>
                                    <a onMouseOver={handleMouseOver(item.name)} onMouseLeave={handleMouseLeave(item.name)}>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Barrier Component={item.icon} className={item.color} />
                                        </ListItemIcon>
                                        <ListItemText primary={item.primary}className={item.color} />
                                    </a>
                                </Link>

                            </ListItemButton >
                        ))}

                    </List>
                </div>

            </div>
        </div>
    )
}
