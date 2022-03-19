import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import BoxItem from '../../components/Ui/BoxItem/BoxItem'
import BoxItems from '../../components/Ui/BoxItems/BoxItems'
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle'
import styles from '../../styles/card.module.scss'
function index() {
    const openDialog = () => {

    }

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


    const [open, setOpen] = useState(false);
    const [addressList, setAddressList] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "الکسیس",
        email: "info@mgdesign.ir",
        mobile: "۰۹۹۱۱۰۴۱۲۴۲",
        province: "ایالات متحده نیشابور",
    });

    const [errorMessage, setErrorMessage] = useState({
        fullName: null,
        email: null,
        mobile: null,
        province: null
    })

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        const fullName = e.target.elements.fullName.value;
        const email = e.target.elements.email.value;
        const mobile = e.target.elements.mobile.value;
        const province = e.target.elements.province.value;
        let error = false;
        setErrorMessage({
            fullName: null,
            email: null,
            mobile: null,
            province: null
        })


        if (fullName == '') {
            console.log('fullName')
            error = true;
            setErrorMessage(prevState => {
                return {
                    ...prevState,
                    fullName: 'لطفا نام و نام خانوادگی خود را وارد کنید'
                }
            })
        }
        if (email == '') {
            error = true;
            setErrorMessage(prevState => {
                return {
                    ...prevState,
                    email: 'لطفا ایمیل خود را وارد کنید'
                }
            })
        }

        if (mobile == '') {
            error = true;
            setErrorMessage(prevState => {
                return {
                    ...prevState,
                    mobile: 'لطفا شماره موبایل خود را وارد کنید'
                }
            })
        }
        if (province == '') {
            error = true;
            setErrorMessage(prevState => {
                return {
                    ...prevState,
                    province: 'لطفا استان خود را وارد کنید'
                }
            })
        }



        if (error) {

        } else {
            setFormData({
                fullName,
                email,
                mobile,
                province,
            });
            setOpen(false);
        }



    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card_style mt-5 py-3 px-5'>
                        <div className={styles.personal_information}>
                            <div className={styles.personal_information_name}>
                                <div className={styles.label}>نام و نام خانوادگی:</div>
                                <div>{formData.fullName}</div>
                            </div>
                            <div className={styles.personal_information_email}>
                                <div className={styles.label}>پست الکترونیکی: </div>
                                <div>{formData.email}</div>
                            </div>
                            <div className={styles.personal_information_mobile}>
                                <div className={styles.label}>تلفن همراه:</div>
                                <div>{formData.mobile}</div>
                            </div>
                            <div className={styles.personal_information_province}>
                                <div className={styles.label}>استان محل سکونت: </div>
                                <div>{formData.province}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                        <Button variant="contained" color="warning" onClick={() => setOpen(true)}>
                            ویرایش اطلاعات
                        </Button>
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="modal-size"
                >
                    <form action="" noValidate onSubmit={e => handleSubmit(e)}>
                        <Box sx={style} >
                            <div className="col-12 py-4 ps-0">
                                <TextField sx={{ width: '100%' }}

                                    name="fullName"
                                    error={!!errorMessage.fullName}
                                    helperText={errorMessage.fullName}
                                    
                                    label="نام و نام خانوادگی"
                                    
                                />
                            </div>

                            <div className="col-12 py-4 ps-0">
                                <TextField sx={{ width: '100%' }}
                                    
                                    error={!!errorMessage.email}
                                    label="پست الکترونیکی "
                                    helperText={errorMessage.email}
                                    name="email"
                                    
                                />
                            </div>
                            <div className="col-12 py-4 ps-0">

                                <TextField sx={{ width: '100%' }}
                                    
                                    error={!!errorMessage.mobile}
                                    label="تلفن همراه"
                                    InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    type="number"
                                    name="mobile"
                                    helperText={errorMessage.mobile}
                                    
                                />
                            </div>
                            <div className="col-12 py-4 ps-0">
                                <TextField sx={{ width: '100%' }}
                                    
                                    error={!!errorMessage.province}
                                    label="استان محل سکونت"
                                    name="province"
                                    helperText={errorMessage.province}
                                    
                                />
                            </div>

                            <div className="col-12 py-4  ">
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" type='submit' style={{ backgroundColor: "#E96962" }}>ویرایش اطلاعات</Button>
                                    <Button variant="contained" style={{ backgroundColor: "#123C55" }} onClick={handleClose}>بستن</Button>
                                </Stack>

                            </div>

                        </Box>
                    </form>
                </Modal>
            </div>
        </div>
    )
}

export default index