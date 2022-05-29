import React from "react";
import Image from "next/image";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, Typography } from "@mui/material";
import Icon from "../../../static/img/icon/Frame(2).png"
import Icon2 from "../../../static/img/icon/Frame(4).png"
import Icon3 from "../../../static/img/icon/Frame(3).png"
import Icon4 from "../../../static/img/icon/Frame(5).png"
import UserPanelBase from "../../../components/UserPanelBase";
import withAuth from '../../../redux/withAuth'
import {useSelector} from 'react-redux'
import * as _ from 'lodash'
import SendTicketDialog from "../../../components/elements/SendTicketDialog";
import TicketChat from "../../../components/elements/TicketChat";

const icons = [Icon, Icon2, Icon3, Icon4]
const colors = ["#ffad14", "#6610f2", "green", "red"]
const ticketTypes = ["all", "pending", "answered", "closed"]
const ticketTypeTitles = ["مجموع"
                    , "درحال بررسی",
                    "پاسخ داده شده",
                    "بسته شده"
                ]

function ListTicket(props) {
    const user = useSelector(s=>s.auth.user)
    const [tickets, setTickets] = React.useState({
        all: [],
        closed: [],
        answered: [],
        pending: []
    })
    
    const [activeTicketKey, setActiveTicketKey] = React.useState("all")
    const [ticket, setTicket] = React.useState({})
    const [open, setOpen] = React.useState(0);
    const [chatOpen, setChatOpen] = React.useState(0);
    const [active, setActive] = React.useState({})
    const handleClose = ()=>setOpen(false);


    const d = new Date();
    let Time = d.toLocaleTimeString()
    
    React.useEffect(()=>{
        if(!user) return
        const grouped = _.groupBy(user.tickets, (ticket)=>ticket.status)
        let d = {}
        for (let key of ticketTypes){
            d[key] = grouped[key] || (key === "all" ? user.tickets: [])
        }
        setTickets(d)
    }, [user])

    const changeActiveTicketKey= (key)=>{
        setActiveTicketKey(key)
    }
    console.log(tickets)
    return (
        <UserPanelBase active="tickets" title="تیکت ها">
            <main className={"ticketListCol " + " pb-5"}>
                        <div className="px-3">
                            <div className={"ticket_info_s "}>
                               <div className={"rowscroll "}>
                               <div className={"list_ticket_show "}>
                                    {
                                       ticketTypes.map((ticketType, index)=>{
                                            return <Button key={index} className={"all_ticket " + " col-lg-3 col-6 "} onClick={e=>changeActiveTicketKey(ticketType)}
                                                sx={{borderColor: (ticketType === activeTicketKey? colors[index]+ " !important": "inherit")}}>
                                                <div className="d-flex flex-column" >
                                                    <div className="pb-2">
                                                        <Image src={icons[index]} alt="ticket"></Image>
                                                    </div>
                                                    <p className=" text_navy_blue">{ticketTypeTitles[index]}</p>
                                                    <p>{tickets[ticketType].length}</p> 
                                                </div>
                                            </Button>
                                        })
                                    }
                                    

                                   
                                </div>
                               </div>
                                <div className="py-5">

                                    <div className="d-flex justify-content-between align-items-center border-bottom">
                                        <div >
                                            <p className="fw-bold">
                                                آخرین تیکت های ثبت شده
                                            </p>
                                        </div>
                                        <div>
                                            <Button onClick={e=>setOpen(true)}>
                                                <p className="btn_yellow_box">
                                                    ثبت تیکت جدید
                                                    <AddBoxIcon />
                                                </p>

                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={"info_ticket_list "}>
                                    {tickets[activeTicketKey].length? tickets[activeTicketKey].map((ticket, idx) => {
                                        return (
                                            <div key={idx} className={"AnswerTicketShow "}>
                                                    <Button onClick={e=>{setTicket(ticket) ; setChatOpen(true)}}>
                                                        <div className="d-flex align-items-center">
                                                            {ticket.status === "answered" && ticket.seen_by_user?
                                                                <Typography>
                                                                    {ticket.title}
                                                                </Typography>
                                                            :
                                                                <b>  {ticket.title}</b>
                                                            }
                                                        </div>

                                                        <Typography fontSize={11} className={"TimeTicket "} >
                                                            {new Date(ticket.created).toLocaleDateString("fa",{month:"long", day: "2-digit", hour: "2-digit", minute: "2-digit"})}
                                                        </Typography>
                                                    </Button>
                                            </div>
                                        )}):
                                            <div className={"alert alert-info"}>
                                                تیکتی ثبت نشده است.
                                            </div>
                                        }


                                </div>
                            </div>
                        </div>
                    </main>
                    <SendTicketDialog open={open} handleClose={handleClose} />
                    <TicketChat setOpen={setChatOpen} open={chatOpen} order={{}} ticket={ticket} color={"success"}/>

        </UserPanelBase>
    );
}
export default withAuth(ListTicket);