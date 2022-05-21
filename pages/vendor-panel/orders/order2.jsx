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
import styles from "../../../styles/OrderHistory.module.css";
import Head from "next/head";
import Image from "next/image";
import withAuth from "../../../redux/withAuth";
import UserPanelBase from "../../../components/UserPanelBase";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import {
    Filter1,
    Filter1Outlined,
    Filter1Rounded,
    FilterAlt,
    Sort,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import TableHeaderInputs from "../../../components/Ui/TableHeaderInputs"

function Wallet() {
    const [amount, setAmount] = React.useState(0);
    const [CurrentBalance, setCurrentBalance] = React.useState([
        {
            balance: "2300000",
        },
    ]);
    const [IncreaseCredit, setIncreaseCredit] = React.useState([
        200000, 250000, 300000, 350000,
    ]);


    const columns = [
        { id: "number", label: "شماره سفارش ", minWidth: 200, align: "left" },
        { id: "title", label: "نام محصول", minWidth: 130, align: "left" },
       
        {
            id: "customerName",
            label: " نام مشتری",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "createdDate",
            label: " تاریخ ثبت",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "deliveryTime",
            label: " مهلت ارسال",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "destination",
            label: " مقصد",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "details",
            label: "جزییات",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },


    ];

    function createData(number, title, customerName, deliveryTime, createdDate, destination, details) {
        return { number, title, customerName, deliveryTime, createdDate, destination, details };
    }

    const rows = [
        createData(
            "1234",
            "درحال آماده سازی",
            'علی رضایی',
            '1/2/1400',
            '1/2/1400',
            "1 روز",
            
            "--"
        ),
        createData(
            "1234",
            "درحال آماده سازی",
            'علی رضایی',
            '1/2/1400',
            '1/2/1400',
            "1 روز",
            
            "--"
        ),
        createData(
            "1234",
            "درحال آماده سازی",
            'علی رضایی',
            '1/2/1400',
            '1/2/1400',
            "1 روز",
            
            "--"
        ),
        createData(
            "1234",
            "درحال آماده سازی",
            'علی رضایی',
            '1/2/1400',
            '1/2/1400',
            "1 روز",
            
            "--"
        ),
        createData(
            "1234",
            "درحال آماده سازی",
            'علی رضایی',
            '1/2/1400',
            '1/2/1400',
            "1 روز",
            
            "--"
        ),

    ];
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [clicked, setClicked] = React.useState({
        active: 'درحال پردازش'
    })

    const getList = (val) => {
        setClicked({ active: val })
        alert('get list from server')
    }


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <UserPanelBase active={"pendin_orders"} underline_dec={false}>
            <section>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item
                    >
                        <Box
                            direction="row"
                            sx={{
                                width: 300,
                                borderRadius: '24px',
                                backgroundColor: '#F7F7F7',
                                boxShadow: '4px 7px 16px -8px rgba(0, 0, 0, 0.25), -3px -5px 12px 3px rgba(255, 255, 255, 0.66);',
                                textAlign: 'center',
                                padding: '5px',
                                marginBottom: '1rem',
                            }}
                        >
                            <Button
                                onClick={() => getList('درحال پردازش')}
                                sx={{
                                    marginRight: '1rem',
                                    borderRadius: '24px',
                                    backgroundColor: clicked.active == 'درحال پردازش' ? '#FBDEE2' : '',
                                    color: clicked.active == 'درحال پردازش' ? '#E96962' : '#A6ACC2',

                                }}>
                                درحال پردازش
                            </Button>
                            <Button
                                onClick={() => getList('بسته شده')}
                                sx={{
                                    backgroundColor: clicked.active == 'بسته شده' ? '#FBDEE2' : '',
                                    color: clicked.active == 'بسته شده' ? '#E96962' : '#A6ACC2',

                                    borderRadius: '24px',
                                }}>
                                بسته شده
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <TableHeaderInputs searchPlaceHolder="جست وجو در سفارشات" />

                <div className={styles.Order_history}>
                    <div className="table-info-payment py-4 p-2">
                        <Paper
                            sx={{ width: "100%", overflow: "hidden" }}
                            className="product-list-gift"
                        >
                            <TableContainer sx={{ textAlign: 'right' }}>
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
                                            .slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
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
                                                            let val = value;
                                                            if (column.format && typeof value === "number") {
                                                                val = column.format(value);
                                                            } else if (column.id === "date") {
                                                                val = new Date(value).toLocaleDateString(
                                                                    "fa-IR",
                                                                    {
                                                                        year: "numeric",
                                                                        month: "long",
                                                                        day: "numeric",
                                                                    }
                                                                );
                                                            } else if (column.id === "picture") {
                                                                val = value.map((item, i) => {
                                                                    return (
                                                                        <Image
                                                                            key={i}
                                                                            alt={"thumb"}
                                                                            src={item}
                                                                            width={64}
                                                                            height={64}
                                                                            className="mx-2"
                                                                        />
                                                                    );
                                                                });
                                                            }
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    align={column.align}
                                                                    className={idx2 === 0 ? "d-flex" : ""}
                                                                >
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
export default Wallet;
