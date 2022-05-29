import React from "react";
import Image from "next/image";
import {product_imlink, user_imlink} from './utils'
import { Button } from "@mui/material";
import { ElevatorSharp, LocationCity, Place, Source } from "@mui/icons-material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IRT from "./IRT";
import {useRouter} from 'next/router'
import axios from 'axios'
import {toast} from 'react-toastify'
import * as e from '../redux/endpoints'

function OrderDetail({returnBack, order}) {
    const router = useRouter()
    const create_chat = () =>{
        axios.post(e.CREATE_CHAT_FOR_MARKET, {
            market_id: order.user_id.id
        })
        .then((response) =>{
            const {data} = response
            if(!data.error){
                router.push({
                    pathname: '/vendor-panel/messages',
                    query: { chat_id: data.chat_id },
                  })
            }
            else{
                toast.error(data.message)
            }
        })
        .catch(err=>{
            console.log(err)
            toast.error("خطا در برقراری ارتباط")
        })
    }
  return (
    <>
      <section>
        <Button onClick={returnBack} className='mb-3' variant="contained">
            بازگشت
            <KeyboardArrowLeftIcon />
        </Button>
        <div className={`${"customer_details "} ${"order_card "}`}>
          <div className={"customer_details_head "}>
            <div className="d-flex align-items-center">
              <Image
                src={user_imlink(order?.user_id?.avatar_image)}
                width={70}
                height={70}
                alt=""
              />
              <div 
                className="m-3">
                <span>نام مشتری</span>
                <h4>{order?.user_id?.first_name}</h4>
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderRadius: "15px",
                }}
                onClick={create_chat}
              >
                گفت و گو با مشتری
              </Button>
            </div>
          </div>
          <div className={"customer_details_foot "}>
            <div className={"customer_address "}>
              <p>
                <Place color="disabled" /> آدرس گیرنده
              </p>
              <p>
                {order?.address_id?.address}
              </p>
            </div>
            <div className={"customer_postal_code "}>
              <p>
                <Source color="disabled" /> کد پستی{" "}
              </p>
              <p>{order?.address_id?.postal}</p>
            </div>
          </div>
        </div>
        <div className={`${"order_detail "} ${"order_card "}`}>
          <div className={"order_detail_item "}>
            <div className={"order_detail_item_title "}>
              تاریخ ثبت سفارش
            </div>
            <div className={"order_detail_item_value "}>
                {new Date(order?.purchased_date)?.toLocaleDateString('fa', {year: 'numeric', month: 'long', day: '2-digit'})}
            </div>
          </div>
          <div className={"order_detail_item "}>
            <div className={"order_detail_item_title "}>مهلت ارسال</div>
            <div className={"order_detail_item_value "}>
                {new Date(order?.delivery_date)?.toLocaleDateString('fa', {year: 'numeric', month: 'long', day: '2-digit'})}
                </div>
          </div>
          <div className={"order_detail_item "}>
            <div className={"order_detail_item_title "}>روش ارسال</div>
            <div className={"order_detail_item_value "}>تیپاکس</div>
          </div>
          <div className={"order_detail_item "}>
            <div className={"order_detail_item_title "}>هزینه ی ارسال</div>
            <div className={"order_detail_item_value "}><IRT amount={15000} /></div>
          </div>
        </div>
        <div className={"order order_card "}>
            {
                order?.sub_orderlines?.map(line=>{
                    return <div className="d-flex p-5 align-items-center" key={line.id}>

                        <Image
                            src={product_imlink(line?.product_id?.image)}
                            width={100}
                            height={100}
                            sx={{
                                borderRadius: '10px'
                            }}
                            alt=""
                        />
                        <div className="mx-3">
                        <h6>{line?.product_id?.name}</h6>
                        {/* <div> رنگ بندی: قرمز</div>
                        <div>سایزبندی متوسط </div> */}
                        </div>
                    </div>
                })
            }
        </div>
        <div className={`${"order_detail "} ${"order_card "}`}>
          <div className={"order_detail_item "}>
            <div className={"order_detail_item_title "}>
              هزینه کالا
            </div>
            <div className={"order_detail_item_value "}> 
            <IRT amount={order?.total}/></div>
          </div>
         
          <div className={"order_detail_item "}>
            <div className={"order_detail_item_title "}>مجموع مبلغ پرداختی</div>
            <div className={"order_detail_item_value "}><IRT amount={order?.total}/></div>
          </div>
          <div className={"order_detail_item "}>
            <div className={"order_detail_item_title "}>کارمزد سایت</div>
            <div className={"order_detail_item_value " + " " +  "site_fee "}>
                 <IRT amount={(order?.total/10 || 0)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default OrderDetail;