import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function ProductVendor() {
    const vendor = {
        name: "نیل کده",
        sales_count: "81",
    }
  return (
    <div className="product-vendor">
        
        <div className="row">
            <div className="col-2 avatar">
                <Image src="/images/avatar/1.png" width="64" height="64" alt="avatar"/>
            </div>
            <div className="col-5">
                <small className="d-block my-2"></small>
                <Typography fontSize={"12px"}><b>فروشنده این محصول:</b></Typography>
                <Typography fontSize={"13px"}>{vendor.name}</Typography>
            </div>
            <div className="col-5">
            <small className="d-block my-2"></small>
                <span className="sales-count text-nowrap">{vendor.sales_count} فروش موفق</span>
            </div>

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