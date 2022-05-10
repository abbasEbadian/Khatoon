import { Box, Button, TextField } from '@mui/material'
import React from 'react'

function VendorSettingTabOne() {
  return (
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
  )
}

export default VendorSettingTabOne