import React from 'react'
import styles from '../../styles/notification.module.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
function notification() {
    const [textNotif, settextNotif] = React.useState([
        {
            textNotification: "موجودی رو به اتمام",
            titleNotification: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        }
    ])
    return (
        <div >
            <div className={styles.notif + ' px-2 py-1'}>
                {textNotif.map((item, idx) => {
                    return (
                        <>
                            <div className={styles.head_notif}>
                                <NotificationsNoneIcon />
                                <p>{item.textNotification}</p>
                            </div>
                            <div>
                                <span className={styles.txnotif}>{item.titleNotification}</span>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default notification

{/* <Link href="" >
<a className={styles.head_notif}>
    <NotificationsNoneIcon />
    <p>{item.textNotification}</p>
</a>
</Link> */}