import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

function VendorCover() {
    const user = useSelector(s=>s.auth.user)
    return (
      <div className="vendor-cover">
          <Box sx={{width: 1, minHeight: 300}}>
            <Image ></Image>
          </Box>
          
      </div>
    )
}

export default VendorCover