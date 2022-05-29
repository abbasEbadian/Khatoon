import React from "react";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import styles from '../../../styles/OrderHistory.module.css'
import Head from "next/head";
import Image from 'next/image'
import withAuth from '../../../redux/withAuth'
import UserPanelBase from "../../../components/UserPanelBase";
import {useSelector} from 'react-redux'
import { product_imlink } from "../../../components/utils";
import {Circles, Loader} from 'react-loader-spinner'
import UserOrderList from "../../../components/UserOrderList";

function Wallet() {
    const {user, loading:loadingUser} = useSelector(s=>s.auth)
    const [orders, setOrders] = React.useState([])

    const [amount, setAmount] = React.useState(0)
    const [CurrentBalance, setCurrentBalance] = React.useState([
        {
            balance: "2300000"
        }
    ])
    const [IncreaseCredit, setIncreaseCredit] = React.useState([
        200000,
        250000,
        300000,
        350000
    ])

    const columns = [
        { id: "image", label: "تصویر شاخص", minWidth: 200, align: "right" },
        { id: "order_code", label: "شناسه سفارش", minWidth: 130, align: "right" },
        {
            id: "products_count",
            label: "تعداد محصول",
            minWidth: 50,
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "status_text",
            label: " وضعیت ارسال",
            minWidth: 100,
        },
        {
            id: "total",
            label: " مجموع",
            minWidth: 100,
            format: (value) => value.toLocaleString("en-US"),
        },
    
        {
            id: "purchased_date",
            label: "تاریخ ثبت",
            minWidth: 170,
            format: (value)=>{
                return new Date(value).toLocaleDateString(
                    "fa-IR",
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    }
                )
            }
        },
        {
            id: "operation",
            label: " عملیات",
            minWidth: 100,
        }
    ];

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(()=>{
        setOrders(user?.orders || [])
    }, [user])

    return (
        <UserPanelBase active={"pendin_orders"} title="سفارش های من">
            <section>
                <div className={styles.Order_history}>
                        <div className="table-info-payment py-4 p-2">
                            <Paper
                                sx={{ width: "100%", overflow: "hidden" }}
                                className="product-list-gift"
                            >
                                <UserOrderList orders={orders}/>
                                {/* <TableContainer >
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        style={{ minWidth: column.minWidth }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {orders.length? orders
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row, idx) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            role="checkbox"
                                                            tabIndex={-1}
                                                            key={row.code}
                                                           
                                                        >
                                                            {columns.map((column, idx2) => {
                                                                const value = row[column.id];
                                                                let val = value 
                                                                if(column.format){
                                                                    val = column.format(value)
                                                                }else if (column.id === "image"){
                                                                    val = row.orderlines.map((item, i)=>{
                                                                        return <Image  key={i} alt={"thumb"} src={product_imlink(item?.product_id?.image)} width={90} height={64} className="mx-2"/>
                                                                    })
                                                                }
                                                                return (
                                                                    <TableCell key={column.id}  className={idx2===0? "d-flex": ""}>
                                                                        {val}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                }) : !loadingUser? <TableRow
                                                        hover
                                                        role="checkbox"
                                                        tabIndex={-1}
                                                    
                                                    >
                                                        <TableCell>سفارشی نداشته اید./</TableCell>
                                                    </TableRow>:
                                                    <Circles color="#00BFFF" height={20} width={20}/>
                                                }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[10, 25, 100]}
                                    component="div"
                                    count={orders.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    className={orders.length <= 10 ? "d-none": ""}
                                /> */}
                            </Paper>
                        </div>
                </div>
            </section>
        </UserPanelBase>
    );
}
export default withAuth(Wallet);