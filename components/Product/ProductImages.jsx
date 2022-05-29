import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import { Box } from '@mui/material';
import {product_imlink} from '../utils'

export default function QuiltedImageList({ product=null, attributes, attributeValues , initData=undefined}) {
    const [images, setImages] = React.useState({
        image: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
    })
    const image = React.useRef()
    const image1 = React.useRef()
    const image2 = React.useRef()
    const image3 = React.useRef()
    const image4 = React.useRef()


    const handleImageChange = (e)=>{
        const [file] = e.target.files
        if(file)
            setImages({...images, [e.target.name]: URL.createObjectURL(file)})
    }
    React.useEffect(()=>{
        if(initData)
            setImages({
                image: initData.image?  product_imlink(initData.image) : null,
                image1: initData.image1? product_imlink(initData.image1) : null,
                image2: initData.image2? product_imlink(initData.image2) : null,
                image3: initData.image3? product_imlink(initData.image3) : null,
                image4: initData.image4? product_imlink(initData.image4) : null,
            })
    }, [initData])
    return (
        <Box className="d-flex flex-wrap imageboxes " sx={{ minHeight: 250}}>
            <div className="col-lg-6 col-12">
                <div onClick={e=>image.current.click()} className=" imagebox">
                    {
                    images.image?
                        <Image src={images.image} objectFit="cover" layout="fill" alt='main' />
                    :
                        <div className="">تصویر شاخص</div>
                    }
                    <input type="file" accept="image/*" capture className="d-none" ref={image} name="image" onChange={handleImageChange}/>
                </div>
            </div>
            <div className="col-lg-6 col-12 d-flex flex-wrap">
                <div className=" col-md-6 col-12">
                    <div onClick={e=>image1.current.click()} className=" imagebox">
                        {
                         images.image1?
                            <Image src={ images.image1} objectFit="cover" layout="fill" alt='main' />
                        :
                            <div className="">تصویر 1</div>
                        }
                        <input type="file" className="d-none" ref={image1} name="image1" onChange={handleImageChange}/>
                    </div>
                </div>
                <div className=" col-md-6 col-12">
                    <div onClick={e=>image2.current.click()} className=" imagebox">
                        {
                        images.image2?
                            <Image src={ images.image2} objectFit="cover" layout="fill" alt='main' />
                        :
                            <div className="">تصویر 2</div>
                        }
                        <input type="file" className="d-none" ref={image2} name="image2" onChange={handleImageChange}/>
                    </div>
                </div>
                <div className=" col-md-6 col-12">
                    <div onClick={e=>image3.current.click()} className=" imagebox">
                        {
                         images.image3?
                            <Image src={ images.image3} objectFit="cover" layout="fill" alt='main' />
                        :
                            <div className="">تصویر 3</div>
                        }
                        
                        <input type="file" className="d-none" ref={image3} name="image3" onChange={handleImageChange}/>
                    </div>
                </div>
                <div className=" col-md-6 col-12">
                    <div onClick={e=>image4.current.click()} className="h-100 w-100 d-flex align-items-center justify-content-center imagebox">
                        {
                         images.image4?
                            <Image src={ images.image4} objectFit="cover" layout="fill" alt='main' />
                        :
                            <div className="">تصویر 4</div>
                        }
                        
                        <input type="file" className="d-none" ref={image4} name="image4" onChange={handleImageChange}/>
                    </div>
                </div>
                
            </div>
        </Box>
    );
}
