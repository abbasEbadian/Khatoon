import React,{useState} from 'react'
import {FormLabel,Radio,FormGroup} from '@mui/material'
import {Star,StarBorder} from '@mui/icons-material/'

export default function ProductScoreFilter() {
  const [score, setscore] = useState(5);
  
  return (
    <div className='container'>
      <FormGroup row className=' my-2' onClick={()=>{setscore(5)}}>
        <Radio checked={score===5} />
        <FormLabel className="ms-5 mt-1">
          <Star color="warning"/>
          <Star color="warning"/>         
          <Star color="warning"/>         
          <Star color="warning"/>         
          <Star color="warning"/>         
        </FormLabel>
    </FormGroup>
    <FormGroup row className=' my-2' onClick={()=>{setscore(4)}}>
        <Radio checked={score===4} />
        <FormLabel className="ms-5 mt-1">
          <Star/>
          <Star color="warning"/>         
          <Star color="warning"/>         
          <Star color="warning"/>         
          <Star color="warning"/>         
        </FormLabel>
    </FormGroup>
    <FormGroup row className=' my-2' onClick={()=>{setscore(3)}}>
        <Radio checked={score===3} />
        <FormLabel className="ms-5 mt-1">
          <Star/>
          <Star/>         
          <Star color="warning"/>         
          <Star color="warning"/>         
          <Star color="warning"/>         
        </FormLabel>
    </FormGroup>
    <FormGroup row className=' my-2' onClick={()=>{setscore(2)}}>
        <Radio checked={score===2}/>
        <FormLabel className="ms-5 mt-1">
          <Star/>
          <Star/>         
          <Star/>         
          <Star color="warning"/>         
          <Star color="warning"/>         
        </FormLabel>
    </FormGroup>
    <FormGroup row className='my-2' onClick={()=>{setscore(1)}}>
        <Radio checked={score===1}/>
        <FormLabel className="ms-5 mt-1">
          <Star/>
          <Star/>         
          <Star/>         
          <Star/>         
          <Star color="warning"/>         
        </FormLabel>
    </FormGroup>
    </div>
  )
}
