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
import VendorPanelBase from "../../../components/VendorPanelBase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Grid, Slide } from "@mui/material";
import TableHeaderInputs from "../../../components/Ui/TableHeaderInputs";
import { useSelector } from "react-redux";
import OrderDetail from "../../../components/OrderDetail";

function VendorOrders() {
  const { user, loading: loadingUser } = useSelector((s) => s.auth);
  const [orders, setOrders] = React.useState([]);
  const [selectedOrder, setSelectedOrder] = React.useState(undefined);
  const containerRef = React.useRef(null);

  const columns = [
    { id: "order_code", label: "شماره سفارش ", minWidth: 100,},
    { id: "status_text", label: "وضعیت", minWidth: 70	},
    { id: "user_id",label: " نام مشتری", minWidth: 100, format: (value) => value.first_name,},
    {id: "purchased_date",label: " تاریخ ثبت",minWidth: 100,align: "center",format: (value) => new Date(value).toLocaleDateString(
		"fa-IR",{year: "numeric",month: "long",day: "numeric",}),},
    {id: "delivery_date",label: " مهلت ارسال",minWidth: 100,align: "center",
      format: (value) => new Date(value).toLocaleDateString("fa-IR",{year: "numeric",month: "long",day: "numeric",}),},
    {id: "address_id",label: " مقصد",minWidth: 100,align: "center",format: (value) => value?.city_id?.name,},
    {id: "details",label: "جزییات",minWidth: 100,align: "center",},
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [showPending, setShowPending] = React.useState(true);

  const changeShowPending = (val) => {
    setShowPending(val);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
	const o = showPending? user?.market?.orders?.filter(s=>s.status==="pending"):  user?.market?.orders?.filter(s=>s.status!=="pending")
	setOrders( o || [])
  }, [user, showPending]);

  return (
      <VendorPanelBase active={"orders"} underline_dec={false}>

          
          <section className={selectedOrder? "d-none" :""}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Box
                    direction="row"
                    sx={{
                      width: 300,
                      borderRadius: "24px",
                      backgroundColor: "#F7F7F7",
                      boxShadow:
                        "4px 7px 16px -8px rgba(0, 0, 0, 0.25), -3px -5px 12px 3px rgba(255, 255, 255, 0.66);",
                      textAlign: "center",
                      padding: "5px",
                      marginBottom: "1rem",
                    }}
                  >
                    <Button
                      onClick={() => changeShowPending(true)}
                      sx={{
                        marginRight: "1rem",
                        borderRadius: "24px",
                        backgroundColor:
                          showPending  ? "#FBDEE2" : "",
                        color:
                          showPending  ? "#E96962" : "#A6ACC2",
                      }}
                    >
                      درحال پردازش
                    </Button>
                    <Button
                      onClick={() => changeShowPending(false)}
                      sx={{
                        backgroundColor:
                          !showPending ? "#FBDEE2" : "",
                          color: !showPending  ? "#E96962" : "#A6ACC2",

                        borderRadius: "24px",
                      }}
                    >
                      بسته شده
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              <TableHeaderInputs searchPlaceHolder="جست وجو در سفارشات" />

              <div className={styles.Order_history}>
                <div className="table-vendor-orders py-4 p-2">
                  <Paper
                    sx={{ width: "100%", overflow: "hidden" }}
                    className="product-list-gift"
                  >
                    <TableContainer sx={{ textAlign: "right" }} className="">
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
                          {orders
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                            )
                            .map((row, idx) => {
                              return (
                                <TableRow
                                  hover
                                  tabIndex={-1}
                                  key={row.code}
                                  onClick={e=>setSelectedOrder(row)}
                                  role="button"
                                >
                                  {columns.map((column, idx2) => {
                                    const value = row[column.id];
                                    let val = value;
                                    if (column.format) {
                                      val = column.format(value);
                                    } 
                                    return (
                                      <TableCell
                                        key={column.id}
                                        align={column.align}
                                        className={idx2 === 0 ? "d-flex" : ""}
                                      >
                                        <span>{val}</span>
                                      </TableCell>
                                    );
                                  })}
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    {orders.length > 10 && (
                      <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={orders.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                      />
                    )}
                  </Paper>
                </div>
              </div>
          </section>

          <section className={!selectedOrder? "d-none" :""}>
            <OrderDetail returnBack ={e=>setSelectedOrder(false)} order={selectedOrder}/>
          </section>

        
      </VendorPanelBase>
  );
}
export default withAuth(VendorOrders);
