import { Button, Typography } from '@mui/material'
import React from 'react'

function ProductNotAvailable() {
  return (
    <div className="d-flex flex-column align-items-start h-100 py-2">
        <span className="product-not-avalable">
            این محصول در دسترس نیست.
        </span>
        <s className="mt-auto"></s>
        <Typography fontSize={"12px"} className="mt-3">موجود شد به من اطلاع بده !</Typography> <br />
        <div className="form-group d-flex align-items-center">
          <label htmlFor="phone" className="text-nowrap">تلفن همراه</label>
          <input type="text" name="phone" className="form-control form-control-sm mx-2 d-inline-block" dir="ltr" placeholder="09..." />
          <Button size="small" variant="contained">تایید</Button>
        </div>
    </div>

  )
}

export default ProductNotAvailable