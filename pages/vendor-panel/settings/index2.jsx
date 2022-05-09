import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import VendorPanelBase from '../../../components/VendorPanelBase'
import * as e from '../../../redux/endpoints'
import axios from 'axios'
import OutlinedInput from '@mui/material/OutlinedInput';
import VendorCover from '../../../components/Vendor/VendorCover';


function Settings({business_types, provinces}) {
  const [boxWebsite, setboxWebsite] = React.useState({
    name: "https://khatoonziba.com/",
    telegram: "https://t.me/",
    instagram: "https://instagram.com/",
    website: "https://www"
  })
  const [business, setBusiness] = React.useState(null);
  const [province, setProvince] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [cities, setCities] = React.useState([]);

  const get_cities = (province_id)=>{
    axios.get(e.GET_CITIES_BY_PROVINCE(province_id))
    .then(res=>{
      const {data} = res
      setCities(data)
    })
    .catch(e=>{
      console.log(e)
      setCities([])
    })
  }

  const handleBusinessChange = (event) => {
    setBusiness(event.target.value);
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
            <VendorCover />
            <form className='row align-items-center '>
              <div className="col-lg-4 col-12">
                <Box >
                  <TextField
                    required
                    id="input-with-icon-textfield"
                    label="نام فروشگاه"
                    placeholder="دفترهای پرنیان"
                    variant="outlined"
                    fullWidth
                    
                  />
                </Box>
              </div>
              <div className="col-lg-8 col-12">
                <Box >
                  <TextField
                    required
                    label="پیام فروشگاه"
                    placeholder="متن پیام غرفه‌دار اینجا نمایش داده می‌شود"
                   
                    variant="outlined"
                    fullWidth
                  />
                </Box>
              </div>
              <div className="col-12 d-flex align-items-start">
                <div className="col-9">
                  <Box >
                    <TextField
                      fullWidth
                      required
                      id="input-with-icon-textfield"
                      label="آدرس فروشگاه"
                      type="text"
                      autoComplete="off"
                      placeholder="parnian-books"
                      helperText="مسیر دسترسی به فروشگاه شما در مجموعه خاتون زیبا که آدرس مستقیم ورود به فروشگاه شما خواهد بود."
                      startAdornment= {
                        <InputAdornment position="center">
                          {"https://khatoonziba.com/"}
                        </InputAdornment>
                      }
                      variant="outlined"
                      inputProps={{
                        dir: "ltr"
                      }}
                    />
                  </Box>
                </div>
                <div className={"box_website " + " col-3 "}>
                  <TextField
                      disabled
                      variant="outlined"
                      fullWidth
                      value={boxWebsite.name}
                    />
                </div>

              </div>
              <div className="col-12">
                <Box>
                  <TextField
                    required
                    select
                    label="نوع کسب و کار"
                    variant="outlined"
                    fullWidth
                    inputProps={{
                      dir: "ltr"
                    }}
                    value={business}
                    onChange={handleBusinessChange}
                    name="business_type"
                    >
                      {business_types?.map(item=>{
                        return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                      })}
                    </TextField>
                </Box>
              </div>
              <div className="col-12">
                <Box sx={{ minWidth: 120 }}>
                  <TextField
                      id="outlined-multiline-static"
                      label="درباره فروشگاه"
                      multiline
                      rows={4}
                      fullWidth
                      defaultValue=""
                      required
                    >
                    </TextField>
                </Box>
              </div>
              <div className="col-6">
                <Box>
                  <TextField
                    required
                    label="تلفن همراه"
                    type="phonenumber"
                    variant="outlined"
                    fullWidth
                    placeholder="09"
                    inputProps={{
                      dir: "ltr"
                    }}
                    name="mobile"
                  />
                </Box>
              </div>
              <div className="col-6">
                <Box>
                  <TextField
                    required
                    label="تلفن ثابت"
                    type="phonenumber"
                    variant="outlined"
                    fullWidth
                    placeholder="021"
                    inputProps={{
                      dir: "ltr"
                    }}
                    name="phone"
                  />
                </Box>
              </div>
              <div className="col-6">
                <Box>
                <TextField
                    required
                    select
                    label="استان"
                    variant="outlined"
                    fullWidth
                    inputProps={{
                      dir: "ltr"
                    }}
                    value={province}
                      onChange={handleProvinceChange}
                    name="province"
                    >
                      {provinces?.map(item=>{
                        return <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                      })}
                    </TextField>
                </Box>
              </div>
              <div className="col-6">
                <Box >
                <TextField
                    required
                    select
                    label="شهرستان"
                    variant="outlined"
                    fullWidth
                    inputProps={{
                      dir: "ltr"
                    }}
                    value={city}
                    onChange={handleCityChange}
                    name="province"
                    >
                      {
                        province?
                          cities.map(ct=>{
                            return <MenuItem key={ct.id} value={ct.id}>{ct.name}</MenuItem>
                          })
                        :
                          <MenuItem key={-1}>استان انتخاب نشده</MenuItem>
                      }
                    </TextField>
                 
                </Box>
              </div>
              <div className="col-12">
                <Box
                  component="div"
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="آدرس"
                    multiline
                    rows={4}
                    defaultValue=""
                    fullWidth
                    required
                  />
                </Box>
              </div>
              <div className="col-12 d-flex align-items-center">
                <div className="col-9">
                  <Box>
                    <TextField
                      required
                      id="input-with-icon-textfield"
                      label="آدرس اینستاگرام"
                      type="text"
                      autoComplete="off"
                      InputProps={{
                        dir:"ltr"
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </div>
                <div className={"box_website " + " col-3 "}>
                  <TextField
                      disabled
                      variant="outlined"
                      fullWidth
                      value={boxWebsite.instagram}
                    />
                </div>
                


              </div>
              <div className="col-12 d-flex align-items-center">
                <div className="col-9">
                  <Box>
                    <TextField
                      id="input-with-icon-textfield"
                      label="آدرس وبسایت"
                      type="text"
                      autoComplete="off"
                      InputProps={{
                        dir:"ltr"
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </div>
                <div className={"box_website " + " col-3 "}>
                  <OutlinedInput
                      disabled
                      variant="outlined"
                      fullWidth
                      value={boxWebsite.website}
                    />
                </div>
              

              </div>
              <div className="col-12 d-flex align-items-center">
                <div className="col-9">
                  <Box >
                    <TextField
                      required
                      id="input-with-icon-textfield"
                      label="آدرس تلگرام"
                      type="text"
                      autoComplete="off"
                      InputProps={{
                        dir:"ltr"
                      }}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </div>
                
                <div className={"box_website " + " col-3 "}>
                  <TextField
                      disabled
                      variant="outlined"
                      fullWidth
                      value={boxWebsite.telegram}
                    />
                </div>

              </div>
              <div className="col-12">
                <Stack spacing={2} direction="row">
                  <Button color="main" variant="contained" fullWidth>بروزرسانی فروشگاه</Button>
                </Stack>
              </div>
            </form>
          </div>
      </div>
      </VendorPanelBase>
    </section>
  )
}


export async function getServerSideProps (){
  let result = {}
  try{
      const res    = await fetch(e.GET_BUSINESS_TYPES_AND_PROVINCES)
      result   = await  res.json()
      console.log(result)
  }
  catch(e){
      console.log(e)
  }
  return {
      props: {
          provinces: result?.provinces || [],
          business_types: result?.business_types || [],

      }
  }
}
export default Settings