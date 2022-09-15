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
        username:"",
        email: "",
        mobile: "",
        province: "",
        gender:"",
        year:"",
        month:"",
        day:"",
        station:"",
        city:"",
        pid:"",
        shebanumber:"",
        bio:"",
        picture:""
    });

    const [errorMessage, setErrorMessage] = useState({
      fullName: null,
      username:null,
      email: null,
      mobile: null,
      province: null,
      gender:null,
      year: null,
      month: null,
      day: null,
      city: null,
      pid:null,
      shebanumber: null,
      bio:null,
      picture:null
    })



    const handleSubmit = (e) => {
        e.preventDefault()
        const fullName = e.target.elements.fullName.value;
        const email = e.target.elements.email.value;
        const mobile = e.target.elements.mobile.value;
        const province = e.target.elements.province.value;
        const username = e.target.elements.username.value;
        const gender= e.target.elements.gender.value;
        const year = e.target.elements.year.value;
        const month = e.target.elements.month.value;
        const day = e.target.elements.day.value;
        const city= e.target.elements.city.value;
        const pid = e.target.elements.pid.value;
        const shebanumber = e.target.elements.shebanumber.value;
        const bio = e.target.elements.bio.value;
        const pictur=e.target.elements.picture.value;
        let error = false;
        setErrorMessage({
          fullName: null,
          username:null,
          email: null,
          mobile: null,
          gender:null,
          province: null,
          year: null,
          month: null,
          day: null,
          city: null,
          pid:null,
          shebanumber: null,
          bio:null
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
          if (city == '') {
              error = true;
              setErrorMessage(prevState => {
                  return {
                      ...prevState,
                      province: 'لطفا شهر خود را وارد کنید'
                  }
              })
          }
          if (gender == '') {
            error = true;
            setErrorMessage(prevState => {
                return {
                    ...prevState,
                    province: 'لطفا جنسیت خود را وارد کنید'
                }
            })
        }
        if (year == '') {
          error = true;
          setErrorMessage(prevState => {
              return {
                  ...prevState,
                  province: 'لطفا سال تولد خود را وارد کنید'
              }
          })
      }
        if (month == '') {
          error = true;
          setErrorMessage(prevState => {
              return {
                  ...prevState,
                  province: 'لطفا ماه تولد خود را وارد کنید'
              }
          })
      }
      if (day == '') {
        error = true;
        setErrorMessage(prevState => {
            return {
                ...prevState,
                province: 'لطفا روز تولد خود را وارد کنید'
            }
        })
      }
      if (pid == '') {
        error = true;
        setErrorMessage(prevState => {
            return {
                ...prevState,
                province: 'لطفا کدملی خود را وارد کنید'
            }
        })
      }
      if (shebanumber == '') {
        error = true;
        setErrorMessage(prevState => {
            return {
                ...prevState,
                province: 'لطفا شماره شبا خود را وارد کنید'
            }
        })
      }
      if (bio == '') {
        error = true;
        setErrorMessage(prevState => {
            return {
                ...prevState,
                province: 'لطفا درباره من را وارد کنید'
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
            province: user.province_id?.id,
            gender:user.gender,
            year:user.year,
            month:user.month,
            day:user.day,
            bio:user.bio,
            shebanumber:user.shebanumber,
            pid:user.pid,
            username:user.username,
            city:user.city,
            picture:user.picture

        })
    }, [user])
    return (
            <main>
        <UserPanelBase active={"edit"} title="ویرایش اطلاعات">
        <div className="conatiner justify-content-center ">
        <input type="file" accept='jpg' style={{display:"none"}} ref={hiddenFileInput} onChange={handleChange}/>

        <div className='d-flex justify-content-center'>
          <div class="user-styling">
            <img src={imgsrc} class="main-profile-img" alt="profile-image" />
            <span class="icon-styling pt-2" onClick={handleClick}>
              <CameraAlt style={{color:"#fff",width:"30px",height:"30px"}}/>
            </span>
          </div>
        </div>
     <div className="row px-5 mt-5">
     <div className='col-lg-6 col-12 p-2'>
       <TextField 
           color="main" fullWidth label="نام و نام خانوادگی" 
          placeholder='لطفا کامل وارد کنید' variant="outlined" 
          error={!!errorMessage.fullName}
          helperText={errorMessage.fullName}
          name="fullname"
          defaultValue={formData.fullname}
          />
       </div>
       <div className='col-lg-6 col-12 p-2'>
       <TextField   
           color="main" fullWidth label="نام کاربری" 
          placeholder='به زبان انگلیسی وارد کنید' variant="outlined" 
          error={!!errorMessage.username}
          helperText={errorMessage.username}
          name="username"
          defaultValue={formData.username}
       />
       </div>
       <div className='col-lg-6 col-12 p-2'>
       <TextField  
          type="email" color="main"   
          fullWidth placeholder='name@example.com' label='رایانامه'  variant="outlined"
          error={!!errorMessage.fullName}
          helperText={errorMessage.fullName}
          name="fullname"
          defaultValue={formData.fullname}
        />
       </div>
       <div className='col-lg-6 col-12 p-2'>
       <TextField  
          color="main"   fullWidth
          placeholder='09123456789' label='شماره همراه'  variant="outlined" 
          error={!!errorMessage.mobile}
          InputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          type="number"
          name="mobile"
           helperText={errorMessage.mobile}
           defaultValue={formData.mobile} 
          />
       </div>
     </div>
     
     <label className='text-right my-3'>می توانید رمز عبور حساب کاربری خود را تغییر دهید</label>
     <div className='d-flex justify-content-center'>
     <FormGroup row className="col-12 justify-content-center">
     <TextField type="password" className="col-8" color="main"    label='رمز عبور'  variant="outlined" />
     <Button variant="outlined" className="ms-1 col-2" size='large' color="main" disableElevation>تغییر زمر</Button>
     </FormGroup>
     </div>
     
      <div className="mt-3 mb-3">
      <FormControl>
      <label className='form-label mt-3 mb-2'>جنسیت</label>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" checked={true} control={<Radio color="main" size='large' />} label="زن" />
        <FormControlLabel value="male" control={<Radio color="main" size="large"/>} label="مرد" />
      </RadioGroup>
    </FormControl>
      </div>
       <div  dir="rtl" className='mt-2 ps-2'>
       <label className='form-label mb-3 mt-4'>تاریخ تولد خود را وارد کنید</label>
         </div>
       <div className='col row pe-1 ps-1 pb-3'>
       <div className='col-lg-4 col-12 p-1 '>
       <TextField   
       error={!!errorMessage.year}
       helperText={errorMessage.year}
       name="year"
       defaultValue={formData.year}
       color="main" fullWidth label="سال" variant="outlined"
       />

       </div>
       <div className='col-lg-4 col-12 p-1'>
       <TextField  
          select  color="main"   fullWidth label="ماه" variant="outlined"
          error={!!errorMessage.month}
          helperText={errorMessage.month}
          name="month"
          defaultValue={formData.month}
        >
       {month.map((item)=>(
         <MenuItem value={item.id} key={item.id}>{item}</MenuItem>
           ))}
       </TextField>
       </div>
       <div className='col-lg-4 col-12 p-1'>
       <TextField  
          color="main"     fullWidth label="روز" variant="outlined" 
          error={!!errorMessage.day}
          helperText={errorMessage.day}
          name="day"
          defaultValue={formData.day}
          />

       </div>
       </div>
       <div  dir="rtl" className='ps-2'>
       <label className="form-label mb-3 mt-4">آدرس خود را وارد کنید</label>
         </div>
     <div className="row"> 
       <div className='col-lg-6 col-12 p-1 '>
       <TextField   
           color="main" fullWidth label="استان" variant="outlined" select
          error={!!errorMessage.province}
          helperText={errorMessage.province}
          name="province"
          defaultValue={formData.province||0}
        >
          {
          provinces?.map(item=>{
           return <MenuItem key={item.id} value={item.id}> {item.name} </MenuItem>})
          }

        </TextField>
       </div>
       <div className='col-lg-6 col-12 p-1'>
       <TextField  
          color="main" fullWidth label="شهر" variant="outlined" 
          error={!!errorMessage.city}
          helperText={errorMessage.city}
          name="city"
          defaultValue={formData.city}
        />
       </div>
     </div>
       
       <label className=' mb-3 mt-4'> اطلاعات موردنباز برای پولدارشو را وارد کنید</label>
       <div className="mb-3">
       <TextField  
        error={!!errorMessage.pid}
        helperText={errorMessage.pid}
        name="pid"
        defaultValue={formData.pid}
        color="main"     fullWidth label="شماره ملی" variant="outlined" 
        />

       </div>
       <div className="mb-2">
       <TextField  
          className="mb-2" color="main"     fullWidth label="شماره شبا" variant="outlined"
          error={!!errorMessage.shebanumber}
          helperText={errorMessage.shebanumber}
          name="shebanumber"
          defaultValue={formData.shebanumber}
       />

        </div>


       <label className='mb-3 mt-4'>چند جمله ای در مورد خودت بنویس</label>
       <TextField 
          color="main"     fullWidth label="درباره من" 
          variant="outlined" multiline rows={3}
          error={!!errorMessage.bio}
          helperText={errorMessage.bio}
          name="bio"
          defaultValue={formData.bio}
       />
       

       <div className="mt-3 col-lg-12 col-12">
       <Button variant="contained" type="submit" size="large" style={{backgroundColor:'#df443d',width:"100%",borderRadius:"50px"}}>ویرایش</Button>
       </div>
     </div>
      
      
        </UserPanelBase>
            </main>

       
    )
}

export default withAuth(Edit)