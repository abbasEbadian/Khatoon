import React from 'react'
import { useState } from "react";
import Image from 'next/image'
import styles from '../../styles/QuestionBox.module.css'
// import BgBox from '../../../static/img/bg-pic/Group2254.png'
function QuestionBox() {
  return (
    <div className={styles.QuestionBox + " mt-5 " }>
      <div>
        <h6>جواب سوالتون رو پیدا نکردین؟</h6>
        <p>
          لورم ایپسوم متن ساختگی با تولید سا  لازم است، و برای شرایط فعلی ای متنوع با هدف بهبودلورم ایپسوم متن ساختگی با تولید سا  لازم است،
        </p>
        <div className={styles.NavyButton}>
          <button>
            تماس با ما
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionBox