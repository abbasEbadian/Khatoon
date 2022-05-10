import React from 'react'
import SuggestSlideItem from './subHome/SuggestSlideItem'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from '../../styles/Home.module.scss'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from "next/link";

function SuggestSlider({children, className}) {
    return (
        <div className={style.suggest_slider + " " + className}>
            <div className="d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
                <div >
                    <h3 className="title text-gold">پیشنهاد مخصوص سرآشپز!</h3>
                    <small>محصولاتی که به سلیقه تون میخوره :) !</small>
                </div>
                <Link href="/products">
                    <a className={"btn bg-white rounded mt-4 mt-lg-0 " + style.show_all_link}>
                        مشاهده همه
                        <ChevronLeftIcon/>
                    </a>
                </Link>
            </div>
            <div className="row p-0">
            <Swiper
                spaceBetween={50}
                slidesPerView={10}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={"px-2  suggest_swiper"}
                // modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween:10
                    },
                    920:{
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    1200:{
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    1440:{
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                    
                }}
            >
            {Array.from({ length: 8}).map((item , i)=>{
                return <SwiperSlide  key={item} >
                        <SuggestSlideItem />
                    </SwiperSlide>
            })}
        </Swiper>
            </div>

        </div>
    )
}

export default SuggestSlider