import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

function SlideCard() {
    const slideImages = [
        {
          url: "../../static/img/imgs/12590.jpg",
          caption: 'Slide 1'
        },
        {
          url: "../../static/img/imgs/13655.jpg",
          caption: 'Slide 2'
        },
        {
          url: "../../static/img/imgs/13970116d.jpg",
          caption: 'Slide 3'
        },
      ];
    return (
        <div className="col-md-12 col-12 card mb-4 mt-4">
           <div className="slide-container">
                <Slide height="30%">
                {slideImages.map((slideImage, index)=> (
                    <div className="each-slide" key={index}>
                    <Image src={slideImage.url} class="myimg rounded" alt={slideImage.caption}/>
                    </div>
                ))} 
                </Slide>
            </div>
        </div>
    )
}

export default SlideCard