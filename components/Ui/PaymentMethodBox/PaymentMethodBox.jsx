import React from 'react'
import styles from './PaymentMethodBox.module.scss';
import Image from 'next/image'

function PaymentMethodBox({ item }) {
    return (
        <div className={styles.payment_method}>
            <Image src={item.icon} width="100px" height="100px" objectFit="contain" />
            <h3 className={styles.payment_method_title}>{item.title}</h3>
            <div>
                {item.description}
            </div>
            {
                item.amount ?
                    <div>اعتبار  فعلی : {item.amount} تومان</div> : null
            }
        </div>
    )
}

export default PaymentMethodBox