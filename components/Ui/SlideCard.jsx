import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import Image from 'next/image';

function SlideCard() {
    const slideImages = [
        {
          url: "/../../static/img/imgs/12590.jpg",
          caption: 'Slide 1'
        },
        {
          url: "/../../static/img/imgs/13655.jpg",
          caption: 'Slide 2'
        },
       
      ];
    return (
        <div className="col-md-12 col-12 card mb-4 mt-4">
           <div className="slide-container">
                <Slide height="30%">
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>

                    <Image src={slideImage.url}className="myimg rounded" alt={slideImage.caption} layout="fill"/>

                    </div>
                ))} 
                </Slide>
            </div>
        </div>
    )
}

export default SlideCard