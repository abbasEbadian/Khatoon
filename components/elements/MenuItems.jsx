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
import IconButton from "@mui/material/IconButton"
import setting from '../../static/img/icon/setting-2.svg'

export default function MenuItems(active) {
    const user = useSelector(s=>s.auth.user);
    const [colors,setColors]=useState({
        wallet:"#000000",
        pending_orders:"#000000",
        favorites:"#000000",
        download:"#000000",
        address:"#000000",
        tickets:"#000000",
        managment:"#000000",
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
        {name:"exit",primary:"خروچ",ename:'/user-panel/exit',iconss:Exit,colorid:colors.exit,iconclass:iconcolor.exit},
    ]
    const handleMouseOver = (prop) => (event) => {
        setColors({ ...colors, [prop]: "#e9696d" });
        setIconcolor({...iconcolor,[prop]:"filter-colors"});
    };
    const handleMouseLeave = (prop) => (event) => {
        setColors({ ...colors, [prop]: "#000000" });
        setIconcolor({...iconcolor,[prop]:""});
    };
  return (
    <div>
        <div className={"header_sidebar"} dir="rtl" style={{width:"260px"}}>
        <ListItemButton selected={active === "profile"}>
        <Link href="/user-panel/profile">

           <div className="row rows-col-3">
           <div className="col">
                <div className={"profile_pic mt-2"} style={{paddingRight:"10%"}}>
                    <Image src={user_imlink(user?.avatar_image)} alt={"profile"} width="120" height={120} objectFit="cover"/>
                </div>
           </div>
           <div className="col">
                <div className={"id_menu"}>
                        <div>
                            <p>{user?.first_name}</p>
                            <p>{user?.email}</p>
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
                        {menu_items.map((item)=>(
                                <ListItemButton selected={active ===item.name}>
                                <Link href={item.ename}>
                                    <a style={{color:item.colorid}} onMouseOver={handleMouseOver(item.name)} onMouseLeave={handleMouseLeave(item.name)}>
                                    <ListItemIcon className={"LinkIcon"}>
                                        <Image src={item.iconss} alt="icon" className={item.iconclass}/>
                                    </ListItemIcon>
                                    <ListItemText  primary={item.primary} />
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
