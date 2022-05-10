import React from 'react'
import styles from '../../styles/SVG.module.scss'
function SVGBoxes() {
  return (
    <div className={styles.svg_boxes}>
      {/* Top-right */}
      <div className={styles.__box1}></div>
      {/* //Top-left */}
      <div className={styles.__box2}></div>

    </div>
  )
}

export default SVGBoxes