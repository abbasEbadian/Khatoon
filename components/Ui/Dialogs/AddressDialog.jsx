import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {toast} from 'react-toastify'
import axios from 'axios'
import {create_address} from "../../../redux/actions"
import * as e from "../../../redux/endpoints"
import {useDispatch,useSelector} from 'react-redux'

function AddressDialog({open, handleClose, _address=null, create_mode=false}) {
    const dispatch = useDispatch()
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
    const [formData, setFormData] = React.useState(_address || {
        province_id: "",
        city_id: "",
        address: "",
        mobile: "",
        phone: "",
        postal: "", 
        create: create_mode 
    });
    const [cities, setCities] = React.useState([]);
    const provinces = useSelector(s=>s.main.provinces)

    const handleInputs = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })

        if(e.target.name === "province_id") get_cities(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(create_address(formData))
        .then(({error, message})=>{
            toast(message, {type:(error? "error": "success")})
            if(!error)
                handleClose()
        })
        .catch(e=>{
            console.log(e)
            toast.error('خطا در ارتباط')
        })
    }
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
      React.useEffect(()=>{
          if (Object.keys(_address).length> 0){
              setFormData({
                  ..._address,
                  province_id: _address.province_id.id,
                  city_id: _address.city_id.id,
                  create: create_mode,
                })
                get_cities(_address.province_id.id)
            }
      }, [_address,create_mode])
  return (
    <Modal
    open={open}
    onClose={handleClose}
    className="modal-size"
>
    <form action="" onSubmit={e => handleSubmit(e)}>
    <Box sx={style} >
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="col-12 py-4 ps-0">
                <TextField sx={{ width: '100%' }}
                    name="province_id"
                    onChange={handleInputs}
                    defaultValue={formData.province_id}
                    label="استان محل سکونت"
                    select
                    required 
                >
                    {
                        provinces.map((p)=>{
                            return <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
                        })
                    }
                </TextField>
            </div>

            <div className="col-12 py-4 ps-0">
                <TextField sx={{ width: '100%' }}
                    id="outlined-textarea"
                    onChange={handleInputs}
                    label="شهرستان"
                    name="city_id"
                    defaultValue={formData.city_id}
                    select
                    required
                >
                    {
                        cities.map((p)=>{
                            return <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
                        })
                    }
                </TextField>
            </div>
            <div className="col-12 py-4 ps-0">
                <TextField sx={{ width: '100%' }}
                    id="outlined-textarea"
                    onInput={e => handleInputs(e)}
                    label="آدرس"
                    name="address"
                    defaultValue={formData.address}
                    multiline
                    required
                    inputProps={{
                        minLength: 10 
                    }}
                />
            </div>
            <div className="col-12 py-4 ps-0">
                <TextField sx={{ width: '100%' }}
                    id="outlined-textarea"
                    onInput={e => handleInputs(e)}
                    label="شماره همراه"
                    name="mobile"
                    defaultValue={formData.mobile}
                    required
                    inputProps={{
                        minLength: 11 
                    }}
                />
            </div>
            <div className="col-12 py-4 ps-0">
                <TextField sx={{ width: '100%' }}
                    onInput={e => handleInputs(e)}
                    id="outlined-textarea"
                    label="شماره دوم"
                    name="phone"
                    defaultValue={formData.phone}
                    required
                    inputProps={{
                        minLength: 11 
                    }}
                />
            </div>
            <div className="col-12 py-4 ps-0">
                <TextField sx={{ width: '100%' }}
                    id="outlined-textarea"
                    onInput={e => handleInputs(e)}
                    label="کدپستی"
                    name="postal"
                    defaultValue={formData.postal}
                    required
                    inputProps={{
                        minLength: 10 
                    }}
                />
            </div>
            <div className="col-12 py-4  ">
                <Stack spacing={2} direction="row">
                    <Button variant="contained" type='submit' style={{ backgroundColor: "#E96962" }}>ثبت آدرس</Button>
                    <Button variant="contained" style={{ backgroundColor: "#123C55" }} onClick={handleClose}>بستن</Button>
                </Stack>

            </div>
        </Typography>
    </Box>
    </form>
</Modal>
  )
}

export default AddressDialog