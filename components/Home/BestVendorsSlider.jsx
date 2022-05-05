import React from 'react'
import BestVendorSlide from './subHome/BestVendorSlide'
import { Swiper, SwiperSlide } from 'swiper/react';
import style from '../../styles/Home.module.scss'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';

function BestVendorsSlider() {
  return (
    <div className={style.best_vendors_slider}>
        <h6 className="ps-5 text-white mb-4">غرفه های جادویی</h6>
         <Swiper
            spaceBetween={50}
            slidesPerView={10}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={"px-5 best_vendor_swiper"}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                920:{
                    slidesPerView: 6,
                    spaceBetween: 40
                },
                1200:{
                    slidesPerView: 8,
                    spaceBetween: 40
                },
                1440:{
                    slidesPerView: 10,
                    spaceBetween: 50
                },
                
            }}
        >
        {Array.from({ length: 15 }).map((item , i)=>{
            return <SwiperSlide  key={item} >
                    <BestVendorSlide className={style.best_vendor_slide}/>
                </SwiperSlide>
        })}
        </Swiper>
    </div>
  )
}

export default BestVendorsSlider