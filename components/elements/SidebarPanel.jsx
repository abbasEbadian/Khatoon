import React from 'react'
import Image from 'next/image'
import styles from '../../styles/sidebarMenu.module.scss'
import Profile from '../../static/img/icon/memoji.png'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function SidebarMenu() {
    const state = {
        labels: ['January', 'February', 'March',
                 'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]
      }
    const [idMenu, idMenuSet] = React.useState([
        {
            name: "آرش زرندی",
            email: "فروشگاه خرده فروشی"
        }
    ])
    const [openSidebar, setOpenSidebar] = React.useState(true)

    const handleClick = () => {
        setOpenSidebar(prev => !prev)
    }


    return (
        <aside className={styles.sidebar_menu + (openSidebar ? ` ${styles.open}` : '')}>
            <div className={styles.header_sidebar}>
                <div className={styles.profile_pic}>
                    <Image src={Profile} />
                </div>
                <div className={styles.id_menu}>
                    {idMenu.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <p>{item.email}</p>
                                <p>{item.name}</p>
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
                            <ListItemText primary="داشبورد" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="محصولات" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="سفارشات" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="گغتگوها" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="روش های ارسال" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="تنظیمات" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="خروج" />
                        </ListItemButton>

                    </List>
                </div>
            </div>
        </aside>
    )
}

export default SidebarMenu