import React from 'react'
import styles from '../../../styles/setting.module.scss'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function index() {
  const [boxWebsite, setboxWebsite] = React.useState([{
    name: "https://khatoonziba.com/",
    telegram: "https://t.me/",
    instagram: "https://instagram.com/",
    website: "https://www"
  }])
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  const [age2, setAge2] = React.useState('');

  const handleChange3 = (event) => {
    setAge2(event.target.value);
  };
  const [age3, setAge3] = React.useState('');

  const handleChange4 = (event) => {
    setAge3(event.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className='col-9 col-lg-12 card_style p-2'>
          <div className="col-7">
            <div className='d-flex align-items-center flex-wrap'>
              <div className="col-4">
                <Box sx={{ '& > :not(style)': { m: 3 } }}>
                  <TextField
                    required
                    id="input-with-icon-textfield"
                    label="نام فروشگاه"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
              </div>
              <div className="col-8">
                <Box sx={{ '& > :not(style)': { m: 3, width: '100%' } }}>
                  <TextField
                    required
                    id="input-with-icon-textfield"
                    label="پیام فروشگاه"
                    type="text"
                    autoComplete="off"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="center">
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
              </div>
              <div className="col-12 d-flex align-items-center">
                <div className="col-8">
                  <Box sx={{ '& > :not(style)': { m: 3, width: '100%' } }}>
                    <TextField
                      required
                      id="input-with-icon-textfield"
                      label="آدرس فروشگاه"
                      type="text"
                      autoComplete="off"
                      helperText="مسیر دسترسی به فروشگاه شما در مجموعه خاتون زیبا."
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="center">
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </Box>
                </div>
                <div className={styles.box_website + " col-4 "}>
                  {boxWebsite.map((item, idx) => {
                    return (
                      <>
                        <div>
                          <span className=''>{item.name}</span>
                        </div>
                      </>
                    )
                  })}
                </div>

              </div>
              <div className="col-12">
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 3, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="درباره فروشگاه"
                    multiline
                    rows={4}
                    defaultValue=""
                  />
                </Box>
              </div>
              <div className="col-12">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">نوع کسب و کار</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange2}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="col-6">
                <Box sx={{ '& > :not(style)': { m: 3, width: "90%" } }}>
                  <TextField
                    required
                    id="input-with-icon-textfield"
                    label="تلفن همراه"
                    type="phonenumber"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
              </div>
              <div className="col-6">
                <Box sx={{ '& > :not(style)': { m: 3, width: "90%" } }}>
                  <TextField
                    required
                    id="input-with-icon-textfield"
                    label="تلفن ثابت"
                    type="phonenumber"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                  />
                </Box>
              </div>
              <div className="col-6">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">استان</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age2}
                      label="Age"
                      onChange={handleChange3}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="col-6">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">شهرستان</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age3}
                      label="Age"
                      onChange={handleChange4}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="col-12">
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 3, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="آدرس"
                    multiline
                    rows={4}
                    defaultValue=""
                  />
                </Box>
              </div>
              <div className="col-12 d-flex align-items-center">
                <div className="col-8">
                  <Box sx={{ '& > :not(style)': { m: 3, width: '100%' } }}>
                    <TextField
                      required
                      id="input-with-icon-textfield"
                      label="آدرس اینستاگرام"
                      type="text"
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="center">
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </Box>
                </div>
                <div className={styles.box_website + " col-4 "}>
                  {boxWebsite.map((item, idx) => {
                    return (
                      <>
                        <div>
                          <span className=''>{item.instagram}</span>
                        </div>
                      </>
                    )
                  })}
                </div>

              </div>
              <div className="col-12 d-flex align-items-center">
                <div className="col-8">
                  <Box sx={{ '& > :not(style)': { m: 3, width: '100%' } }}>
                    <TextField
                      required
                      id="input-with-icon-textfield"
                      label="آدرس وبسایت"
                      type="text"
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="center">
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </Box>
                </div>
                <div className={styles.box_website + " col-4 "}>
                  {boxWebsite.map((item, idx) => {
                    return (
                      <>
                        <div>
                          <span className=''>{item.website}</span>
                        </div>
                      </>
                    )
                  })}
                </div>

              </div>
              <div className="col-12 d-flex align-items-center">
                <div className="col-8">
                  <Box sx={{ '& > :not(style)': { m: 3, width: '100%' } }}>
                    <TextField
                      required
                      id="input-with-icon-textfield"
                      label="آدرس تلگرام"
                      type="text"
                      autoComplete="off"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="center">
                          </InputAdornment>
                        ),
                      }}
                      variant="standard"
                    />
                  </Box>
                </div>
                <div className={styles.box_website + " col-4 "}>
                  {boxWebsite.map((item, idx) => {
                    return (
                      <>
                        <div>
                          <span className=''>{item.telegram}</span>
                        </div>
                      </>
                    )
                  })}
                </div>

              </div>
              <div className="col-12">
                <Stack spacing={2} direction="row">
                  <Button sx={{backgroundColor: "#E96962" , color: "#fff" , width : "100%"}}>بروزرسانی فروشگاه</Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index