import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import * as e from '../../redux/endpoints'

// import UploadImg from '../../static/img/icon/icons8-image-gallery-50 1.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CheckIcon from '@mui/icons-material/Check';

import Stack from '@mui/material/Stack';
import Image from 'next/image'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CircularProgress } from '@mui/material';
// import VendorCover from '../../../components/Vendor/VendorCover';

const Input = styled('input')({
    display: 'none',
});


function Upload({goToNext=undefined}) {

    const [checked, setChecked] = React.useState(false);
    const [checkedcolor,setCheckedcolor]=React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [fileUploaded, setFileUploaded] = React.useState(false);
    const fileRef = React.useRef() 

    const handleFileUpload = (e)=>{
        setFileUploaded (fileRef.current.files.length > 0 )
    }
    const handleChange = (event) => {
      setChecked(event.target.checked);
      if(event.target.checked===true){
        setCheckedcolor("#ffad14")
    }else{
        setCheckedcolor("")
    }
    };
    const submit = (event)=>{
		if(loading) return 
        if(!fileRef.current.files.length) return
        try{
            event.preventDefault();
            const dform = new FormData()
            dform.append("image", fileRef.current.files[0])
			setLoading(true)
            console.log(e.UPDATE_MARKET_DOCUMENT)
            axios.post(e.UPDATE_MARKET_DOCUMENT, dform, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response=>{
                if(!response) throw new Error()
                const {data} = response
                toast(data.message, {type: (data.error? "error": "success")})
                if(!data.error)
				if(goToNext) goToNext()
            })
            .catch(error=>{
                console.log(error)
                toast.error("خطا در ارتباط ")
            })
			.finally(f=>{
				setLoading(false)
			})
        }
        catch(e){console.log(e)}

    }
    return (
        <section id="setting-profile">
                <div className="row p-4">
                    <div className="col-xxl-8 col-12 mx-auto">
                        <div className={"infoScan " + ' p-4'}>
                            <p>
                                اسکن مدارک معتبر برای محصولاتی که فروش آن‌ها در خاتون زیبا به مجوز نیاز دارد، یا سایر مدارک درخواست‌شده را در این قسمت بارگذاری کنید. دقت کنید، تصاویر بی‌کیفیت یا ناخوانا تایید نخواهند شد.
                            </p>
                        </div>
                        <form className='  ' onSubmit={submit}>
                            <div className={"uploadDoc " + '  mt-4'}>
                                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ padding: "3.5rem" }}>
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                        {
                                            fileUploaded ?
                                                <Button startIcon={<CheckIcon />} variant={ "contained" } color={ "success"} onClick={e=>fileRef.current.click()}>
                                                    آماده ارسال
                                                </Button>
                                            :
                                                <Button variant={  "outlined"} color={ "error"} onClick={e=>fileRef.current.click()}>
                                                    بارگذاری مدارک
                                                </Button>
                                        }
                                        
                                    </label>
                                    <label htmlFor="icon-button-file">
                                        <Input accept="image/*" id="icon-button-file" type="file" ref={fileRef} onChange={handleFileUpload} />
                                        <IconButton color="primary" aria-label="upload picture" >
                                            {/* <Image src={UploadImg} alt="cover" /> */}
                                        </IconButton>

                                    </label>
                                </Stack>

                            </div>

                            <FormGroup className='my-5'>
                                <FormControlLabel control={<Checkbox  checked={checked} onChange={handleChange} />} label="در صورت تخلف از قوانین بارگذاری مدارک یا ارائه مدرک تقلبی، مسئولیت حقوقی و کیفری آن را می‌پذیرم." />
                            </FormGroup>
                            <Button style={{borderRadius:"40px",backgroundColor:checkedcolor}} variant="contained" fullWidth type="submit" disabled={!checked} >
                                {loading? <CircularProgress color="white" size={20} /> : <span>ثبت و ارسال مدارک</span>}
                            </Button>
                        </form>
                    </div>

                </div>
        </section>
    )
}
export default Upload