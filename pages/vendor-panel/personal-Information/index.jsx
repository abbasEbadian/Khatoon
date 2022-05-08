import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import VendorPanelBase from '../../../components/VendorPanelBase'
import * as e from '../../../redux/endpoints'
import axios from 'axios'
// import VendorCover from '../../../components/Vendor/VendorCover';


function Settings({ cardNumber_types, provinces }) {
    const [boxWebsite, setboxWebsite] = React.useState({
        name: "IR",
        telegram: "https://t.me/",
        instagram: "https://instagram.com/",
        website: "https://www"
    })
    const [cardNumber, setcardNumber] = React.useState(null);

    const get_cities = (province_id) => {
        axios.get(e.GET_CITIES_BY_PROVINCE(province_id))
            .then(res => {
                const { data } = res
                setCities(data)
            })
            .catch(e => {
                console.log(e)
                setCities([])
            })
    }

    const handlecardNumberChange = (event) => {
        setcardNumber(event.target.value);
    };
    const handleProvinceChange = (event) => {
        setProvince(event.target.value);
        get_cities(event.target.value)
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    return (
        <section id="setting-profile">
            <VendorPanelBase active="setting" title="تنظیمات">
                <div className="row p-4">
                    <div className="col-lg-8 col-12">
                        {/* <VendorCover /> */}
                        <form className='row align-items-center '>

                            <div className="col-12 pb-4">
                                <Box>
                                    <TextField
                                        required
                                        label="تلفن همراه"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        helperText="تلفن همراه باید به نام صاحب غرفه باشه"
                                        placeholder="0912***1245"
                                        inputProps={{
                                            dir: "ltr"
                                        }}
                                        name="mobile"
                                    />
                                </Box>
                            </div>

                            <div className="col-12 pb-4">
                                <Box>
                                    <TextField
                                        required
                                        label="کد ملی"
                                        type="phonenumber"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="کد ملی خود را وارد کنید"
                                        inputProps={{
                                            dir: "ltr"
                                        }}
                                        name="nationalCode"
                                    />
                                </Box>
                            </div>
                            <div className="col-12 pb-4">
                                <Box>
                                    <TextField
                                        required
                                        label="تاریخ تولد"
                                        type="date"
                                        variant="outlined"
                                        fullWidth
                                        placeholder=""
                                        inputProps={{
                                            dir: "ltr"
                                        }}
                                        name="date"
                                    />
                                </Box>
                            </div>
                            <div className="col-12">
                                {/* <Stack spacing={2} direction="row">
                                    <Button color="main" variant="contained" fullWidth>بروزرسانی فروشگاه</Button>
                                </Stack> */}
                            </div>
                        </form>
                    </div>
                </div>
            </VendorPanelBase>
        </section>
    )
}


export async function getServerSideProps() {
    let result = {}
    try {
        const res = await fetch(e.GET_CARDNUMBER_TYPES_AND_PROVINCES)
        result = await res.json()
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
    return {
        props: {
            provinces: result?.provinces || [],
            cardNumber_types: result?.cardNumber_types || [],

        }
    }
}
export default Settings