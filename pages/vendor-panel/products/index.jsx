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
import Image from "next/image";
import VendorPanelBase from "../../../components/VendorPanelBase";
import TableHeaderInputs from "../../../components/Ui/TableHeaderInputs"
import {useSelector} from 'react-redux'
import { product_imlink } from "../../../components/utils";
import * as _ from 'lodash'
import { Button, IconButton } from "@mui/material";
import withAuth from '../../../redux/withAuth'
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeVisibilityButton from "../../../components/Product/ChangeVisibilityButton";
import DeleteProductButton from "../../../components/Product/DeleteProductButton";

function Products() {
    const user = useSelector(s=>s.auth.user)
    const [products, setProducts] = React.useState([]);

    const columns = [
        { id: "image", label: "تصویر ", minWidth: 50 },
        { id: "name", label: "نام محصول", minWidth: 130 },
        {
            id: "preperation_time",
            label: "زمان آماده سازی",
            minWidth: 50,
            format: value=> value + " روز کاری"
        },
        {
            id: "_count",
            label: " موجودی",
            minWidth: 100,
            format: (value) => value.toLocaleString("en-US") + " عدد ",
        },
        {
            id: "price",
            label: " قیمت",
            minWidth: 100,
            format: (value) => Number(String(value)).toLocaleString("fa-IR") + " تومان",
        },
        {
            id: "status",
            label: "وضعیت",
            minWidth: 100,
        },


    ];



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [searchValue, setSearchValue] = React.useState("");
    const [sortValue, setSortValue] = React.useState("");
    const [filterValue, setFilterValue] = React.useState("");

    const searchValueChange = (event) => {
        setSearchValue(String(event.target.value));
    };
    const filterValueChange = (event) => {
        setFilterValue(event.target.value)
    };
    const sortValueChange = (event) => {
        setSortValue(String(event.target.value));
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    React.useEffect(()=>{
        setProducts(user?.market?.products || [])
    }, [user])
    React.useEffect(()=>{
        if(searchValue)
        setProducts(products => {
            return user?.market?.products.filter(i=>i.name.indexOf(searchValue )> -1)
        })
        else
            setProducts(user?.market?.products || [])
    }, [searchValue])
    React.useEffect(()=>{
        if(filterValue){
            let val = filterValue
            const reversed = val[0] === "-"
            if(reversed) val = val.slice(1)  
            let p = _.sortBy(user?.market?.products, item=>item[val])

            setProducts(reversed ? p.reverse() : p)
        }
    }, [filterValue])
    React.useEffect(()=>{
        if(sortValue){
            let val = sortValue
            const reversed = val[0] === "-"
            if(reversed) val = val.slice(1)  
            let p = _.sortBy(user?.market?.products, item=>item[val])

            setProducts(reversed ? p.reverse() : p)
        }
    }, [sortValue])
    

    return (
        <VendorPanelBase active={"products"} title="محصولات من">
            <section>
                <TableHeaderInputs
                    searchValue={searchValue}
                    searchValueChange={searchValueChange}
                    sortValue={sortValue}
                    sortValueChange={sortValueChange}
                    filterValue={filterValue}
                    filterValueChange={filterValueChange}

                />
                <Button variant="contained" style={{borderRadius:"20px",backgroundColor:"#ffad14"}} sx={{mt: 4}}>
                    <Link href="/vendor-panel/products/add-product">
                            افزودن محصول جدید
                    </Link>
                </Button>
                <div className={styles.Order_history}>
                    <div className="table-info-payment py-4 ">
                        <Paper
                            sx={{ width: "100%", overflow: "hidden" }}
                            className="product-list-gift"
                        >
                            <TableContainer sx={{ textAlign: 'right', minWidth: 650 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    sx={{ minWidth: column.minWidth}}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                            <TableCell>
                                                عملیات
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {products&&
                                        products.slice(
                                                page * rowsPerPage,
                                                page * rowsPerPage + rowsPerPage
                                            )
                                            .map((row, idx) => {
                                                return (
                                                    <TableRow
                                                        hover
                                                        role="button"
                                                        tabIndex={-1}
                                                        key={row.id}
                                                    >
                                                        {columns.map((column, idx2) => {
                                                            const value = row[column.id];
                                                            let val = value;
                                                            if (column.format) {
                                                                val = column.format(value);
                                                            }else if(column.id === "status") {
                                                                val = <div>
                                                                    {row.status_text}
                                                                    <br />
                                                                    (<span>{row.published? "منتشر شده": "منتشر نشده"}</span>)
                                                                </div>
                                                            }else if (column.id === "image") {
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className={idx2 === 0 ? "d-flex" : ""}
                                                                    >
                                                                        <Image
                                                                            alt={"thumb"}
                                                                            src={product_imlink(value)}
                                                                            width={80}
                                                                            height={80}
                                                                            className="mx-2"
                                                                            objectFit="scale-down"
                                                                        />
                                                                    </TableCell>
                                                                );
                                                            }
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    className={idx2 === 0 ? "d-flex" : ""}
                                                                >
                                                                    {val}
                                                                </TableCell>
                                                            );
                                                        })}
                                                        <TableCell>
                                                            <Link href={"/vendor-panel/products/edit-product/" + row.id}>
                                                                <a> 
                                                                    <IconButton size="small" variant='outlined' style={{backgroundColor:"#ffad14"}}  className="mx-1">
                                                                        <Edit/>
                                                                    </IconButton>
                                                                </a>
                                                            </Link>
                                                            <DeleteProductButton product={row}/>
                                                            <ChangeVisibilityButton product={row}/>


                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {products.length> 5 && <TablePagination
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                component="div"
                                count={products.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                labelRowsPerPage="تعداد در هر صفحه"
                                />
                            }
                        </Paper>
                    </div>
                </div>
            </section>
        </VendorPanelBase>
    );
}
export default withAuth(Products);