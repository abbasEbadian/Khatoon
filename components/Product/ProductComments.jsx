import React from 'react'
import UserComments from './UserComments'
import SendIcon from '@mui/icons-material/Send';
import {TextField,Button} from '@mui/material'
export default function ProductComments() {
  return (
    <div className='container'>
       <h5 className='px-2'>تجربه کاربران</h5>
       <div className="py-5">
       </div>
       <UserComments />
       <div className='py-4 d-flex'>
        <TextField
        variant='outlined'
        fullWidth
        size="small"
        color="main"
        rows={3}
        label="نظر خود را بنویسید"
        className='mx-1'
        />
        <Button variant="contained" color="main" className='mx-1'><SendIcon sx={{transform:"rotate(180deg)"}} /></Button>
      </div>
    </div>
  )
}
