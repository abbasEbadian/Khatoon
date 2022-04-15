import React from 'react'
import Image from 'next/image'
import styles from '../../styles/sidebarVendor.module.scss'
import Profile from '../../static/img/icon/memoji.png'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const ButtonLink = ({ className, href, hrefAs, children, prefetch }) => (
    <Link href={href} as={hrefAs} prefetch>
      <a className={className}>
        {children}
      </a>
    </Link>
  )

function SidebarVendor({active_menu="dashboard"}) {
   
    const [idMenu, idMenuSet] = React.useState(
        {
            name: "آرش زرندی",
            email: "فروشگاه خرده فروشی"
        }
    )
    const [openSidebar, setOpenSidebar] = React.useState(false)

    const handleClick = () => {
        setOpenSidebar(prev => !prev)
    }
    const menu_items = [
        {name: "داشبورد", ename: "dashboard"},
        {name: "محصولات", ename: "products"},
        {name: "سفارشات", ename: "orders"},
        {name: "گغتگوها", ename: "messages"},
        {name: "روش های ارسال", ename: "shipment"},
        {name: "تنظیمات", ename: "settings"},
        {name: "خروج", ename: "exit"},
    ]

    return (
        <aside className={styles.sidebar_vendor + (openSidebar ? ` ${styles.open}` : '')}>
            <div className={styles.flotingButton}>
                <button onClick={handleClick}>
                    {
                    !openSidebar ? <MenuIcon />  : <CloseIcon />}
                </button>
            </div>
            <div className={styles.header_vendor_sidebar} >
                <div className={styles.vendor_profile_pic} >
                    <Image src={Profile} alt="avatar" />
                </div>
                <p className={styles.vendor_name}>{idMenu.email}</p>
                <p className={styles.vendor_owner}>{idMenu.name}</p>
            </div>
            <div className={styles.link_menu}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {menu_items.map((item, idx)=>{
                        return <ListItemButton onClick={e=>setOpenSidebar(false)} className={active_menu===item.ename? styles.link_menu_item_active: styles.link_menu_item} component={ButtonLink} 
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