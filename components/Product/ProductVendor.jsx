import { Box, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { market_imlink } from '../utils'

function ProductVendor({product}) {
    const vendor = {
        name: "نیل کده",
        sales_count: "81",
    }
    console.log(product)
  return (
    <div className="product-vendor">
        
        <div className="row">
            <div className="col-8 avatar d-flex align-items-center">
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

            <div className="col-12 row mt-4">
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility1.png" width="32" height="32" alt="fac"/>
                    <span className="facility">پرداخت در محل</span>
                </div>
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility2.png" width="32" height="32" alt="fac"/>
                    <span className="facility">ارسال سریع</span>
                </div>
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility3.png" width="32" height="32" alt="fac"/>
                    <span className="facility">پشتیبانی آنلاین</span>
                </div>
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility4.png" width="32" height="32" alt="fac"/>
                    <span className="facility">ضمانت تحویل</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductVendor