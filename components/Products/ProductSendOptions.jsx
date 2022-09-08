import React from 'react'
import { Checkbox, FormLabel, FormGroup, Switch,Button } from '@mui/material'

export default function ProductSendOptions() {
  const [checks, setchecks] = React.useState({
    sendready:false,
    discount:false,
    sendcourier:false,
    withvideo:false
  });
  const handleCheckClick=(prop)=>(e)=>{
    setchecks({...checks,[prop]:e.target.checked});
  }
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
          <Switch color="main" checked={checks.sendready} onChange={handleCheckClick('sendready')}/>
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">آماده ارسال</FormLabel>
        </FormGroup>
        <FormGroup row className='my-3'>
        <Switch color="main" checked={checks.discount} onChange={handleCheckClick('discount')}/>
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">تخفیف‌دارها</FormLabel>
        </FormGroup>
        <FormGroup row className='my-3'>
        <Switch color="main" checked={checks.sendcourier} onChange={handleCheckClick('sendcourier')}/>
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">ارسال با پیک</FormLabel>
        </FormGroup>
        <FormGroup row className='my-3'>
        <Switch color="main" checked={checks.withvideo} onChange={handleCheckClick('withvideo')} />
          <FormLabel className="ms-5 mt-3 fw-bold text-dark">محصولات ویدئودار</FormLabel>
        </FormGroup>
        </div>
    </div>
  )
}
