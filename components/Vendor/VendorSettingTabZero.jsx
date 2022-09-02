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


function VendorSettingTabZero({goToNext=undefined}) {
    const [loading, setLoading] = React.useState(false);
    const [banks, setBanks] = React.useState([]);
    const [selection,setSelection]=React.useState("");
    const [selectioncolor,setSelectioncolor]=React.useState({
        business:"#989898",
        usual:"#989898"
    });
    const [selectionfilter,setSelectionfilter]=React.useState({
        business:"grey-filter",
        usual:"grey-filter"
    });
    const [checked,setChecked]=React.useState(false);
    const [checkedcolor,setCheckedcolor]=React.useState("");

    
	const [initData, setInitData] = React.useState({
		national_code: "",
		shaba: "",
		card_number: "",
        bank: 0,
	})
    const changeInitData = (e, key)=>{
		setInitData(s=>{
			return{ 
				...s,
				[key]: e.target?.value
			}
		})
		if(key === "province")
			get_cities(e.target.value)
	}
    const getInitialProps = async () => {
		try {
			const res = await fetch(e.GET_BANKS)
			const result = await res.json()
			setBanks(result || [])
		}
		catch (e) {
			console.log(e)
		}

    }
    const handleRadioSelect=(event)=>{
       setSelection(event.target.value);
       setChecked(true)
    }
    const handlecardSelect=(prop)=>(event)=>{
        if(prop==='usual'){
           setSelection("usual");
           setChecked(true);
           setCheckedcolor("#ffad14");
           setSelectioncolor({usual:"#ff676d",business:"#989898"});


        }else if(prop==='business'){
            setSelection("business");
            setChecked(true);
            setCheckedcolor("#ffad14");
            setSelectioncolor({business:"#ff676d",usual:"#989898"});
        }
    }
    React.useEffect(() => {
		getInitialProps()
	}, [])
    const submit = (event)=>{
		if(loading) return 
        try{
            event.preventDefault();
            const data = initData
            const dform = new FormData()
            for (let key of Object.keys(data)) {
                dform.append(key, data[key])
            }
			setLoading(true)
            axios.post(e.UPDATE_MARKET_DETAIL_BANK, dform, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response=>{
                const {data} = response
                toast(data.message, {type: (data.error? "error": "success")})
                if(!data.error)
				if(goToNext) goToNext()
            })
            .catch(error=>{
                console.log(error)
                toast.error("خطا در ارتباط ")
            })
			.finally(f=>{
				setLoading(false)
			})
        }
        catch(e){console.log(e)}

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
              <Card style={{width:'300px',height:'300px'}} onClick={handlecardSelect('business')} >
                <CardHeader title="فروشنده حقوقی" className="text-center" style={{backgroundColor:selectioncolor.business}}/>
                <CardContent className='row justify-content-center'>
                <Barrier Component={Corporate} fill={selectioncolor.business} width="100px" height="100px" />
                <div className='text-center p-3' dir='rtl'>
                <Typography variant="p" component="p">
                        اگر دارای شرکت ثبت شده و کد اقتصادی می باشید
                   </Typography>
                  <FormControlLabel value="business" className="mt-4" onChange={handleRadioSelect} checked={selection==="business"}   control={<Radio style={{color:selectioncolor.business}} />} label="انتخاب" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid container xs={6}
                direction="column"
                alignItems="center"
                justifyContent="center"
                >
              <Card style={{width:'300px',height:'300px'}} onClick={handlecardSelect('usual')}>
              <CardHeader title="فروشنده حقیقی" className="text-center" style={{backgroundColor:selectioncolor.usual}}/>

                <CardContent className='row justify-content-center'>
                <Barrier Component={Corporateuser} fill={selectioncolor.usual} width="100px" height="100px" />                  
                  <div className='text-center p-3' dir='rtl'>
                  <Typography variant="p" component="p">
                        اگر به صورت شخصی اقدام به فروش محصولات می نمایید
                   </Typography>
                  <FormControlLabel value="usual" className="mt-4" onChange={handleRadioSelect} checked={selection==="usual"} control={<Radio style={{color:selectioncolor.usual}}  />} label="انتخاب" />
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

export default VendorSettingTabZero