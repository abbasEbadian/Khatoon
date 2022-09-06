import React from 'react'
import { Checkbox, FormLabel, FormGroup, Switch,Button } from '@mui/material'

export default function ProductSendOptions() {

  return (
    <div className='container'>
        <Button
        size="large"
        className="m-2"
        varient="contained"
        style={{backgroundColor:"#ff676d",color:"white",borderRadius:"20px",width:"100%"}}
        >انتخاب شهر غرفه‌دار</Button>

        <div>
        <FormGroup row className=' my-3'>
          <Switch color="main"/>
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">آماده ارسال</FormLabel>
        </FormGroup>
        <FormGroup row className='my-3'>
        <Switch color="main"/>
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">تخفیف‌دارها</FormLabel>
        </FormGroup>
        <FormGroup row className='my-3'>
        <Switch color="main"/>
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">ارسال با پیک</FormLabel>
        </FormGroup>
        <FormGroup row className='my-3'>
        <Switch color="main"/>
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">محصولات ویدئودار</FormLabel>
        </FormGroup>
        </div>
    </div>
  )
}
