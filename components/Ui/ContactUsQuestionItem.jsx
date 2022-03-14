import React from 'react'
import styles from '../../styles/returnProduct.module.css'

function ContactUsQuestionItem({title, answer, klass}) {
  return (
    <div className={styles.question__item + ' ' + klass}>
    <div className="question__title">
      {title}
    </div>
    <div className={styles.question__answer}>
      {answer}
    </div>
  </div>
  )
}

export default ContactUsQuestionItem