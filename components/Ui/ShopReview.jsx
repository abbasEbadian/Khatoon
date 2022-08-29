import Link from 'next/link'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ShopReview() {

    return (
        <div className="col-md-12 col-12 card mb-4 mt-4">
            <div className={"finicial "}>
                <div className={"head_finicial "}>
                    <p >غرفه فعال</p>
                    <Link href="/">
                        <a style={{color:"#e9696d"}}>
                            مشاهده غرفه در خاتون زیبا <ArrowBackIosNewIcon/>
                        </a>
                    </Link>
                </div>
                <div className={"content_shopreview "}>
                <div className="col-6 p-3" >
                 <ul className="list-group-items">
                   <li className="row row-cols-2">
                     <p className="col-8 p-3">تعداد سفارشات</p>
                     <p className="col-4 p-3">30</p>
                   </li>
                   <li className="row row-cols-2">
                     <p className="col-8 p-3">تعداد محصولات فروش رفته</p>
                     <p className="col-4 p-3">49</p>
                   </li>
                 </ul>
                </div>
                <div className="col-6 p-3">
                <ul className="list-group-items">
                <li className="row row-cols-2">
                     <p className="col-8 p-3">تعداد محصول</p>
                     <p className="col-4 p-3">43</p>
                   </li>
                   <li className="row row-cols-2">
                     <p className="col-8 p-3">تعداد تجربه خرید</p>
                     <p className="col-4 p-3">25</p>
                   </li>
                 </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ShopReview