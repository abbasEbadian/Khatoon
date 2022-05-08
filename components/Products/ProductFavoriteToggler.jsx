import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-toastify'
import axios from 'axios';
import { profile } from '../../redux/actions';
import {useDispatch} from 'react-redux';
import * as e from '../../redux/endpoints'

function ProductFavoriteToggler({product_id, is_favorite}) {
    const dispatch = useDispatch()
    const _toggle_favorite = ()=>{
        axios.post(e.TOGGLE_FAVORITE, {product_id})
        .then((response)=>{
          const {error, message} = response.data
          toast(message, {type: (error? "error": "success")})
          dispatch(profile())
        })
        .catch(e=>{toast.error("خطا در برقراری ارتباط")})
      }

    return (
        <>
            {is_favorite?  
                <FavoriteIcon sx={{fill: "#E91E63 !important"}} onClick={_toggle_favorite}/>
            :
                <FavoriteBorderIcon onClick={_toggle_favorite}/>
            }
        </>
    )
}

export default ProductFavoriteToggler