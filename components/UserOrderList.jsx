import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IRT from './IRT'
import IRDate from './IRDate';
import Image from 'next/image';
import { product_imlink } from './utils';
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        
        
        <TableCell >{row.order_code}</TableCell>
        <TableCell >{row.products_count}</TableCell>
        <TableCell ><IRT amount={row.total} /></TableCell>
        <TableCell ><IRDate date={row.purchased_date} /></TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="p" fontSize={16} gutterBottom component="div">
               سطر های سفارش
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>تصویر شاخص</TableCell>
                    <TableCell>نام محصول</TableCell>
                    <TableCell >غرفه</TableCell>
                    <TableCell >تعداد</TableCell>
                    {/* <TableCell >وضعیت ارسال</TableCell> */}
                    <TableCell >مجموع</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.orderlines?.sort((a,b)=>a.market_id?.id - b.market_id?.id).map((line) => (
                    <TableRow key={line.id}>
                      <TableCell component="th" scope="row">
                        <Image  alt={"thumb"} src={product_imlink(line?.product_id?.image)} width={90} height={64} className="mx-2"/>
                      </TableCell>
                      <TableCell>{line?.product_id?.name}</TableCell>
                      <TableCell>{line?.market_id?.name}</TableCell>
                      <TableCell>{line?.count}</TableCell>
                      <TableCell><IRT amount={line?.price} /></TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}




export default function UserOrderList({orders}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>شناسه سفارش</TableCell>
            <TableCell >تعداد کل</TableCell>
            <TableCell >کل مجموع</TableCell>
            <TableCell >تاریخ ثبت</TableCell>
            <TableCell >عملیات</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <Row key={row.order_code} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
