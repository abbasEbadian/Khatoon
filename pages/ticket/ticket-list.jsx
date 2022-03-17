import React from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import styles from '../../styles/TicketList.module.css'
import Link from "next/link";
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle';
import Image from "next/image";
import Head from "next/head";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from "@mui/material";
import Icon from "../../static/img/icon/Frame(2).png"
import Icon2 from "../../static/img/icon/Frame(1).png"
import Icon3 from "../../static/img/icon/Frame(3).png"
import Icon4 from "../../static/img/icon/Frame(4).png"
import Icon5 from "../../static/img/icon/Frame(5).png"

function ListTicket(props) {
    const [AllTicketShow, setAllTicketShow] = React.useState([
        {
            ShowTicket: "مجموع",
            count: 20
        }
    ]);
    const [AnswerTicketShow, setAnswerTicketShow] = React.useState([
        {
            ShowTicket: "پاسخ داده شده",
            count: 20
        }
    ]);
    const [EndTicketShow, setEndTicketShow] = React.useState([
        {
            ShowTicket: "بسته شده",
            count: 20
        }
    ]);
    const [PendingTicketShow, setPendingTicketShow] = React.useState([
        {
            ShowTicket: "درحال بررسی",
            count: 20
        }
    ]);
    const [consistency, setconsistency] = React.useState([
        {
            titleConsistency: "پیگیری خرید ناموفق",
            newConsistency: "جدید"
        }
    ]);
    const d = new Date();
    let Time = d.toLocaleTimeString()

    return (
        <section className="container">
            <Head>
                <title>گیفت استاپ | ارسال تیکت</title>
            </Head>
            <div className="card_style">
                <div className="row">
                    {/* <ProfileAside active="new_ticket" /> */}
                    <div className=" col-lg-9 col-12 pb-5">
                        <div className="px-3">
                            <TextHeadTiltle underline_dec={true} title="تیکت های پشتیبانی" />
                            <div className={styles.ticket_info_s}>
                                <div className={styles.list_ticket_show}>
                                    <Button className={styles.all_ticket + " col-2 col-lg-2 "}>
                                        {AllTicketShow.map((item, idx) => {
                                            return (
                                                <div className="d-flex flex-column" key={idx}>
                                                    <div className="pb-2">
                                                        <Image src={Icon} alt="ticket"></Image>
                                                    </div>
                                                    <p className=" text_navy_blue">{item.ShowTicket}</p>
                                                    <p>{item.count}</p>
                                                </div>
                                            );
                                        })}
                                    </Button>
                                    <Button className={styles.all_ticket + " col-2 col-lg-2 "}>
                                        {AnswerTicketShow.map((item, idx) => {
                                            return (
                                                <div className="d-flex flex-column" key={idx}>
                                                    <div className="pb-2">
                                                        <Image src={Icon2} alt="ticket"></Image>
                                                    </div>
                                                    <p className=" text_navy_blue">{item.ShowTicket}</p>
                                                    <p>{item.count}</p>
                                                </div>
                                            );
                                        })}
                                    </Button>
                                    <Button className={styles.all_ticket + " col-2 col-lg-2 "}>
                                        {EndTicketShow.map((item, idx) => {
                                            return (
                                                <div className="d-flex flex-column" key={idx}>
                                                    <div className="pb-2">
                                                        <Image src={Icon3} alt="ticket"></Image>
                                                    </div>
                                                    <p className=" text_navy_blue">{item.ShowTicket}</p>
                                                    <p>{item.count}</p>
                                                </div>
                                            );
                                        })}
                                    </Button>
                                    <Button className={styles.all_ticket + " col-2 col-lg-2 "}>
                                        {PendingTicketShow.map((item, idx) => {
                                            return (
                                                <div className={styles.text_navy_blue + " d-flex flex-column"} key={idx}>
                                                    <div className="pb-2">
                                                        <Image src={Icon4} alt="ticket"  ></Image>
                                                    </div>
                                                    <p>{item.ShowTicket}</p>
                                                    <p>{item.count}</p>
                                                </div>
                                            );
                                        })}
                                    </Button>
                                    <Button className={styles.all_ticket + " col-2 col-lg-2 "}>
                                        {PendingTicketShow.map((item, idx) => {
                                            return (
                                                <div className="d-flex flex-column" key={idx}>
                                                    <div className="pb-2">
                                                        <Image src={Icon5} alt="ticket"  ></Image>
                                                    </div>
                                                    <p className=" text_navy_blue">{item.ShowTicket}</p>
                                                    <p>{item.count}</p>
                                                </div>
                                            );
                                        })}
                                    </Button>
                                </div>
                                <div className="py-5">

                                    <div className="d-flex justify-content-between align-items-center border-bottom">
                                        <div >
                                            <p className="fw-bold">
                                                آخرین تیکت های ثبت شده
                                            </p>
                                        </div>
                                        <div>
                                            <Button>
                                                <p className="btn_yellow_box">
                                                    ثبت تیکت جدید
                                                    <AddBoxIcon />
                                                </p>

                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.info_ticket_list}>
                                    <div className={styles.AnswerTicketShow}>
                                        {consistency.map((item, idx) => {
                                            return (
                                                <>
                                                    <Button>
                                                        <div className="d-flex align-items-center">
                                                            <p>{item.titleConsistency}</p>
                                                            <p className="pr-3">({item.newConsistency})</p>
                                                        </div>

                                                        <div className={styles.TimeTicket}>
                                                            {Time}
                                                        </div>
                                                    </Button>
                                                </>
                                            );
                                        })}
                                    </div>
                                    <div className={styles.closed}>
                                        {consistency.map((item, idx) => {
                                            return (
                                                <>
                                                    <Button>
                                                        <div className="d-flex align-items-center">
                                                            <p>{item.titleConsistency}</p>
                                                            <p className="pr-3">({item.newConsistency})</p>
                                                        </div>

                                                        <div>
                                                            {Time}
                                                        </div>
                                                    </Button>
                                                </>
                                            );
                                        })}
                                    </div>
                                    <div className={styles.pending_ticket}>
                                        {consistency.map((item, idx) => {
                                            return (
                                                <>
                                                    <Button>
                                                        <div className="d-flex align-items-center">
                                                            <p>{item.titleConsistency}</p>
                                                            <p className="pr-3">({item.newConsistency})</p>
                                                        </div>

                                                        <div>
                                                            {Time}
                                                        </div>
                                                    </Button>
                                                </>
                                            );
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
}
export default ListTicket;