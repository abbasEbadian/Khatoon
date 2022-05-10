import React from 'react'
import styles from '../../styles/Home.module.scss'

function IntroSlider() {
  return (
    <section className={styles.intro_slider}>
        <div className={styles.intro_slider_1 + " shadow"}></div>
        <div className={styles.intro_slider_2 + " shadow"}></div>
        <div className={styles.intro_slider_3 + " shadow"}></div>
    </section>
  )
}

export default IntroSlider