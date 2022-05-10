import Image from 'next/image'
import React from 'react'
import style from '../../../styles/Home.module.scss'
import Link from 'next/link'
function Facility({img_src, text, link}) {
  return (
    <div className={style.facility}>
      <Link href={"shop/category/" + link}>
        <a>
          <Image src={img_src} alt="icon" width="50" height="50"/>
          <span>{text}</span>
        </a>
      </Link>
    </div>
  )
}

export default Facility