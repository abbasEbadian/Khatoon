import React from 'react'
import userprofile from '../../static/img/icon/basic/user-square.svg'
import Barrier from '../utils/SVGBarrier'
import {Star,Like} from '@mui/icons-material/';
import Link from 'next/link'
import {IconButton} from '@mui/material';
import LikeIcon from '@mui/icons-material/ThumbUpAlt';
import DislikeIcon from '@mui/icons-material/ThumbDownAlt';



export default function UserComments() {
  const fakedata=[
    {'user':'علی علیزاده','icon':userprofile,'text':'this is comment!','star':3,'date':'امروز'},
    {'user':'علی علیزاده','icon':userprofile,'text':'this is comment!','star':2,'date':'امروز'},
    {'user':'علی علیزاده','icon':userprofile,'text':'this is comment!','star':1,'date':'امروز'}
  ];
  const getStar=(count)=>{
    let output="";
   if(count==1){
      output= (
        <div className='d-flex'>
          <Star />
          <Star />         
          <Star/>         
          <Star/>         
          <Star color="warning"/> 
        </div>
      )
   }
   if(count==2){
        output= (
        <div className='d-flex'>
            <Star />
            <Star />         
            <Star />         
            <Star color="warning"/>         
            <Star color="warning"/> 
        </div>
        )
    }
    if(count==3){
        output= (
        <div className='d-flex'>
            <Star />
            <Star />         
            <Star color="warning"/>         
            <Star color="warning"/>         
            <Star color="warning"/> 
        </div>
        )
    }
    if(count==4){
        output= (
        <div className='d-flex'>
            <Star />
            <Star color="warning"/>         
            <Star color="warning"/>         
            <Star color="warning"/>         
            <Star color="warning"/> 
        </div>
        )
    }
    if(count==5){
        output= (
        <div className='d-flex'>
            <Star color="warning"/>  
            <Star color="warning"/>                
            <Star color="warning"/>         
            <Star color="warning"/>         
            <Star color="warning"/> 
        </div>
        )
    }
   return output;
}
  return (
      <div>
 {fakedata.map((item,idx)=>(
            <div key={idx}>
            <div className='d-flex justify-content-between p-3'>
            <div className='d-flex justify-content-center'>
                <Barrier Component={item.icon} className="m-2"/>
             <div className='my-2'>
                <p className='nav-link'>{item.user}</p>
                <div>{getStar(item.star)}</div>
             </div>
            </div>
            <div>
                <span>{item.date}</span>
            </div>
            </div>
           
            <div className='py-3'>
                <p>{item.text}</p>
            </div>
            <div className="d-flex justify-content-start">
                <IconButton className="m-2">
                 <LikeIcon fontSize="large" fill="grey"/>
                </IconButton>
                <IconButton className="m-2">
                <DislikeIcon fontSize="large" fill="grey"/>
                </IconButton>
            </div>
            <hr className='w-100'/>
        </div>
        ))}
      </div>
       
  )
}
