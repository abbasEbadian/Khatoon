import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import ContactUsOptions from '../../components/Ui/ContactUsOptions';
import styles from '../../styles/ContactUsOptions.module.css'
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Icon from '../../static/img/icon/image16.png'
import Image from 'next/image'

function ContactUs() {

  const [age, setAge] = React.useState('');
  const [data, setData] = React.useState({
    "name": "",
    "phone": "",
    "age": ""
  })

  const handleForm = (value, target) => {
    setData({
      ...data,
      [target]: value
    })
  }

  const _submit = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }
  return (

    <section>
      <Head><title>پرسش پاسخ | گیفت شاپ</title></Head>
      <div className="width_custom container">
        <div className="row py-5 ">
          <div className='card_style px-5'>
            <div className="col-12 contact-us m-auto text-right">
              {/* <h5 className="text-head text-right py-4"> */}
              <TextHeadTiltle underline_dec={true} title="سوالات پیج" description="از این راه ها میتوانید با ما در ارتباط باشید..." />
            </div>
            <div className="col-12">
              <div className={styles.ContactUsOptions + " " + " row gap-3 justify-content-between"}>
                <ContactUsOptions title="چت آنلاین" details="کلیک کنید" />
                <ContactUsOptions title="ایمیل" details="info@site.com" />
                <ContactUsOptions title="واتساپ" details="09121234567" />
                <ContactUsOptions title="سامانه پیامکی" details="300021545" />
                <ContactUsOptions title="تماس تلفنی" details="09121234567" />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-7">
                <form onSubmit={_submit}>
                  <div className='row justify-content-between mt-5'>
                    <div className="col-6 py-4 ps-0">
                      <TextField sx={{ width: '100%' }}
                        id="outlined-textarea"
                        label="نام و نام خانوادگی"
                        multiline
                        value={data.name}
                        onChange={e => handleForm(e.target.value, "name")}
                      />
                    </div>
                    <div className="col-6 py-4 ">
                      <TextField sx={{ width: '100%', inputMode: 'numeric', pattern: '[0-9]*' }}
                        id="outlined-textarea"
                        label="تلفن همراه"
                        type="number"
                        multiline
                        value={data.phone}
                        onChange={e => handleForm(e.target.value, "phone")}
                      />
                    </div>
                    <div className="col-6 py-4 ps-0">
                      <TextField sx={{ width: '100%' }}
                        id="outlined-textarea"
                        label="استان محل سکونت"
                        multiline
                      />
                    </div>
                    <div className="col-6 py-4">
                      <TextField sx={{ width: '100%' }}
                        id="outlined-textarea"
                        label="شهر محل سکونت"
                        multiline
                      />
                    </div>
                    <div className="col-6 py-4 ps-0">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">-- انتخاب کنید --</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={data.age}
                          label="Age"
                          onChange={e => handleForm(e.target.value, 'age')}
                        >
                          <MenuItem value={10}>پشتیبانی</MenuItem>
                          <MenuItem value={20}>مالی</MenuItem>
                          <MenuItem value={30}>اداری</MenuItem>
                        </Select>
                      </FormControl>

                    </div>
                    <div className="col-6 py-4">
                      <TextField sx={{ width: '100%' }}
                        id="outlined-textarea"
                        label="موضوع پیام"
                        multiline
                      />
                    </div>
                    <div className="col-12 py-4 ps-0">
                      <TextField sx={{ width: '100%' }}
                        id="outlined-multiline-static"
                        label="متن پیام"
                        multiline
                        rows={4}
                        placeholder="متن پیام خود را وارد کنید" />
                    </div>
                    <div className="col-12 py-4">
                      <Stack spacing={2} direction="row">
                        <Button variant="contained" style={{ backgroundColor: "#E96962" }}>ثبت و ارسال پیام</Button>
                      </Stack>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-5">
                <Image src={Icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ContactUs