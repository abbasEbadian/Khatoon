import { Box, Button, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import BoxItem from '../../../components/Ui/BoxItem/BoxItem'
import BoxItems from '../../../components/Ui/BoxItems/BoxItems'
import TextHeadTiltle from '../../../components/Ui/TextHeadTiltle'
import UserPanelBase from '../../../components/UserPanelBase'
import withAuth from '../../../redux/withAuth'
import { toast } from 'react-toastify'
import { profile, update_profile } from '../../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'


function Profile() {
    const dispatch = useDispatch()
    const user = useSelector(s=>s.auth.user)
    const provinces = useSelector(s=>s.main.provinces)


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
        fullName: "",
        email: "",
        mobile: "",
        province: "",
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



        if (!error) {
            dispatch(update_profile({
                first_name: fullName,
                email,
                mobile,
                province
            }))
            .then(({error, message})=>{
                toast(message, {type: (error? "error": "success")})
                if(!error){
                    setOpen(false);
                }
            })
            .catch(err=>{
                toast.error('خطا در برقراری ارتباط')
                console.log(err)
            })
        } 

    }

    React.useEffect(()=>{
        if (user)
        setFormData({
            fullName: user.first_name,
            email: user.email,
            mobile: user.mobile,
            province: user.province_id?.id 
        })
    }, [user])
    return (
            <main>
        <UserPanelBase active={"profile"} title="پروفایل">
                <div className='card_style mt-5'>
                    <div className={"personal_information "}>
                        <div className={"personal_information_name "}>
                            <div className={"label "}>نام و نام خانوادگی:</div>
                            <div>{formData.fullName}</div>
                        </div>
                        <div className={"personal_information_email "}>
                            <div className={"label "}>پست الکترونیکی: </div>
                            <div>{formData.email}</div>
                        </div>
                        <div className={"personal_information_mobile "}>
                            <div className={"label "}>تلفن همراه:</div>
                            <div>{formData.mobile}</div>
                        </div>
                        <div className={"personal_information_province "}>
                            <div className={"label "}>استان محل سکونت: </div>
                            <div>
                                {provinces?.find(i=>i.id===formData.province)?provinces.find(i=>i.id===formData.province).name: ""}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'left', marginTop: '1rem' }}>
                    <Button variant="contained" style={{backgroundColor:"#ff676d",borderRadius:"20px"}} onClick={() => setOpen(true)}>
                        ویرایش اطلاعات
                    </Button>
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
                                    defaultValue={formData.fullName}
                                    label="نام و نام خانوادگی"
                                    
                                />
                            </div>

                            <div className="col-12 py-4 ps-0">
                                <TextField sx={{ width: '100%' }}
                                    
                                    error={!!errorMessage.email}
                                    label="پست الکترونیکی "
                                    helperText={errorMessage.email}
                                    name="email"
                                    defaultValue={formData.email}

                                    
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
                                    defaultValue={formData.mobile}

                                    
                                />
                            </div>
                            <div className="col-12 py-4 ps-0">
                                <TextField sx={{ width: '100%' }}
                                    select
                                    error={!!errorMessage.province}
                                    label="استان محل سکونت"
                                    name="province"
                                    helperText={errorMessage.province}
                                    defaultValue={formData.province || 0} 
                                    // onChange={e=>setFormData(s=>{return {...s, province: e.target.value}})}
                                >
                                    {
                                        provinces?.map(item=>{
                                            return <MenuItem key={item.id} value={item.id}> {item.name} </MenuItem>
                                        })
                                    }
                                </TextField>
                            </div>

                            <div className="col-12 py-4  ">
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" type='submit' style={{ backgroundColor: "#E96962" }}>ثبت اطلاعات</Button>
                                    <Button variant="contained" style={{ backgroundColor: "#123C55" }} onClick={handleClose}>بستن</Button>
                                </Stack>

                            </div>

                        </Box>
                    </form>
                </Modal>
        </UserPanelBase>
            </main>

       
    )
}

export default withAuth(Profile)