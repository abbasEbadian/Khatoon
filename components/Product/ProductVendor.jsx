import { Box, Link, Typography,Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { market_imlink } from '../utils';
import ChatIcon from '@mui/icons-material/Chat';
function ProductVendor({product}) {
    const vendor = {
        name: "نیل کده",
        sales_count: "81",
    }
    console.log(product)
  return (
    <div className="product-vendor">
        
        <div className="row">
            <div className="col-8  d-flex align-items-center">
                <Box className="position-relative" sx={{width: "64px", height: "64px"}}>
                    <Image src={market_imlink(product?.market_id?.image)} objectFit={"cover"} layout="fill" alt="avatar" className="rounded-circle"/> 
                </Box>
                <div className=" ms-3">
                    <small className="d-block my-2"></small>
                    <Typography fontSize={"12px"}><b>فروشنده این محصول:</b></Typography>
                    <Typography fontSize={"13px"}>
                        <Link prefetch={false} href={"/shop/" + product?.market_id?.username}>
                            <a>
                                {product?.market_id?.name}
                            </a>
                        </Link>
                    </Typography>
                </div>
                  
            </div>
            
            {product?.sales_count > 0 ?<div className="col-4 d-flex align-items-center">
                <small className="d-block my-2"></small>
                <span className="sales-count text-nowrap">
                        {product?.sales_count?.toLocaleString("fa")} فروش موفق  
                </span> 
            </div>:null}

            <div className="col-12 mt-4">

                    <Button variant="outlined" fullwidth href="/user-panel/messages" color="main" startIcon={<ChatIcon/>}> 
                    
                    گفتگو
                    </Button>
            </div>
        </div>
    </div>
  )
}

export default ProductVendor