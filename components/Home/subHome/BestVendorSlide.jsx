import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { market_imlink } from '../../utils'
import Link from 'next/link'
function BestVendorSlide({className, market={}}) {
  return (
    <div className={className}>
      
      <Box sx={{ width:"120px",height:"120px"}} className="position-relative image-conainer">
            <Image src={market_imlink(market?.image)} alt="vendor" layout="fill" objectFit="cover"></Image>
       
      </Box>
      <Link href={"/shop/" + market?.username} preferch={false}>
          <a>
        <Typography className={"title"} >
            {market?.name}
        </Typography>
          </a>
        </Link>
    </div>
  )
}

export default BestVendorSlide