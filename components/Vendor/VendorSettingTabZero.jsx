import { Box, Button, CircularProgress, InputAdornment, MenuItem, TextField, CardHeader, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import * as e from '../../redux/endpoints'
import {Card,CardContent} from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Corporateuser from '../../static/img/icon/corporate-user-icon.svg'
import Corporate from '../../static/img/icon/corporate-icon.svg'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Barrier from '../utils/SVGBarrier'

export default function VendorSettingTabZero({goToNext=undefined}) {
    const [loading, setLoading] = React.useState(false);
    const [selection,setSelection]=React.useState("");
    const [selectioncolor,setSelectioncolor]=React.useState({
        hoghogi:"#989898",
        haghighi:"#989898"
    });
   
    const [checked,setChecked]=React.useState(false);
    const [checkedcolor,setCheckedcolor]=React.useState("");

    
    const handleRadioSelect=(event)=>{
       setSelection(event.target.value);
       setChecked(true)
    }
    const handlecardSelect=(prop)=>(event)=>{
        if(prop==='haghighi'){
           setSelection("haghighi");
           setChecked(true);
           setCheckedcolor("#ffad14");
           setSelectioncolor({haghighi:"#ff676d",hoghogi:"#989898"});


        }else if(prop==='hoghogi'){
            setSelection("hoghogi");
            setChecked(true);
            setCheckedcolor("#ffad14");
            setSelectioncolor({hoghogi:"#ff676d",haghighi:"#989898"});
        }
    }
    const submit=(event)=>{
      event.preventDefault();
      localStorage.setItem('typeshop',selection);
        if (goToNext) goToNext();
    }
    return (
        <div className="row p-4 justify-content-center">
        <div className="col-xxl-6 col-12">
            {/* <VendorCover /> */}
            <form className='row align-items-center justify-content-center text-center' onSubmit={submit}>
            <Typography variant="h5" component="h5">
                   به چه طریقی میخواهید در غرفه فعالیت کنید؟
                 </Typography>
                <div className=" col-12 py-5">
                     <Box sx={{ width: '100%' }}>
                   
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      
            <Grid container xs={6}
                direction="column"
                alignItems="center"
                justifyContent="center"
               >
              <Card style={{width:'300px',height:'300px'}} onClick={handlecardSelect('hoghogi')} >
                <CardHeader title="فروشنده حقوقی" className="text-center" style={{backgroundColor:selectioncolor.hoghogi}}/>
                <CardContent className='row justify-content-center'>
                <Barrier Component={Corporate} fill={selectioncolor.hoghogi} width="100px" height="100px" />
                <div className='text-center p-3' dir='rtl'>
                <Typography variant="p" component="p">
                        اگر دارای شرکت ثبت شده و کد اقتصادی می باشید
                   </Typography>
                  <FormControlLabel value="hoghogi" className="mt-4" onChange={handleRadioSelect} checked={selection==="hoghogi"}   control={<Radio style={{color:selectioncolor.hoghogi}} />} label="انتخاب" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid container xs={6}
                direction="column"
                alignItems="center"
                justifyContent="center"
                >
              <Card style={{width:'300px',height:'300px'}} onClick={handlecardSelect('haghighi')}>
              <CardHeader title="فروشنده حقیقی" className="text-center" style={{backgroundColor:selectioncolor.haghighi}}/>

                <CardContent className='row justify-content-center'>
                <Barrier Component={Corporateuser} fill={selectioncolor.haghighi} width="100px" height="100px" />                  
                  <div className='text-center p-3' dir='rtl'>
                  <Typography variant="p" component="p">
                        اگر به صورت شخصی اقدام به فروش محصولات می نمایید
                   </Typography>
                  <FormControlLabel value="haghighi" className="mt-4" onChange={handleRadioSelect} checked={selection==="haghighi"} control={<Radio style={{color:selectioncolor.haghighi}}  />} label="انتخاب" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
                </div>

                

                <div className="col-12 row justify-content-center">
                    <Button  style={{borderRadius:"20px",backgroundColor:checkedcolor}} disabled={!checked} variant="contained" fullWidth type="submit">
                        {loading? <CircularProgress color="white" size={20} /> : <span>ثبت اطلاعات </span>}
                    </Button>
                </div>
            </form>
        </div>
    </div>
    )
}
