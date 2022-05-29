import React from 'react'
import BoxItem from '../Ui/BoxItem/BoxItem'
import style from '../../styles/Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
function NewProducts({products}) {
    
    
    return (
        <div className={style.new_products_container}>
            <h6 className={"mb-4 text-primary"}>تر و تازه</h6>
            <div className="d-flex justify-content-between flex-nowrap">
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={"px-2 mt-4 suggest_swiper"}
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
                        slidesPerView: 5,
                        spaceBetween: 15
                    },
                    1440:{
                        slidesPerView: 6,
                        spaceBetween: 20
                    },
                    
                }}
            >
            {products.map((item, idx)=>{
                        return <SwiperSlide className="" key={idx}>
                            <BoxItem  item={item} />
                        </SwiperSlide>
                    })}
            </Swiper>
                
            </div>
        </div>
    )
}

export default NewProducts