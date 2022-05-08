import React from "react";
import { Dropdown, DropdownButton, Form } from "react-bootstrap";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import UserPanelBase from "../../../components/UserPanelBase";
import {useSelector, useDispatch} from 'react-redux'
function Wallet() {
    const user = useSelector(s=>s.auth.user)

    const [amount, setAmount] = React.useState(0)
    const [CurrentBalance, setCurrentBalance] = React.useState(0)
    const [IncreaseCredit, setIncreaseCredit] = React.useState([
        100000,
        150000,
        200000,
        250000,
        300000,
        350000
    ])
    const [rows, setRows] = React.useState([])
    const columns = [
        { id: "id", label: "شناسه", minWidth: 100, align: "right" },
        { id: "amount", label: "میزان شارژ", minWidth: 130, align: "right" },
        {
            id: "ptype",
            label: "روش پرداخت",
            minWidth: 50,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "pstatus",
            label: "وضعیت",
            minWidth: 100,
            align: "center",
            format: (value) => value.toLocaleString("en-US"),
        },
        {
            id: "created",
            label: "تاریخ",
            minWidth: 170,
            align: "center",
        },

    ];




    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    React.useEffect(() => {
        let data = user?.wallet?.transaction_set || null
        if(data){   
            const ndata = data.map(row=>{
                return {
                    ...row,
                    created : new Date(row["created"]).toLocaleDateString(
                        "fa-IR",
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    ),
                    amount: row["amount"] + " تومان"
                }
            })

            setRows(ndata)
        }
        setCurrentBalance(user?.wallet?.balance || 0)
    }, [user])
    return (
        <section>
           <UserPanelBase active="wallet" title="کیف پول">
           <div className="wallet py-4 text-center">
                        <div className="CurrentBalance ">
                            <h5>
                                <p >
                                    اعتبار فعلی کیف پول شما : <span className="px-2">{Number(CurrentBalance).toLocaleString('fa-IR')}</span> تومان است.
                                </p>    
                            </h5>
                        </div>
                        <div className="IncreaseCredit d-flex flex-column col-12 justify-content-center align-items-center py-5">
                            <span className="col-12 mb-3">میزان افزایش موجودی:</span>
                            <div className="col-4">
                                <Form.Select aria-label="Default select example" value={amount} onChange={e => setAmount(e.target.value)}>
                                    <option value="0"> --مقدار مورد نظر را وارد کنید--</option>
                                    {IncreaseCredit.map((item, idx) => {
                                        return <option key={item} value={item}>{Number(item).toLocaleString('fa-IR')} {" تومان"}</option>
                                        
                                    })}
                                </Form.Select>
                            </div>
                        </div>
                        {Number(amount) > 0 ? <h4>
                            حساب کاربری شما به میزان
                            <span className="IncreaseCredit-text px-3 text-info">
                                {Number(amount).toLocaleString('fa-IR')}
                            </span>
                            تومان شارژ خواهد شد.
                        </h4> : null}
                        <div className="payment-gateway col-3 py-4 m-auto">
                            <Form.Select aria-label="Default select example">
                                <option value="1">درگاه زیبال</option>
                                <option value="1">درگاه زرین پال</option>
                            </Form.Select>
                        </div>
                        <div className="transferToPayment py-4">
                            <Button variant="contained" color="main" >
                                    انتقال به درگاه پرداخت
                            </Button>
                                
                        </div>
                        <div className="table-info-payment py-4 p-2">
                            <Paper
                                sx={{ width: "100%", overflow: "hidden" }}
                                className="product-list-gift"
                            >
                                <TableContainer sx={{ maxHeight: 440 }}>
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
                                            {rows? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            role="checkbox"
                                                            tabIndex={-1}
                                                            key={row.id}
                                                        >
                                                            {columns.map((column) => {
                                                                const value = row[column.id];
                                                                
                                                                return (
                                                                    <TableCell key={column.id} align={column.align}>
                                                                        {column.format && typeof value === "number"
                                                                            ? column.format(value)
                                                                            
                                                                                : value}
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                }) : <div className="px-2">{"تراکنشی ثبت نشده است"}</div>}
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
           </UserPanelBase>
        </section>
    );
}
export default Wallet;