import React from 'react'
import Image from 'next/image';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './BasketItem.module.scss'
import Link from 'next/link';

function BasketItem({ klass, item, increment, decrement, removeItem }) {
  const [counter, setCounter] = React.useState(1)


  const handleIncrement = () => {
    setCounter(counter => counter + 1);
    increment(item.id)
  };

  const handleDecrement = () => {
    setCounter(counter => counter - 1);
    decrement(item.id)
  };

  const displayCounter = counter > 0;
  return (
    <div className={`${styles.basket__item + ' ' + klass}`}>
      <div className='row'>
        <div className='col-12 col-md-2'>
          <div style={{ height: "100%", width: "100%" }}>
            <Link href="">
              <a>
                <Image src='/static/img/imgs/image 10.png' width="100%" height="100%" layout="responsive" objectFit="cover"></Image>
              </a>
            </Link>
          </div>
        </div>
        <div className='col-12 col-md-10'>
          <div>
            <Link href="#">
              <a>
                بلوز شلوار مخمل طرح پوست ماری
              </a>
            </Link>
            <div className={styles.basket__item_detail}>
              <div>
                <Image src="/static/img/icon/Shape (2).png" width="15"
                  height="15"
                  objectFit='cover' />
              </div>
              <div >فروشنده: پوشاک کده نیل</div>

            </div>
            <div className={styles.basket__item_detail}>
              <div>
                <Image src="/static/img/icon/medal.png" width="15"
                  height="15"
                  objectFit='cover' />
              </div>
              <div >ضمانت: کار با کیفیت جنس اصل</div>

            </div>
            <div className={styles.basket__item_detail}>
              <div>
                <Image src="/static/img/icon/send.png" width="15"
                  height="15"
                  objectFit='cover' />
              </div>
              <div >نحوه ارسال: پست سفارشی</div>

            </div>
            <div className={styles.basket__item_foot}>
              <div className={styles.basket__item_counter}>
                <ButtonGroup size="small" aria-label="small outlined button group" sx={{ direction: 'ltr', marginTop: '.5rem', color: "#fff", borderColor: "gray" }}   >
                  <Button onClick={handleIncrement}>+</Button>
                  {displayCounter && <Button >{counter}</Button>}
                  {displayCounter && <Button disabled={counter < 2} onClick={handleDecrement}>-</Button>}
                </ButtonGroup>
                <a style={{ cursor: 'pointer' }} onClick={() => removeItem(item.id)}>
                  <Image src="/static/img/icon/trash.png" width="15"
                    height="15"
                    objectFit='cover' />
                </a>
              </div>
              <div className={styles.basket__item_price}>
                <div>
                  <span style={{ marginLeft: '.3rem' }}>244,000</span>
                  <span>تومان</span>
                </div>
                <div className={styles.basket__item_price_discount}>
                  244,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketItem