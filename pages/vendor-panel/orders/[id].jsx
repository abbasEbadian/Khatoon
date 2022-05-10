import React from "react";
import Image from "next/image";

import UserPanelBase from "../../../components/UserPanelBase";
import styles from "../../../styles/orderPage.module.css";
import { Button } from "@mui/material";
import { LocationCity, Place, Source } from "@mui/icons-material";

function Order() {
  return (
    <UserPanelBase active={"pendin_orders"}>
      <section>
        <div className={`${styles.customer_details} ${styles.order_card}`}>
          <div className={styles.customer_details_head}>
            <div className="d-flex align-items-center">
              <Image
                src="/static/img/icon/image 31.svg"
                width={100}
                height={100}
                alt=""
              />
              <div>
                <span>نام مشتری</span>
                <h4>علی رضایی</h4>
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderRadius: "15px",
                }}
              >
                گفت و گو با مشتری
              </Button>
            </div>
          </div>
          <div className={styles.customer_details_foot}>
            <div className={styles.customer_address}>
              <p>
                <Place color="disabled" /> آدرس گیرنده
              </p>
              <p>
                لورم ایپسوم تولید کننده متن نامفهوم جهت کمک به برنامه نویسان
                عزیز میباشید
              </p>
            </div>
            <div className={styles.customer_postal_code}>
              <p>
                <Source color="disabled" /> کد پستی{" "}
              </p>
              <p>9321455555</p>
            </div>
          </div>
        </div>

        <div className={`${styles.order_detail} ${styles.order_card}`}>
          <div className={styles.order_detail_item}>
            <div className={styles.order_detail_item_title}>
              تاریخ ثبت سفارش
            </div>
            <div className={styles.order_detail_item_value}>11 مهر 1398</div>
          </div>
          <div className={styles.order_detail_item}>
            <div className={styles.order_detail_item_title}>مهلت ارسال</div>
            <div className={styles.order_detail_item_value}>11 مهر 1398</div>
          </div>
          <div className={styles.order_detail_item}>
            <div className={styles.order_detail_item_title}>روش ارسال</div>
            <div className={styles.order_detail_item_value}>تیپاکس</div>
          </div>
          <div className={styles.order_detail_item}>
            <div className={styles.order_detail_item_title}>هزینه ی ارسال</div>
            <div className={styles.order_detail_item_value}>123000</div>
          </div>
        </div>
        <div className={`${styles.order} ${styles.order_card}`}>
          <div className="d-flex p-5 align-items-center">
            
            <Image
              src="https://statics.basalam.com/public/users/4q0y2/04-21/6KJLhxsWDe6oDnwDrOowGRhK0Ap9ef4XiAlxKVHB2ffgHJvlhx.jpg_256X256X70.jpg"
              width={100}
              height={100}
              xs={{
                  borderRadius: '10px'
              }}
              alt=""
            />
            <div className="mx-3">
              <h4>دفتر جلددار صحافی دوختی پارچه ای</h4>
              <div> رنگ بندی: قرمز</div>
              <div>سایزبندی متوسط </div>
            </div>
          </div>
        </div>
      </section>
    </UserPanelBase>
  );
}
export default Order;
