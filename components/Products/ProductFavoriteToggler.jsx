import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-toastify'
import axios from 'axios';
import { profile } from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import * as e from '../../redux/endpoints'

function ProductFavoriteToggler({product_id, is_favorite=undefined}) {
    const dispatch = useDispatch()
    const user = useSelector(s=>s.auth.user)
    const [isFavorite, setIsFavorite] = React.useState(is_favorite)
    const _toggle_favorite = ()=>{
        axios.post(e.TOGGLE_FAVORITE, {product_id})
        .then((response)=>{
          const {error, message} = response.data
          toast(message, {type: (error? "error": "success")})
          dispatch(profile())
        })
        .catch(e=>{toast.error("خطا در برقراری ارتباط")})
      }

      React.useEffect(()=>{
          console.log(product_id, user?.favorite_set)
        setIsFavorite(user?.favorite_set?.find(i=>i.product_id.id === product_id) || false)
      }, [user, product_id])
    return (
        <>
            {isFavorite?  
                <FavoriteIcon sx={{fill: "#E91E63 !important"}} onClick={_toggle_favorite}/>
            :
                <FavoriteBorderIcon onClick={_toggle_favorite}/>
            }
        </>
    )
}

export default ProductFavoriteToggler