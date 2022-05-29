import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios'
import {ADD_TO_CART} from '../../redux/endpoints'
import {useDispatch} from 'react-redux'
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import { Circles } from 'react-loader-spinner';
import { get_cart, profile } from '../../redux/actions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function AddToCardButton({template_id, large=false, handleLoginOpen}) {
  const [loading, setLoading] = React.useState(false)
  const dispatch = useDispatch()
  const _addToCart = ()=>{
    setLoading(true)
    axios.post(ADD_TO_CART, {
      template_id,
      count: 1
    }).then(res=>{
      const {data}= res 

      if(data.error === 0)
        dispatch(get_cart())
      else if(data.error === 1 && data.message.indexOf('وارد') > -1){
        // dispatch(update_login_modal(true))
        handleLoginOpen()
      }
      toast(data.message, {type: (data.error?"error":"success")})

    })
    .catch(e=>{
      console.log(e)
      toast.error("خطا در برقراری")
    })
    .finally(e=>{
      setLoading(false)
    })
  }
  return (
    <div className="cursor-pointer" role="button">
        {
          large?
            <Button color="success" variant="contained" onClick={_addToCart} disabled={loading} sx={{minWidth: "150px"}}>{
              loading?
              <Circles color="white" width="22" height="22"/>
              :<span>{"افزودن به سبد خرید"}</span>
            }</Button>
          :
          <div className="addToCard">
            <ShoppingCartIcon color="error" sx={{ fontSize: 28 }} onClick={_addToCart}/>
          </div>
        }
    </div>
  )
}

export default AddToCardButton