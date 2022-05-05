import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
function ProductToolbar() {
  return (
    <div className="d-flex algin-items-center justify-content-evenly product-toolbar mb-4">
      <FavoriteBorderIcon />
      <NotificationsActiveOutlinedIcon />
      <ShareOutlinedIcon />
      <QueryStatsOutlinedIcon />
    </div>
  )
}

export default ProductToolbar