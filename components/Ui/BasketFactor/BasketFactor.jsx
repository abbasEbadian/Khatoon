import React from 'react'
import styles from './BasketFactor.module.scss';
import Button from '@mui/material/Button';

function BasketFactor() {
  return (
    <div className={styles.factor}>
    <ul>
      <li className={styles.factor__item}>
        <span>قیمت کالاها: </span>
        <span>894,000 تومان </span>
      </li>
      <li className={styles.factor__item}>
        <span>مجموع تخفیفات: </span>
        <span className='text-danger'>162,000 تومان </span>
      </li>
      <li className={styles.factor__item}>
        <span>هزینه ی ارسال </span>
        <span>بر اساس تنظیمات غرفه دار</span>
      </li>
      <li className={styles.factor__item}>
        <span>مجموع سبد خرید: </span>
        <span>162,000 تومان </span>
      </li>
    </ul>
    <div className='d-flex justify-content-center'>
      <Button fullWidth variant="contained" color="error">تکمیل فرایند خرید</Button>
    </div>
  </div>
  )
}

export default BasketFactor