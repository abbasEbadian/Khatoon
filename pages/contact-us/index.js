import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import ContactUsOptions from '../../components/Ui/ContactUsOptions';
import styles from '../../styles/ContactUsOptions.module.css'
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function ContactUs() {

  const [age, setAge] = React.useState('');
  const [data, setData] = React.useState({
    "name": "",
    "phone": "",
    "age": ""
  }) 

  const handleForm = (value, target)=>{
    setData({
      ...data,
      [target]: value
    })
  }

  const _submit = (e)=>{
    e.stopPropagation()
    e.preventDefault()


  }


  return (

    <section>
      <Head><title>پرسش پاسخ | گیفت شاپ</title></Head>
      <div className=" container">
        <div className="row py-5">
          <div>
            <div className="col-12 contact-us m-auto text-right px-5">
              {/* <h5 className="text-head text-right py-4"> */}
              <TextHeadTiltle underline_dec={true} title="سوالات پیج" description="پرتکرارترین سوالات رو به همراه پاسخ اونها در     این قسمت می‌توانید مشاهده کنید" />
            </div>
            <div className={styles.ContactUsOptions + " " + " row gap-3 justify-content-center"}>
              <ContactUsOptions title="چت آنلاین" details="کلیک کنید" />
              <ContactUsOptions title="ایمیل" details="info@site.com" />
              <ContactUsOptions title="واتساپ" details="09121234567" />
              <ContactUsOptions title="سامانه پیامکی" details="300021545" />
              <ContactUsOptions title="تماس تلفنی" details="09121234567" />
            </div>
            <form onSubmit={_submit}></form>
            <div className='row justify-content-between col-7'>
              <div className="col-6">
                <TextField sx={{ width: '100%' }}
                  id="outlined-textarea"
                  label="نام و نام خانوادگی"
                  multiline
                  value={data.name}
                  onChange={e=>handleForm(e.target.value, "name")}
                />
              </div>
              <div className="col-6">
                <TextField sx={{ width: '100%' }}
                  id="outlined-textarea"
                  label="تلفن همراه"
                  multiline
                  value={data.phone}
                  onChange={e=>handleForm(e.target.value, "phone")}
                />
              </div>
              <div className="col-6">
                <TextField sx={{ width: '100%' }}
                  id="outlined-textarea"
                  label="استان محل سکونت"
                  multiline
                />
              </div>
              <div className="col-6">
                <TextField sx={{ width: '100%' }}
                  id="outlined-textarea"
                  label="شهر محل سکونت"
                  multiline
                />
              </div>
              <div className="col-6">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">-- انتخاب کنید --</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.age}
                    label="Age"
                    onChange={e=>handleForm(e.target.value, 'age' )}
                  >
                    <MenuItem value={10}></MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

              </div>
              <div className="col-6">
                <TextField sx={{ width: '100%' }}
                  id="outlined-textarea"
                  label="موضوع پیام"
                  multiline
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ContactUs