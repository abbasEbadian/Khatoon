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
import { user_imlink } from '../../../components/utils'
import Image from 'next/image'
import Link from 'next/link'

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
                            <div className={"label "}> نام کاربری: </div>
                            <div>{formData.username}</div>
                        </div>
                        <div className={"personal_information_name "}>
                            <div className={"label "}> شماره همراه:</div>
                            <div>{formData.mobile}</div>
                        </div>
                        
                        <div className={"personal_information_email "}>
                            <div className={"label "}>پست الکترونیکی: </div>
                            <div>{formData.email}</div>
                        </div>
                        <div className={"personal_information_mobile "}>
                            <div className={"label "}>درباره من:</div>
                            <div>{formData.bio}</div>
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
                   <Link href="/user-panel/edit">
                   <Button variant="contained" className="button-round" style={{backgroundColor:"#ff676d",borderRadius:"20px"}}>
                        ویرایش اطلاعات
                    </Button>
                   </Link>
                    
                </div>
           
           
        </UserPanelBase>
            </main>

       
    )
}

export default withAuth(Profile)