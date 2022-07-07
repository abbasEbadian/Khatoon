import { Box, Button, CircularProgress, InputAdornment, MenuItem, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import * as e from '../../redux/endpoints'


function VendorSettingTabOne({goToNext=undefined}) {
    const [loading, setLoading] = React.useState(false);
    const [banks, setBanks] = React.useState([]);

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
            <form className='row align-items-center justify-content-center' onSubmit={submit}>
                <div className="my-4 col-12">
                    <Box >
                        <TextField
                            required
                            label="کد ملی"
                            variant="outlined"
                            fullWidth
                            name="national_code"
                            value={initData.national_code}
                            onChange={e=>changeInitData(e, "national_code")}
                            helperText="کد ملی صاحب غرفه"
                            dir="ltr"
                            placeholder="136..."
                        />
                    </Box>
                </div>
                <div className="my-4 col-12">
                    <Box >
                        <TextField
                            required
                            label="شبا"
                            variant="outlined"
                            fullWidth
                            name="shaba"
                            value={initData.shaba}
                            onChange={e=>changeInitData(e, "shaba")}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">IR</InputAdornment>,
                                dir: "ltr"
                            }}
                            placeholder="27801..."
                            dir="ltr"
                            className="text-end"
                        />
                    </Box>
                </div>
                <div className="my-4 col-12">
                    <Box>
                        <TextField
                            required
                            select
                            label="بانک "
                            variant="outlined"
                            fullWidth
                            inputProps={{
                                dir: "ltr"
                            }}
                            // value={business}
                            // onChange={handleBusinessChange}
                            name="bank"
                            value={initData.bank}
                            onChange={e=>changeInitData(e, "bank")}
                            

                        >
                            {banks?.map(item => {
                                return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                            })}
                        </TextField>
                    </Box>
                </div>
                <div className="my-4 col-12">
                    <Box >
                        <TextField
                            required
                            label="شماره کارت"
                            variant="outlined"
                            fullWidth
                            name="card_number"
                            value={initData.card_number}
                            onChange={e=>changeInitData(e, "card_number")}
                            helperText="شماره کارت باید به نام صاحب غرفه باشد"
                            dir="ltr"
                            placeholder="60379410..."
                            className="text-end"

                        />
                    </Box>
                </div>

                

                <div className="col-12">
                    <Button color="main" variant="contained" fullWidth type="submit">
                        {loading? <CircularProgress color="white" size={20} /> : <span>بروزرسانی فروشگاه</span>}
                    </Button>
                </div>
            </form>
        </div>
    </div>
    )   
}

export default VendorSettingTabOne