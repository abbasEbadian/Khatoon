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
import {CameraAlt} from '@mui/icons-material'
import {Radio,RadioGroup,FormControl,FormLabel,FormControlLabel,FormGroup} from "@mui/material"

function Edit() {
    const dispatch = useDispatch()
    const user = useSelector(s=>s.auth.user)
    const provinces = useSelector(s=>s.main.provinces)
    const [month, setMonth] = React.useState([
        'فروردین','اردیبهشت','خرداد',   
        'تیر','مرداد','شهریور',    
        'مهر','آبان','آذر',    
        'دی','بهمن','اسفند',
    
      ]);
    
      const [imgsrc, setImgsrc] = React.useState(user_imlink(user?.avatar_image))
      const hiddenFileInput = React.useRef(null);
      const handleClick = event => {
        hiddenFileInput.current.click();
      };
      const handleChange = event => {
        setImgsrc(URL.createObjectURL(event.target.files[0]));
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
        <UserPanelBase active={"edit"} title="ویرایش">
        <div className="conatiner justify-content-center ">
        <input type="file" accept='jpg' style={{display:"none"}} ref={hiddenFileInput} onChange={handleChange}/>
        <div className='row justify-content-center'>
          <center>
          <div className="user-styling">
          <img src={imgsrc} className="main-profile-img"/>
          <span className="icon-styling pt-2" onClick={handleClick}>
            <CameraAlt style={{color:"#fff",width:"30px",height:"30px"}}/>
          </span>
        </div>
          </center>
        </div>
      <center>
      <div className=' mt-3 text-start' style={{width:"500px"}}>
     <div className="row row-cols-2">
     <div className='col p-2'>
       <TextField id="outlined-basic" size='small' color="main" fullWidth label="نام و نام خانوادگی" placeholder='لطفا کامل وارد کنید' variant="outlined" />
       </div>
       <div className='col p-2'>
       <TextField id="outlined-basic"  size='small' color="main" fullWidth label="نام کاربری" placeholder='به زبان انگلیسی وارد کنید' variant="outlined" />
       </div>
       <div className='col p-2'>
       <TextField id="outlined-basic" type="email" color="main" size='small' fullWidth placeholder='name@example.com' label='رایانامه'  variant="outlined" />
       </div>
       <div className='col p-2'>
       <TextField id="outlined-basic" color="main" size='small' fullWidth placeholder='09123456789' label='شماره همراه'  variant="outlined" />
       </div>
     </div>
     <label className=' text-right mt-3 mb-3'>می توانید رمز عبور حساب کاربری خود را تغییر دهید</label>
     <FormGroup row>
     <TextField type="password" style={{width:"400px"}} color="main" size='small'  label='رمز عبور'  variant="outlined" />
     <Button variant="outlined" className="ms-1" color="main" disableElevation>تغییر زمر</Button>
     </FormGroup>
      <div className="mt-3 mb-3">
      <FormControl>
      <label className='form-label mt-3 mb-2'>جنسیت</label>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" checked={true} control={<Radio />} label="زن" />
        <FormControlLabel value="male" control={<Radio />} label="مرد" />
      </RadioGroup>
    </FormControl>
      </div>
       <div  dir="rtl" className='mt-2 ps-2'>
       <label className='form-label mb-3 mt-4'>تاریخ تولد خود را وارد کنید</label>
         </div>
       <div className='col row row-cols-3 pe-1 ps-1 pb-3'>
       <div className='col p-1 '>
       <TextField id="outlined-basic"  size='small' color="main" fullWidth label="سال" placeholder='۱۳' variant="outlined" />

       </div>
       <div className='col p-1'>
       <TextField id="outlined-basic" select  color="main" size='small' fullWidth label="ماه" variant="outlined">
       {month.map((item)=>(
         <MenuItem value={item} key={item}>{item}</MenuItem>
           ))}
       </TextField>
       </div>
       <div className='col p-1'>
       <TextField id="outlined-basic" color="main"   size='small' fullWidth label="روز" variant="outlined" />

       </div>
       </div>
       <div  dir="rtl" className='ps-2'>
       <label className="form-label mb-3 mt-4">آدرس خود را وارد کنید</label>
         </div>
       <div className='col row row-cols-2 pe-1 ps-1 pb-4'>
       <div className='col p-1 '>
       <TextField id="outlined-basic"  size='small' color="main" fullWidth label="استان" variant="outlined" />
       </div>
       <div className='col p-1'>
       <TextField id="outlined-basic" color="main"   size='small' fullWidth label="شهر" variant="outlined" />
       </div>
       </div>

       
       <label className=' mb-3 mt-4'> اطلاعات موردنباز برای پولدارشو را وارد کنید</label>
       <div className="mb-3">
       <TextField  color="main"   size='small' fullWidth label="شماره ملی" variant="outlined" />

       </div>
       <div className="mb-2">
       <TextField  className="mb-2" color="main"   size='small' fullWidth label="شماره شبا" variant="outlined" />

        </div>


       <label className='mb-3 mt-4'>چند جمله ای در مورد خودت بنویس</label>
       <TextField color="main"   size='small' fullWidth label="درباره من" variant="outlined" multiline rows={3}/>
       

       <div className="mt-3">
       <Button variant="contained" size="large" style={{backgroundColor:'#df443d',width:"100%",borderRadius:"50px"}}>ویرایش</Button>
       </div>
     </div>
      </center>
      
      
    </div>
        </UserPanelBase>
            </main>

       
    )
}

export default withAuth(Edit)