import React from 'react'
import { useState } from 'react';
import Head from "next/head";
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle';
import BoxAddress from '../../components/Ui/BoxAddress';
import styles from '../../styles/NoAddress.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: 550,
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    border: 'none',
    borderRadius: 3
};
function BasketAddress() {
    const [open, setOpen] = React.useState(false);
    const [addressList, setAddressList] = useState([]);
    const [formData, setFormData] = React.useState({
        province: "",
        city: "",
        address: "",
        phonenumber: "",
        telephone: "",
        zipcode: ""
    });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputs = (e) => {
        console.log(e.target.name);
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setOpen(false);
        // ذخیره آدرس در دیتابیس
        setAddressList(addresses =>[ ...addresses , formData])
        
    }

    return (
        <section>
            <Head><title>پرسش پاسخ | گیفت شاپ</title></Head>
            <div className="container">
                <div className="row py-5 ">
                    <div className='card_style px-5'>
                        <div className="col-12 contact-us m-auto text-right">
                            <TextHeadTiltle underline_dec={false} title="آدرس مورد نظر برای ارسال را انتخاب کنید..." />
                        </div>
                      
                        <div className='row justify-content-start'>
                           {
                               addressList.length ? addressList.map((address, index) => {
                                   return (<BoxAddress address={address} key={index} />)
                               }) : null
                           } 
                        </div>
                        <div className={styles.No_Address}>
                            <div>
                                <Button onClick={handleOpen}>
                                    <p>
                                        افزودن آدرس جدید
                                        <AddBoxIcon />
                                    </p>

                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    className="modal-size"
                                >
                                    <form action="" onSubmit={e => handleSubmit(e)}>
                                    <Box sx={style} >
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            <div className="col-12 py-4 ps-0">
                                                <TextField sx={{ width: '100%' }}
                                                    value={formData.province}
                                                    name="province"
                                                    onInput={e => handleInputs(e)}
                                                    id="outlined-textarea"
                                                    label="استان محل سکونت"
                                                    multiline
                                                />
                                            </div>

                                            <div className="col-12 py-4 ps-0">
                                                <TextField sx={{ width: '100%' }}
                                                    id="outlined-textarea"
                                                    onInput={e => handleInputs(e)}
                                                    label="شهرستان"
                                                    name="city"
                                                    multiline
                                                />
                                            </div>
                                            <div className="col-12 py-4 ps-0">
                                                <TextField sx={{ width: '100%' }}
                                                    id="outlined-textarea"
                                                    onInput={e => handleInputs(e)}
                                                    label="آدرس"
                                                    name="address"
                                                    multiline
                                                />
                                            </div>
                                            <div className="col-12 py-4 ps-0">
                                                <TextField sx={{ width: '100%' }}
                                                    id="outlined-textarea"
                                                    onInput={e => handleInputs(e)}
                                                    label="شماره تلفن"
                                                    name="phonenumber"
                                                    multiline
                                                />
                                            </div>
                                            <div className="col-12 py-4 ps-0">
                                                <TextField sx={{ width: '100%' }}
                                                    onInput={e => handleInputs(e)}
                                                    id="outlined-textarea"
                                                    label="شماره تلفن  ثابت"
                                                    name="telephone"
                                                    multiline
                                                />
                                            </div>
                                            <div className="col-12 py-4 ps-0">
                                                <TextField sx={{ width: '100%' }}
                                                    id="outlined-textarea"
                                                    onInput={e => handleInputs(e)}
                                                    label="کدپستی"
                                                    name="zipcode"
                                                    multiline
                                                />
                                            </div>
                                            <div className="col-12 py-4  ">
                                                <Stack spacing={2} direction="row">
                                                    <Button variant="contained" type='submit' style={{ backgroundColor: "#E96962" }}>ثبت آدرس</Button>
                                                    <Button variant="contained" style={{ backgroundColor: "#123C55" }} onClick={handleClose}>بستن</Button>
                                                </Stack>

                                            </div>
                                        </Typography>
                                    </Box>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default BasketAddress