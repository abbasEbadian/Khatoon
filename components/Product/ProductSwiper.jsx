import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {BASE_URL} from '../../redux/endpoints'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App({product}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-swiper"
      >
         <SwiperSlide>
          <img src={BASE_URL + product.image} alt="image main"  />
        </SwiperSlide>
        {product.image_1? <SwiperSlide>
          <img src={BASE_URL + product.image_1} alt="image 1"  />
        </SwiperSlide>:null}
        {product.image_2? <SwiperSlide>
          <img src={BASE_URL + product.image_2} alt="image 2"  />
        </SwiperSlide>:null}
        {product.image_3? <SwiperSlide>
          <img src={BASE_URL + product.image_3} alt="image 3"  />
        </SwiperSlide>:null}
        {product.image_4? <SwiperSlide>
          <img src={BASE_URL + product.image_4} alt="image 4"  />
        </SwiperSlide>:null}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-swiper2"
      >
        <SwiperSlide>
          <img src={BASE_URL + product.image} alt="image main"  />
        </SwiperSlide>
        {product.image_1?<SwiperSlide>
          <img src={BASE_URL + product.image_1} alt="image 1"  />
        </SwiperSlide>:null}
        {product.image_2?<SwiperSlide>
          <img src={BASE_URL + product.image_2} alt="image 2"  />
        </SwiperSlide>:null}
        {product.image_3?<SwiperSlide>
          <img src={BASE_URL + product.image_3} alt="image 3"  />
        </SwiperSlide>:null}
        {product.image_4?<SwiperSlide>
          <img src={BASE_URL + product.image_4} alt="image 4"  />
        </SwiperSlide>:null}
       
     
      </Swiper>
    </>
  );
}
