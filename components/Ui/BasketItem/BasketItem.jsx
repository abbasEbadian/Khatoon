import React from 'react'
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './BasketItem.module.scss'
import Link from 'next/link';
import { product_imlink } from '../../utils'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import * as e from '../../../redux/endpoints'
import { toast } from 'react-toastify';
import { get_cart } from '../../../redux/actions';
import RemoveBasketItemDialog from './RemoveBasketItemDialog'
function BasketItem({ item }) {
  const [counter, setCounter] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  
  const confirmAction = (type)=>{
    let URL = ""
    switch(type){
      case "increase" :  URL = e.INCREASE_CART_ITEM; break;
      case "decrease" :  URL = e.DECREASE_CART_ITEM; break;
      default: URL = e.REMOVE_CART_ITEM
    }
    axios.post(URL, {
      line_id: item.id
    })
    .then(response => {
      const {data} = response
      toast(data.message, {type: (data.error? "error": "success")})
      dispatch(get_cart())
      if(type === "remove" && date.error === 0){
        setOpen(false)
      }
    })
    .catch(e=>{
      toast.error("خطا در ارتباط")
      console.log(e)
    })

  }

  const openDelete = () =>{
    setOpen(true)
  }

  React.useEffect(() =>{
    setCounter(item?.count)
  }, [item])

  return (
    <div className={`${styles.basket__item + ' mb-3'  }`}>
      <div className='row'>
        <div className='col-12 col-md-2'>
          <div style={{ height: "100%", width: "100%" }}>
            <Link href={"/shop/product/"+item?.product_id?.url || "#"}>
              <a>
                <Image  src={product_imlink(item?.product_id?.image)} 
                alt={"product"} width="100%" height="100%" layout="responsive" objectFit="cover"
                className="rounded"
                ></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className='col-12 col-md-10'>
          <div className="d-flex flex-column align-items-start justify-content-between h-100 pt-3">
            <Link href={"/shop/product/"+item?.product_id?.url || "#"}>
              <a target="_blank">
                {item?.product_id?.name}
              </a>
            </Link>
            <div className={styles.basket__item_detail}>
              <div  className='py-3'>
                <Image src="/static/img/icon/Shape (2).png" width="15"
                  height="15"
                  objectFit='cover' alt="vendor" />
              </div>
              <div >فروشنده: {" "} {item?.product_id?.market_id?.name}</div>

            </div>
                
            {/* <div className={styles.basket__item_detail}>
              <div>
                <Image src="/static/img/icon/medal.png" width="15"
                  height="15"
                  objectFit='cover' />
              </div>
              <div >ضمانت: کار با کیفیت جنس اصل</div>

            </div> */}
            {/* <div className={styles.basket__item_detail}>
              <div>
                <Image src="/static/img/icon/send.png" width="15"
                  height="15"
                  objectFit='cover' alt="shippingMethod" />
              </div>
              <div >نحوه ارسال: پست سفارشی</div>

            </div> */}
            <div className={styles.basket__item_foot}>
              <div className={styles.basket__item_counter}>
                <ButtonGroup  aria-label="small outlined button group" sx={{ direction: 'ltr', marginTop: '.5rem', color: "#fff", borderColor: "gray" }}   >
                  <Button onClick={e=>confirmAction("increase")}>+</Button>
                  <Button >{counter}</Button>
                   <Button disabled={counter < 2} onClick={e=>confirmAction("decrease")}>-</Button>
                </ButtonGroup>
                <Button onClick={openDelete} variant="outlined" color="error">
                  <DeleteForeverIcon />
                </Button>
              </div>
              <div className={styles.basket__item_price}>
                <div>
                  <span style={{ marginLeft: '.3rem' }}>{Number(item?.price || 0).toLocaleString('fa')}</span>
                  <span>تومان</span>
                </div>
                {/* <div className={styles.basket__item_price_discount}>
                  244,000
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RemoveBasketItemDialog open={open} setOpen={setOpen} confirm={e=>confirmAction("remove")} />
    </div>
  )
}

export default BasketItem