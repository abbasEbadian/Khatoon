import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import style from '../../../styles/Home.module.scss'
import InstagramIcon from '@mui/icons-material/Instagram';

function Instagram() {
  return (
    <section className="container py-5">
        <div className="row">
            <div className="col-md-9 col-12 d-flex justify-content-center text-white flex-column align-items-start">
                <p>ما را در اینستاگرام دنبال کنید</p>
                <Typography className="my-4" fontSize={"11px"}>برای اینکه از آخرین اخبار و جشنواره‌های تخفیفی ما باخبر باشید، اینستاگرام خاتون زیبا رو دنبال کنید.</Typography>
                <a href="https://instagram.com" className="btn bg-white d-flex align-items-center">
                    <InstagramIcon ></InstagramIcon>
                    <Typography fontSize={"12px"} sx={{paddingInline: "8px"}}>
                        برای ورود کلیک کنید
                    </Typography>
                </a>
            </div>
            <div className="col-3" >
                
            </div>
        </div>
        <div className={style.insta_image + " d-none d-md-block"}>
            <Image  src={"/images/phone.png"} alt="insta" width="200" height="300"/>
        </div>
    </section>
  )
}

export default Instagram