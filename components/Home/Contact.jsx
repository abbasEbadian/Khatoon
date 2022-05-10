import { FormControl, Input, InputAdornment, InputLabel, MenuItem, TextField } from '@mui/material'
import React from 'react'
import style from '../../styles/Home.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ModeIcon from '@mui/icons-material/Mode';
import Image from 'next/image'
function Contact() {
    const options = [
        {
            value: "نحوه آشنایی",
            label: "نحوه آشنایی",
        },
        {
            value: "گوگل",
            label: "گوگل"
        },
        {
            value: "سایر",
            label: "سایر"
        }
    ]

  return (
   <div className="row">
       <div className="col-xl-6 col-lg-4 col-10 d-none d-md-flex align-items-center justify-content-center">
           <Image src="/images/contact.png" alt="contantus" width={400} height={580}/>
       </div>
       <div className="col-xl-6 col-lg-8 col-12">
       <div className={"contact_container"}>
        <p>
        لطیفه ای، گالایه ای، تعریفی، تمجیدی، چیزی داشتی، حتما باهامون اگه امری، پیشنهادی، انتقادی، پرسشی، پاسخی، نکته ای، حکایتی،   در میون بذاریا!
        </p>
        <form action="" >
            <div className="row  py-5">
                <div className="col-6">
                    <FormControl fullWidth sx={{ m: 1 }} variant="">
                        
                        <Input
                            id="standard-adornment-amount"
                            // onChange={handleChange('amount')}
                            placeholder="نام و نام خانوادگی"
                            startAdornment={<InputAdornment position="start" sx={{fontSize:"12px"}}><AccountCircleIcon/></InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div className="col-6">
                    <FormControl fullWidth sx={{ m: 1 }} variant="">
                        
                        <Input
                            id="standard-adornment-amount"
                            // onChange={handleChange('amount')}
                            placeholder="شماره همراه"
                            startAdornment={<InputAdornment position="start" sx={{fontSize:"12px"}}><PhoneAndroidIcon/></InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div className="col-6 pt-2
                ">
                <TextField
                fullWidth
                    id="standard-select-currency"
                    select
                    value={options[0].value}
                    className="select"
                    // onChange={handleChange}
                    variant="standard"
                    >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                </div>
                <div className="col-6">
                    <FormControl fullWidth sx={{ m: 1 }} variant="">
                        
                        <Input
                            id="standard-adornment-amount"
                            // onChange={handleChange('amount')}
                            placeholder="موضوع پیام"
                            startAdornment={<InputAdornment position="start" sx={{fontSize:"12px"}}><ModeIcon/></InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div className="col-12">
                    <FormControl fullWidth sx={{ m: 1 }} variant="" multiline>
                        
                    <TextField
                        id="outlined-multiline-static"
                        label=" "
                        multiline
                        rows={4}
                        className="border-none"
                        placeholder="متن کامل پیام"
                        value="متن کامل پیام"
                        sx={{fontSize: "12px"}}
                    />
                    </FormControl>
                </div>
                <div className="col-12 pe-1 ps-3">
                    <button className="btn bg-secondary text-white w-100 me-2">ارسال</button>
                </div>
            </div>
                    

        </form>
    </div>
       </div>
   </div>
  )
}

export default Contact