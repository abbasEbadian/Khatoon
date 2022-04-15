import React from 'react'
import Image from 'next/image'
import styles from '../../styles/sidebarMenu.module.scss'
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
import CloseIcon from '@mui/icons-material/Close';


function SidebarMenu() {
    const [idMenu, idMenuSet] = React.useState([
        {
            name: "آرش",
            email: "arashzarandi@gmail.com"
        }
    ])
    const [openSidebar, setOpenSidebar] = React.useState(true) 

    const handleClick = () => {
       setOpenSidebar(prev => !prev)
    }


    return (
            <aside className={styles.sidebar_menu +( openSidebar ? ` ${ styles.open}` : '')}>
                <div className={styles.header_sidebar}>
                    <div className={styles.profile_pic}>
                        <Image src={Profile} />
                    </div>
                    <div className={styles.id_menu}>
                        {idMenu.map((item, idx) => {
                            return (
                                <div>
                                    <p>{item.name}</p>
                                    <p>{item.email}</p>
                                    <span></span>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.link_menu}>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={Wallet} />
                                </ListItemIcon>
                                <ListItemText  primary="کیف پول" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={Order} />
                                </ListItemIcon>
                                <ListItemText primary="پیگیری سفارشات" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={OrderHistory} />
                                </ListItemIcon>
                                <ListItemText primary="تاریخچه خریدهای من" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={Bookmark} />
                                </ListItemIcon>
                                <ListItemText primary="علاقه مندی ها" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={Download} />
                                </ListItemIcon>
                                <ListItemText primary="دانلودها" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={Address} />
                                </ListItemIcon>
                                <ListItemText primary="آدرس ها" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={Ticket} />
                                </ListItemIcon>
                                <ListItemText primary="تیکت های پشتیبانی" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={ManageShop} />
                                </ListItemIcon>
                                <ListItemText primary="مدیریت فروشگاه" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon className={styles.LinkIcon}>
                                    <Image src={Exit} />
                                </ListItemIcon>
                                <ListItemText primary="خروج" />
                            </ListItemButton>

                        </List>
                    </div>
                    <div className={styles.flotingButton}>
                               <button onClick={handleClick}>
                                {
                                openSidebar ? <MenuIcon />  : <CloseIcon />}
                               </button>
                    </div>
                </div>
        </aside>
    )
}

export default SidebarMenu