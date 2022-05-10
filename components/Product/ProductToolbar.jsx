import React from 'react'

import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import { toast } from 'react-toastify'
import axios from 'axios';
import { profile } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import * as e from '../../redux/endpoints'
import ProductFavoriteToggler from '../Products/ProductFavoriteToggler';
function ProductToolbar({product_id, toggle_reminder, reminderActive, isFavorite}) {

  return (
    <div className="d-flex algin-items-center justify-content-evenly product-toolbar mb-4">
      <ProductFavoriteToggler product_id={product_id} is_favorite={isFavorite}/>
      {reminderActive ?  
        <NotificationsActiveIcon sx={{fill: "#FFAD14 !important"}} onClick={toggle_reminder}/>
        :
        <NotificationsActiveOutlinedIcon onClick={toggle_reminder}/>
       }
      <ShareOutlinedIcon />
      <QueryStatsOutlinedIcon />
    </div>
  )
}

export default ProductToolbar