import React from 'react'
import Head from "next/head";
import ContactUsOptions from '../../components/Ui/ContactUsOptions';

function ContactUs() {
  return (
    <section>
      <Head><title>پرسش پاسخ | گیفت شاپ</title></Head>
      <div className=" container">
        <div className="row py-5">
          <div>
            <div className="col-12 contact-us m-auto text-right px-5">
              {/* <h5 className="text-head text-right py-4"> */}
              <h5 className="text_head text-right py-4">
                سوالات پیج
                <div className="underline_dec">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </h5>
              <p className="text-right pb-5">
                پرتکرارترین سوالات رو به همراه پاسخ اونها در     این قسمت می‌توانید مشاهده کنید...
              </p>
            </div>
            <div className="row gap-3 justify-content-center">
              <ContactUsOptions title="چت آنلاین" details="کلیک کنید" />
              <ContactUsOptions title="چت آنلاین" details="کلیک کنید" />
              <ContactUsOptions title="چت آنلاین" details="کلیک کنید" />
              <ContactUsOptions title="چت آنلاین" details="کلیک کنید" />
              <ContactUsOptions title="چت آنلاین" details="کلیک کنید" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs