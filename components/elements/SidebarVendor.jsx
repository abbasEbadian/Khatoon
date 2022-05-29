import React from 'react'
import Image from 'next/image'
import Profile from '../../static/img/icon/memoji.png'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import {useSelector} from 'react-redux'
import { BASE_URL } from '../../redux/endpoints';

import { Fab } from '@mui/material'

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
    <Link href={href} as={hrefAs} prefetch>
      <a className={className}>
        {children}
      </a>
    </Link>
  )

function SidebarVendor({active="dashboard", openSidebar, setOpenSidebar}) {
    const user = useSelector(s=>s.auth.user) 
    
    const menu_items = [
        {name: "داشبورد", ename: "/vendor-panel/dashboard"},
        {name: "محصولات", ename: "/vendor-panel/products"},
        {name: "سفارشات", ename: "/vendor-panel/orders"},
        {name: "گفتگو با مشتریان", ename: "/vendor-panel/messages"},
        // {name: "روش های ارسال", ename: "/vendor-panel/shipment"},
        {name: "تنظیمات", ename: "/vendor-panel/settings"},
        {name: "خروج", ename: "/signout"},
    ]

    return (
        <aside className={"sidebar_vendor " + (openSidebar ? ` ${"open "}` : '')}>
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
                    {menu_items.map((item, idx)=>{
                        return <ListItemButton onClick={e=>setOpenSidebar(false)} className={active===item.ename.split("/").reverse()[0]? "link_menu_item_active ": "link_menu_item "} component={ButtonLink} 
                            href={item.ename}
                          key={item.ename} > 
                            <ListItemText primary={item.name}/>
                        </ListItemButton>
                    })}
                </List>
            </div>
            
        </aside>
    )
}

export default SidebarVendor