import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import LikeIcon from '@mui/icons-material/ThumbUpAlt';
import DislikeIcon from '@mui/icons-material/ThumbDownAlt';
import {Button,InputAdornment} from '@mui/material'

export default function StandpointShow({standpoint}) {
  return (
    <div className="container border rounded-3 my-2">
       <div className='d-flex justify-content-between pt-3 px-3'>
            <h6><span class="badge bg-success">{standpoint?.score}</span>{standpoint?.title}</h6>
            <small>{standpoint.user?(standpoint?.user.fullname):"ناشناس"}</small>
       </div>
       <hr/>
       <div className='px-3'>
       <p>{standpoint?.text}</p>
       <div className='d-flex'>
        {standpoint?.positives.map((item,idx)=>(
            <div className='d-flex justify-content-start text-success mx-2' key={idx}>
            <div className='pt-3'>
            <InputAdornment>
                <CheckIcon color="success"/>
            </InputAdornment>
            </div>
            <p>{item.text}</p>
            </div>  
        ))}
       </div>
        <div className='d-flex'>
          {standpoint?.negatives.map((item,idx)=>{
            <div className='d-flex justify-content-start text-danger mx-2' key={idx}>
            <div className='pt-3'>
              <InputAdornment>
                <CloseIcon color="error"/>
              </InputAdornment>
            </div>
            <p>{item.text}</p>
          </div>
          })}  
          
        </div>
        <hr />
        <div className='d-flex'>
          <p>آیا این دیدگاه مفید بود؟</p>
          <div dir="ltr">
          <Button color="inherit" startIcon={<LikeIcon/>}>
            {standpoint?.like_count}
          </Button>
          </div>
          <div dir="ltr">
          <Button color="inherit" startIcon={<DislikeIcon/>}>
          {standpoint?.dislike_count}
          </Button>
          </div>
         
        </div>
       </div>
    </div>
  )
}
