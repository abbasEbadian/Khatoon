import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { remove } from "lodash";
import Delete from "@mui/icons-material/Delete";
import SetCombinationPrice from "../dialog/SetCombinationPrice";
import SetCombinationCount from "../dialog/SetCombinationCount";
import NumberFormat from 'react-number-format';

export default function NewProductCombinations({
  rows,
  editMode,
  setEditMode,
  confirmCombinations,
  initCombinations
}) {
  const [data, setData] = React.useState([]);
  const [openPrice, setOpenPrice] = React.useState(false);
  const [openCount, setOpenCount] = React.useState(false);
  const [usedInit, setUsedInit] = React.useState(false)
  const generate_combinations = (forced=false) => {
    if(initCombinations && !usedInit){
      setData(initCombinations)
      setUsedInit(true)
      return;
    }
    const d = {};
    rows.map((row) => {
		const key = row.sort((a,b)=>a.attribute - b.attribute).map(i=>i.value).join("-")
		const _attr = row.sort((a,b)=>a.attribute - b.attribute).map(i=>i.attribute).join("-")
      	d[key] = data[key] && Object.keys(data[key]).length? data[key] : { price: (initCombinations?initCombinations.key?.price||"":""), count: initCombinations?initCombinations.key?.count||0: 0, attribute:_attr};
    });
    setData({
      ...d
    });
  };
  React.useEffect(() => {
    generate_combinations();
  }, [rows]);
  
  const handleChange = (key, target, value) => {
    setData((d) => {
      return {
        ...data,
        [key]: {
          ...d[key],
          [target]: value,
        },
      };
    });
  };
  const remove = (key) => {
    const d = { ...data, [key]: {...data[key], count:-1, price: -1} };
    setData(d);
  };

  const handlePrices = (value) => {
    const d = { ...data };
    Object.keys(data).map((item) => {
      d[item]["price"] = value;
    });
    setData(d);
    console.log(d, value);
  };
  const handleCounts = (value) => {
    const d = { ...data };
    Object.keys(data).map((item) => {
      d[item]["count"] = value;
    });
    setData(d);
  };
  const handlePriceChanger = () => {
    setOpenPrice(true);
  };
  const handleCountChanger = () => {
    setOpenCount(true);
  };

  return (
    <>
      <TableContainer component={Paper} className="mt-4">
        <Table sx={{ minWidth: 500 }} aria-label="caption table">
          <caption>
           
            <Button
              size="small"
              variant="contained"
              onClick={handleCountChanger}
              
            >
              پر کردن تعداد ها با مقدار خاص
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={handlePriceChanger}
              color="warning"
              className="mx-2"
            >
              پر کردن قیمت ها با مقدار خاص
            </Button>
             <Button
                size="small"
                variant="contained"
                onClick={e=>generate_combinations(1)}
                color="info"
              >
              ایجاد مجدد حالت ها
            </Button>
            <hr />
            
            <br />
            <li>این مقادیر بعدا قابل ویرایش هستند.</li>
            <br />

            <li className="text-danger">** بعد از اتمام ویرایش ، جهت ثبت تغییرات دکمه زیر را فشار دهید.</li>
            <hr />

			{
				editMode?
				<Button
					variant="contained"
					onClick={e=>{
						confirmCombinations(data)
						setEditMode(false)
					}}
					color="success"
				>
					ثبت مقادیر
				</Button>:
				<Button
					variant="contained"
					onClick={e=>setEditMode(true)}
					color="orange"
					>
					ویرایش مقادیر
				</Button>
			}
          </caption>
          <TableHead>
            <TableRow>
              <TableCell>حالت ها</TableCell>
              <TableCell>تعداد موجود</TableCell>
              <TableCell>قیمت (تومان)</TableCell>
              <TableCell>عملیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data).map((key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {key}
                </TableCell>
                <TableCell>
                  <input
                    className="form-control"
                    value={data[key].count}
                    onChange={(e) => handleChange(key, "count", e.target.value)}
                    type="number"
                    disabled={!editMode}
                  ></input>
                </TableCell>
                <TableCell>
                <NumberFormat
                    value={data[key].price}
                    thousandSeparator={true}
                    onValueChange={(values) => {
                      const { formattedValue, value } = values;
                      // formattedValue = $2,223
                      // value ie, 2223
                      handleChange(key, "price", value)
                    }}
                    className="form-control text-end"
                    disabled={!editMode}

                  />
                </TableCell>
                <TableCell>
                  <Button
                    onClick={(e) => remove(key)}
                    color="error"
                    variant="outlined"
                    disabled={!editMode}
                  >
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SetCombinationPrice
        open={openPrice}
        setOpen={setOpenPrice}
        handleChange={handlePrices}
      />
      <SetCombinationCount
        open={openCount}
        setOpen={setOpenCount}
        handleChange={handleCounts}
      />
    </>
  );
}
