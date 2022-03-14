import React from 'react'
import styles from '../../styles/returnProduct.module.css'
import Image from 'next/image'

function ContactUsStepItem({step, text, icon}) {
  return (
    <div className={styles.stepItem}>
    <div className={styles.stepItem__number}>{step}</div>
    <div className={styles.stepItem__text}>
      {text}
    </div>
    <div className={styles.stepItem__icon}>
      <Image src={icon}
        width="100"
        height="100"
        objectFit='contain' />
    </div>
  </div>
  )
}

export default ContactUsStepItem