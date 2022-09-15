import React from 'react'

export default function ProductSend({product,current}) {
  return (
    <div className='d-flex justify-content-between text-center my-5'>
      <div className='px-3'>
        <h6>ارسال‌ از</h6>
        <p>{product?.market_id?.city}</p>
      </div>
      <div className="vertical-line"></div>

      <div className='px-3'>
      <h6>ارسال‌ غرفه‌دار</h6>
        <p>{product?.market_id?.day}</p>
      </div>
      <div className="vertical-line"></div>
      <div className='px-3'>
      <h6>فروش محصول</h6>
      <p>{current?.count}</p>
      </div>
    </div>
  )
}
