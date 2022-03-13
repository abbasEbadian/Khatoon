import React from 'react'
import { useState } from "react";
import Image from 'next/image'
import styles from '../../styles/Rules.module.css'
import Head from "next/head";
import Shape from "../../static/img/icon/Shape.png"
import ShapeClose from "../../static/img/icon/Shape_(1).png"
function Accordian({item, idx }) {
  const [selected, setSelected] = useState(false);
  const toggle = (i) => {
    setSelected(prevSelect => !prevSelect)
    // console.log(i);
    // if (selected === i) {
    //   return setSelected(false);
    // }
    // setSelected(i);
  };
  let img = selected ? <Image src={ShapeClose}/> :   <Image src={Shape}/> 
  console.log(img);
  return (
    <div className={styles.item} key={idx}>
    <div className={styles.title} onClick={() => toggle(idx)}>
      <h5>{item.question}</h5>
      <span>{img}</span>
    </div>
    {/* <div className={selected === i ? 'content show' : 'content'}</div> */}
    <div
      className={selected  ? styles.content + " " + styles.show : styles.content}
    >
      {item.answer}
    </div>
  </div>
  )
}

export default Accordian