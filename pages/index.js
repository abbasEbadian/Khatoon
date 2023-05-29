import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import IntroSlider from '../components/Home/IntroSlider'
import TimerSlider from '../components/Home/TimerSlider'
import Facilities from '../components/Home/Facilities'
import Contact from '../components/Home/Contact'
import BestVendorsSlider from '../components/Home/BestVendorsSlider'
import NewProducts from '../components/Home/NewProducts'
import SuggestSlider from '../components/Home/SuggestSlider'
import Instagram from '../components/Home/subHome/Instagram'
import TimerTimer from '../components/Home/subHome/TimerTimer'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import * as e from '../redux/endpoints'
export default function Home({handleLoginOpen, timerSliderProducts=[], newProducts=[], suggestSliderProducts=[], magicSliderProducts=[], markets=[]}) {
  const router = useRouter();
  const {configs} = useSelector(s=>s.main)
  const time = new Date();
  time.setSeconds(time.getSeconds() + 66600); // 10 minutes timer

  const {next} = router.query


  React.useEffect(()=>{
    if(next) handleLoginOpen()
  }, [next])


  return (
    <div className='d-flex align-items-center justify-content-center overflow-hidden'>
      <Head>
        <title>{configs?.website?.index_title??"صفحه اصلی | خاتون زیبا"}</title>
        <meta name="description" content={configs?.website?.index_title??"خاتون زیبا"} />
      </Head>

      <section className="w-100">
        <section className="container_custom ">
          <IntroSlider config={configs?.website}></IntroSlider>
        </section>

        <div className={styles.devider}></div>

        <section className="container_custom ">
          <TimerSlider className="bg-primary" products={timerSliderProducts}>
            <div className="d-flex align-items-center justify-content-evenly flex-column h-100">
              <Image src="/images/sarzamin.png" alt="sarzamin" width={130} height={100}/>
              <TimerTimer expiryTimestamp={time} />
            </div>
          </TimerSlider>
        </section>

        <div className={styles.devider}></div>

        <section className="container_custom ">
          <Facilities/>
        </section>

        <div className={styles.devider}></div>

        <section className="container_custom ">
          <TimerSlider className="bg-secondary" products={magicSliderProducts}>
          <div className="d-flex align-items-center justify-content-evenly flex-column h-100">
              <Image src="/images/magic.png" alt="sarzamin" width={130} height={200}/>
              <Link href="products">
                <a className="btn btn-outline bg-none border-white text-white">
                  دیدن همه
                </a>
              </Link>
            </div>
       
 
          </TimerSlider>
        </section>
          
        <div className={styles.devider}></div>

        <section >
          <BestVendorsSlider markets={markets}/>
        </section>
        <div className={styles.devider}></div>

        <section className={styles.new_products_parent + " container_custom"}>
          <NewProducts products={newProducts}/>
        </section>

        <div className={styles.devider}></div>

        <section className={ " container_custom"}>
          <SuggestSlider  className="bg-secondary" products={suggestSliderProducts}/>
        </section>

        <div className={styles.devider}></div>
        <div className={styles.devider}></div>
        <section className={ styles.instagram_container}>
          <Instagram />
        </section>


        <div className={styles.devider}></div>

        <section className={ " container_custom"}>
          <Contact />
        </section>
      </section>
      


    </div>
  )
}
// export async function getServerSideProps (){
//   let result = {}
//   try{
//       const res        = await fetch(e.GET_INDEX_PRODUCTS)
//       result   = await  res.json()
//       console.log(result)
//   }
//   catch(e){
//       console.log(e)
//   }
//   return {
//       props: {
//           timerSliderProducts: result?.timerSliderProducts || [],
//           newProducts: result?.newProducts || [] ,
//           suggestSliderProducts: result?.suggestSliderProducts || [] ,
//           magicSliderProducts: result?.magicSliderProducts || [] ,
//           markets: result?.markets || [] ,

//       }
//   }
// }