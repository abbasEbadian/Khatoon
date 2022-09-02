   
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
function Notification() {
    const [textNotif, settextNotif] = React.useState([
        {
            textNotification: "موجودی رو به اتمام",
            titleNotification: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        }
    ])
    return (
        <div >
            <div className={"notif " + ' px-2 py-1'}>
                {textNotif.map((item, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <div className={"head_notif "}>
                                <NotificationsNoneIcon />
                                <p>{item.textNotification}</p>
                            </div>
                            <div>
                                <span className={"txnotif "}>{item.titleNotification}</span>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default Notification

