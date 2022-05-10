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


function Settings({ banks }) {
    


    return (
        <section id="setting-profile">
            <VendorPanelBase active="setting" title="تنظیمات">
                <div className="row p-4">
                    <div className="col-lg-6 col-12">
                        {/* <VendorCover /> */}
                        <form>

                               

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
                                        select
                                    />
                                </Box>
                            <div className="col-12">
                                <Button color="main" variant="contained" fullWidth>بروزرسانی فروشگاه</Button>
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
        const res = await fetch(e.GET_BANKS)
        result = await res.json()
    }
    catch (e) {
        console.log(e)
    }
    return {
        props: {
            banks: result || [],

        }
    }
}
export default Settings 