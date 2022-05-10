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


function Wallet() {
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
        { id: "picture", label: "تصویر شاخص", minWidth: 200, align: "right" },
        { id: "codeNumber", label: "شناسه سفارش", minWidth: 130, align: "right" },
        {
            id: "NumberProduct",
            label: "تعداد محصول",
            minWidth: 50,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "status",
            label: " وضعیت ارسال",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "total",
            label: " مجموع",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },
    
        {
            id: "date",
            label: "تاریخ ثبت",
            minWidth: 170,
            align: "center",
        },
        {
            id: "operation",
            label: " عملیات",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        }
    ];

    function createData(picture, chargeRate, PaymentMethod, status, date) {
        return { picture, chargeRate, PaymentMethod, status, date};
    }

    const rows = [
        createData(
            ["https://statics.basalam.com/public/users/PQ54/1802/3rUvoX5MUrtHjWQpAuBhxrPKgF21Jrq2DYJ43iek.jpg_256X256X70.jpg",
            "https://statics.basalam.com/public/users/PQ54/1802/3rUvoX5MUrtHjWQpAuBhxrPKgF21Jrq2DYJ43iek.jpg_256X256X70.jpg"],
            "200000 تومان",
            "درگاه بانکی",
            "موفق",
            "2022-02-04T22:53:38.542904+03:30"
        ),
        createData(
            ["https://statics.basalam.com/public/users/PQ54/1802/3rUvoX5MUrtHjWQpAuBhxrPKgF21Jrq2DYJ43iek.jpg_256X256X70.jpg"],
            "200000 تومان",
            "درگاه بانکی",
            "موفق",
            "2022-02-04T22:53:38.542904+03:30"
        ),
        createData(
            ["https://statics.basalam.com/public/users/PQ54/1802/3rUvoX5MUrtHjWQpAuBhxrPKgF21Jrq2DYJ43iek.jpg_256X256X70.jpg"],
            "200000 تومان",
            "درگاه بانکی",
            "موفق",
            "2022-02-04T22:53:38.542904+03:30"
        ),
        createData(
            ["https://statics.basalam.com/public/users/PQ54/1802/3rUvoX5MUrtHjWQpAuBhxrPKgF21Jrq2DYJ43iek.jpg_256X256X70.jpg"],
            "200000 تومان",
            "درگاه بانکی",
            "موفق",
            "2022-02-04T22:53:38.542904+03:30"
        ),
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
    return (
        <UserPanelBase active={"pendin_orders"} title="سفار های در حال ارسال">
            <section>
                <div className={styles.Order_history}>
                        <div className="table-info-payment py-4 p-2">
                            <Paper
                                sx={{ width: "100%", overflow: "hidden" }}
                                className="product-list-gift"
                            >
                                <TableContainer >
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows
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
                                                                if(column.format && typeof value === "number"){
                                                                    val = column.format(value)
                                                                }else if (column.id === "date"){
                                                                    val = new Date(value).toLocaleDateString(
                                                                        "fa-IR",
                                                                        {
                                                                            year: "numeric",
                                                                            month: "long",
                                                                            day: "numeric",
                                                                        }
                                                                    )
                                                                }else if (column.id === "picture"){
                                                                    val = value.map((item, i)=>{
                                                                        return <Image  key={i} alt={"thumb"} src={item} width={64} height={64} className="mx-2"/>
                                                                    })
                                                                }
                                                                return (
                                                                    <TableCell key={column.id} align={column.align}  className={idx2===0? "d-flex": ""}>
                                                                        {val}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
                            </Paper>
                        </div>
                </div>
            </section>
        </UserPanelBase>
    );
}
export default withAuth(Wallet);