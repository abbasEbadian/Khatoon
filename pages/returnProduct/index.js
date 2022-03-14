import React from "react";
import { useState } from "react";
import Image from 'next/image'
import styles from '../../styles/returnProduct.module.css'
import Head from "next/head";
import Accordian from "../../components/elements/Accordian";
import QuestionBox from "../../components/Ui/QuestionBox";
import ContactUsStepItem from "../../components/Ui/ContactUsStepItem";
import ContactUsQuestionItem from "../../components/Ui/ContactUsQuestionItem";

function returnProduct() {

  return (
    <>
      <section>
        <Head><title>پرسش پاسخ | گیفت شاپ</title></Head>
        <div className={styles.width_custom + " container"}>
          <div className="row py-5">
            {/* Add Top Header */}
            <div className="row content">
              <div className="col-12 col-md-8">
                <div className={styles.content__text}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="content__img" style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <Image src="/static/img/imgs/return-box 1.png" layout='fill'
                    objectFit='contain' />
                </div>
              </div>
            </div>

            <div className={styles.steps}>
              <h4 className={styles.stepsHeader}>کالا را چطور ارسال کنیم؟</h4>
              <div className="row mt-5">
                <div className="col-12 col-md-4 d-flex justify-content-center">
                  <ContactUsStepItem step={'۱'} text=" قبل از ارسال کالا لطفا با همکاران ما در واحد فروش هماهنگ کنید"
                    icon="/static/img/imgs/image 20.png"
                  />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                  <ContactUsStepItem step={'۲'} text=" قبل از ارسال کالا لطفا با همکاران ما در واحد فروش هماهنگ کنید"
                    icon="/static/img/imgs/image 22.png"
                  />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                  <ContactUsStepItem step={'۳'} text=" قبل از ارسال کالا لطفا با همکاران ما در واحد فروش هماهنگ کنید"
                    icon="/static/img/imgs/image 23.png"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-4 d-flex justify-content-center mt-5">
                  <ContactUsStepItem step={'۴'} text=" قبل از ارسال کالا لطفا با همکاران ما در واحد فروش هماهنگ کنید"
                    icon="/static/img/imgs/image 24.png"
                  />
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center mt-5">
                  <ContactUsStepItem step={'۵'} text=" قبل از ارسال کالا لطفا با همکاران ما در واحد فروش هماهنگ کنید"
                    icon="/static/img/imgs/image 25.png"
                  />
                </div>
              </div>
            </div>


            {/* Most Questions */}
            <div>
              <h4 className={styles.question__header}>
                چندتا سوال و جواب برای بازگشت کالا
              </h4>
              <div>
                <ContactUsQuestionItem
                  klass="mb-3"
                  title="۱. هنوز محصولم به دستم نرسیده, چه کنم"
                  answer=" به محض اینکه غرفه دار محصول سفارشی شما را آماده کند و بفرستد, به شما کد رهگیری پستی میدهد. با درج آن کد پستی در سامانه شرکت پست از وضعیت بسته پستی خبردار می شوید" />
                <ContactUsQuestionItem
                  klass="mb-3"
                  title="۲. هنوز محصولم به دستم نرسیده, چه کنم"
                  answer=" به محض اینکه غرفه دار محصول سفارشی شما را آماده کند و بفرستد, به شما کد رهگیری پستی میدهد. با درج آن کد پستی در سامانه شرکت پست از وضعیت بسته پستی خبردار می شوید" />
                <ContactUsQuestionItem
                  klass="mb-3"
                  title="۳. هنوز محصولم به دستم نرسیده, چه کنم"
                  answer=" به محض اینکه غرفه دار محصول سفارشی شما را آماده کند و بفرستد, به شما کد رهگیری پستی میدهد. با درج آن کد پستی در سامانه شرکت پست از وضعیت بسته پستی خبردار می شوید" />
                <ContactUsQuestionItem
                  klass="mb-3"
                  title="۴. هنوز محصولم به دستم نرسیده, چه کنم"
                  answer=" به محض اینکه غرفه دار محصول سفارشی شما را آماده کند و بفرستد, به شما کد رهگیری پستی میدهد. با درج آن کد پستی در سامانه شرکت پست از وضعیت بسته پستی خبردار می شوید" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      </section>
    </>
  );
}


export default returnProduct;
