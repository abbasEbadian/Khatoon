import React from 'react'
import Image from 'next/image'

export default function ProductGuarantee() {
  return (
    <div className="row text-center py-3 px-2">
     <div className="col-12 row mt-4">
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility1.png" width="30" height="30" alt="fac"/>
                    <span className="facility">پرداخت در محل</span>
                </div>
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility2.png" width="30" height="30" alt="fac"/>
                    <span className="facility">ارسال سریع</span>
                </div>
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility3.png" width="30" height="30" alt="fac"/>
                    <span className="facility">پشتیبانی آنلاین</span>
                </div>
                <div className="col-3 flex-column d-flex align-items-center">
                    <Image src="/images/product/facility4.png" width="30" height="30" alt="fac"/>
                    <span className="facility">ضمانت تحویل</span>
                </div>
            </div>
    </div>
  )
}
