import { Button, Typography } from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';
import { profile } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import * as e from '../../redux/endpoints'

function ProductNotAvailable({product_id, toggle_reminder, reminderActive}) {





  const [reminder, setReminder] = React.useState(false)

  return (
    <div className="d-flex flex-column align-items-start h-100 py-2">
        <s className="mt-auto"></s>
        <span className="product-not-avalable my-4">
            این محصول در دسترس نیست.
        </span>
        <div className="form-group d-flex align-items-center">
          {/* <label htmlFor="phone" className="text-nowrap">تلفن همراه</label> */}
          {/* <input type="text" name="phone" className="form-control form-control-sm mx-2 d-inline-block" dir="ltr" placeholder="09..." /> */}
          <Button size="small" variant="contained" color="success" onClick={toggle_reminder} disabled={reminderActive}>
            {reminderActive? "موجودی به شما اعلام خواهد شد !": "موجود شد به من اطلاع بده"}
          </Button>
        </div>
    </div>

  )
}

export default ProductNotAvailable