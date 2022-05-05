import React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'

function BestVendorSlide({className}) {
  return (
    <div className={className}>
        <Image src={'/images/cards/vendor.png'} alt="vendor" width="120" height="120" layout="fixed" ></Image>
        <Typography className={"title"} >
            ناز خاتون
        </Typography>
    </div>
  )
}

export default BestVendorSlide