import React, { useRef, useState } from "react";
import SwiperCore, {
    Navigation
} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './BoxItems.module.scss';
import BoxItem from '../BoxItem/BoxItem';
import "swiper/css";
import "swiper/css/navigation";
import BlogItem from "../BlogItem";
SwiperCore.use([Navigation]);

function BoxItems({ items, title, boxClasses, type }) {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div className={styles.box + ' ' + boxClasses}>
            <h4 className={styles.box_title}>{title}</h4>
            <div className='row'>
                <Swiper navigation={true} className="mySwiper"
                    slidesPerView={type == 'product' ? 5 : 4} spaceBetween={20}
                    breakpoints={{
                        0: {
                          width: 0,
                          slidesPerView: 2,
                        },
                        768: {
                          width: 768,
                          slidesPerView: 3,
                        },
                        1200: {
                          width: 1200,
                          slidesPerView: 5,
                        },
                      }}
                >
                    {
                        items?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    {
                                        type == 'product' ?
                                            <BoxItem item={item} key={index} /> :
                                            <BlogItem item={item} key={index} />
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                    <div ref={navigationPrevRef} />
                    <div ref={navigationNextRef} />
                </Swiper>
            </div>
        </div>
    )
}

BoxItems.defaultProps = {
    type: 'product',
    items: [],
    title: 'متن پیشفرض',
    boxClasses: ''
}

export default React.memo(BoxItems)

