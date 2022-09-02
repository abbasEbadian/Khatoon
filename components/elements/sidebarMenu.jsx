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

function SidebarMenu({active, openSidebar, setOpenSidebar}) {

    const user = useSelector(s=>s.auth.user)
    const [colors,setColors]=useState({
        wallet:"#000000",
        pending_orders:"#000000",
        favorites:"#000000",
        download:"#000000",
        address:"#000000",
        tickets:"#000000",
        managment:"#000000",
        profile:"#000000",
        exit:"#000000",
    });
    const [iconcolor,setIconcolor]=useState({
        wallet:"",
        pending_orders:"",
        favorites:"",
        download:"",
        address:"",
        tickets:"",
        managment:"",
        profile:"",
        exit:"",
    });
    const menu_items=[
        {name:"wallet",primary:"کیف پول",ename:"/user-panel/wallet", iconss:Wallet ,colorid:colors.wallet,iconclass:iconcolor.wallet},
        {name:"pending_orders",primary:"سفارش های من",ename:"/user-panel/orders",iconss:Order,colorid:colors.pending_orders,iconclass:iconcolor.pending_orders},
        {name:"favorites",primary:"علاقه مندی ها",ename:"/user-panel/favorites",iconss:Bookmark,colorid:colors.favorites,iconclass:iconcolor.favorites},
        {name:"download",primary:"دانلودها",ename:"/user-panel/downloads",iconss:Download,colorid:colors.download,iconclass:iconcolor.download},
        {name:"address",primary:"آدرس ها",ename:'/user-panel/address',iconss:Address,colorid:colors.address,iconclass:iconcolor.address},
        {name:"tickets",primary:"تیکت های پشتیبانی",ename:'/user-panel/tickets',iconss:Ticket,colorid:colors.tickets,iconclass:iconcolor.tickets},
        {name:"managment",primary:"مدیریت غرفه",ename:'/vendor-panel/dashboard',iconss:ManageShop,colorid:colors.managment,iconclass:iconcolor.managment},
        {name:"profile",primary:"پروفایل",ename:'/user-panel/profile',iconss:userss,colorid:colors.profile,iconclass:iconcolor.profile},
        {name:"exit",primary:"خروچ",ename:'/user-panel/exit',iconss:Exit,colorid:colors.exit,iconclass:iconcolor.exit},
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
                        {menu_items.map((item)=>(
                          <ListItemButton selected={active === item.name}>
                            <Link href={item.ename}>
                                <a style={{color:item.colorid}} onMouseOver={handleMouseOver(item.name)} onMouseLeave={handleMouseLeave(item.name)}>
                                <ListItemIcon className={"LinkIcon"}>
                                  <Image src={item.iconss} className={item.iconclass} alt="icon" width="18" height="18"/>
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