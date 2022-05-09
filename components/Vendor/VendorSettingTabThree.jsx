import React from 'react'
import * as e from '../../redux/endpoints'
import axios from 'axios'
// import UploadImg from '../../static/img/icon/icons8-image-gallery-50 1.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import VendorCover from '../../../components/Vendor/VendorCover';

const Input = styled('input')({
    display: 'none',
});


function Upload() {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
        <section id="setting-profile">
                <div className="row p-4">
                    <div className="col-lg-8 col-12 mx-auto">
                        <div className={"infoScan " + ' p-4'}>
                            <p>
                                اسکن مدارک معتبر برای محصولاتی که فروش آن‌ها در خاتون زیبا به مجوز نیاز دارد، یا سایر مدارک درخواست‌شده را در این قسمت بارگذاری کنید. دقت کنید، تصاویر بی‌کیفیت یا ناخوانا تایید نخواهند شد.
                            </p>
                        </div>
                        <form className='  '>
                            <div className={"uploadDoc " + '  mt-4'}>
                                <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ padding: "3.5rem" }}>
                                    <label htmlFor="contained-button-file">
                                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                        <Button>
                                            بارگزاری مدارک
                                        </Button>
                                    </label>
                                    <label htmlFor="icon-button-file">
                                        <Input accept="image/*" id="icon-button-file" type="file" />
                                        <IconButton color="primary" aria-label="upload picture" >
                                            {/* <Image src={UploadImg} alt="cover" /> */}
                                        </IconButton>
                                    </label>
                                </Stack>

                            </div>

                            <FormGroup className='my-5'>
                                <FormControlLabel control={<Checkbox  checked={checked} onChange={handleChange} />} label="در صورت تخلف از قوانین بارگذاری مدارک یا ارائه مدرک تقلبی، مسئولیت حقوقی و کیفری آن را می‌پذیرم." />
                            </FormGroup>
                            <Button fullWidth disabled={!checked} variant="contained" style={{ backgroundColor: "#E96962",  margin: "auto" }}>ثبت و ارسال مدارک</Button>
                        </form>
                    </div>

                </div>
        </section>
    )
}
export default Upload