import React from 'react'
import Facility from './subHome/Facility'
import style from '../../styles/Home.module.scss'
import {useSelector} from 'react-redux'
function Facilities() {
  const items = useSelector(s=>s.main.categories)

  return (
    <div className={style.facilities}>
            {items.map((item, i)=>{
                return !item.parent_id &&  <Facility key={item.id} img_src={`/images/cards/facility (${i+1}).png`} text={item.persian_name} link={item.url}/>
            })}
    </div>

  )
}

export default Facilities