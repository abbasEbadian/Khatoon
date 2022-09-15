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
import * as e from '../../redux/endpoints'
import axios from 'axios'
import OutlinedInput from '@mui/material/OutlinedInput';
import VendorCover from './VendorCover';
import {toast} from 'react-toastify'
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Settings({goToNext=undefined, createMode=false}) {
	const type=localStorage.getItem('typeshop')
	const user = useSelector(s=>s.auth.user)
	const [boxWebsite, setboxWebsite] = React.useState({
		name: "http://khatooneziba.ir/",
		telegram: "https://t.me/",
		instagram: "https://instagram.com/",
		website: "https://www"
	})
	const [business_types, setBusinessTypes] = React.useState([])
	const [provinces, setProvinces] = React.useState([])
	const [business, setBusiness] = React.useState(null);
	const [province, setProvince] = React.useState(null);
	const [city, setCity] = React.useState(null);
	const [cities, setCities] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [checked, setChecked] = React.useState(false);
	const [checkedcolor,setCheckedcolor]=React.useState("");


	const [initData, setInitData] = React.useState({
		name: "",
		message: "",
		username: "",
		businesstype_id: 0,
		about: "",
		mobile: "",
		phone: "",
		province: "",
		city: "",
		address: "",
		instagram_address: "",
		website_address: "",
		telegram_address: "",
		type:"",
		marketer_name:"",
		company_name:"",
	})
	const handleChange = (event) => {
		setChecked(event.target.checked);
		if(event.target.checked===true){
			setCheckedcolor("#ffad14")
		}else{
			setCheckedcolor("")
		}
	  };
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
	const getInitialProps = async () => {
		try {
			const res = await fetch(e.GET_BUSINESS_TYPES_AND_PROVINCES)
			const result = await res.json()
			setProvinces(result?.provinces || [])
			setBusinessTypes(result?.business_types || [])
		}
		catch (e) {
			console.log(e)
		}

	}
	React.useEffect(() => {
		getInitialProps()
		console.log(localStorage.getItem('typeshop'))
	}, [])
	React.useEffect(() => {
		if(user && user.market)
		setInitData({
			name: user.market.name,
			message: user.market.message,
			username: user.market.username,
			businesstype_id: user.market.business_type?.id,
			about: user.market.about,
			mobile: user.market.mobile,
			phone: user.market.phone,
			province: user.market.province_id?.id,
			city: user.market.city_id?.id,
			address: user.market.address,
			instagram_address: user.market.instagram_address,
			website_address: user.market.website_address,
			telegram_address: user.market.telegram_address,
			type: type,
			marketer_name: user.market.marketer_name,
			company_name: user.market.company_name,
		})
		get_cities( user?.market?.province_id?.id)
	}, [user])


	const handleProvinceChange = (event) => {
		setProvince(event.target.value);
	};


    const submit = (event)=>{
		if(loading) return 
        try{
            event.preventDefault();
            const data = {
                name: event.target.elements.name.value,
                message: event.target.elements.message.value,
                username: event.target.elements.username.value,
                businesstype_id: event.target.elements.businesstype_id.value,
                about: event.target.elements.about.value,
                mobile: event.target.elements.mobile.value,
                phone: event.target.elements.phone.value,
                province: event.target.elements.province.value,
                city: event.target.elements.city.value,
                address: event.target.elements.address.value,
                instagram_address: event.target.elements.instagram_address.value,
                website_address: event.target.elements.website_address.value,
                telegram_address: event.target.elements.telegram_address.value,
				type: type,
                image: event.target.elements.avatar?.files[0],
                cover: event.target.elements.cover?.files[0],
				marketer_name:event.target.elements.marketer_name,
				company_name:event.target.elements.company_name
              
            }
            const dform = new FormData()
            for (let key of Object.keys(data)) {
                dform.append(key, data[key])
            }
            // if(!data.image){
            //     toast.error("نصویر آواتار الزامیست")
            //     return
            // }
			 setLoading(true)
            axios.post(e.UPDATE_MARKET_DETAIL, dform, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response=>{
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
	const changeInitData = (e, key)=>{
		setInitData(s=>{
			return{ 
				...s,
				[key]: e.target?.value
			}
		})
		if(key === "province")
			get_cities(e.target.value)
	}
	return (
		<section id="setting-profile">
			<div className="row p-4 justify-content-center">
				<div className="col-xxl-8 col-12">
					<VendorCover editMode createMode={createMode}/>
					<form className='row align-items-center ' onSubmit={submit}>
						<div className="col-lg-6 col-12">
							<Box >
								<TextField
									required
									id="input-with-icon-textfield"
									label="نام غرفه"
									placeholder="دفترهای پرنیان"
									variant="outlined"
									fullWidth
									name="name"
									color="main"
									value={initData.name}
									onChange={e=>changeInitData(e, "name")}

								/>
							</Box>
						</div>
						{initData.type==='haghighi'?
						<div className="col-lg-6 col-12">
						<Box >
							<TextField
								required
								id="input-with-icon-textfield"
								label="نام غرفه‌دار"
								variant="outlined"
								fullWidth
								helperText="این نام در سایت نمایش داده می شود."
								name="name"
								color="main"
								value={initData.marketer_name}
								onChange={e=>changeInitData(e, "marketer_name")}

							/>
						</Box>
					</div>
						:
						<div className="col-lg-6 col-12">
						<Box >
							<TextField
								required
								id="input-with-icon-textfield"
								label="نام کامل شرکت"
								variant="outlined"
								fullWidth
								name="name"
								color="main"
								value={initData.company_name}
								onChange={e=>changeInitData(e, "company_name")}

							/>
						</Box>
					</div>}
						<div className="col-12">
							<Box >
								<TextField
									required
									label="پیام غرفه"
									placeholder="متن پیام غرفه‌دار اینجا نمایش داده می‌شود"
									color="main"
									variant="outlined"
									fullWidth
									name="message"
									value={initData.message}
									onChange={e=>changeInitData(e, "message")}
								/>
							</Box>
						</div>
						<div className="col-12 d-flex align-items-start flex-wrap ">
							<div className="col-lg-9 col-12 order-2 order-lg-1">
								<Box >
									<TextField
										fullWidth
										required
										id="input-with-icon-textfield"
										label="آدرس غرفه"
										type="text"
										color="main"

										autoComplete="off"
										placeholder="parnian-books"
										helperText="این قرار است لینک غرفه شما یاشد پس درست واردکنید."
										startAdornment={
											<InputAdornment position="center">
												{"http://khatooneziba.ir/"}
											</InputAdornment>
										}
										variant="outlined"
										inputProps={{
											dir: "ltr"
										}}
										name="username"
										value={initData.username}
										onChange={e=>changeInitData(e, "username")}
									/>
								</Box>
							</div>
							<div className={"box_website " + " col-lg-3 col-12 order-1 order-lg-1"}>
								<TextField
									disabled
									variant="outlined"
									fullWidth
									color="main"
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
									color="main"
									variant="outlined"
									fullWidth
									inputProps={{
										dir: "ltr"
									}}
									value={initData.businesstype_id}
									// onChange={handleBusinessChange}
									name="businesstype_id"
									defaultValue={initData.businesstype_id}
									onChange={e=>changeInitData(e, "businesstype_id")}

								>
									{business_types?.map(item => {
										return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
									})}
								</TextField>
							</Box>
						</div>
						<div className="col-12">
							<Box sx={{ minWidth: 120 }}>
								<TextField
									id="outlined-multiline-static"
									label="درباره غرفه"
									multiline
									rows={4}
									fullWidth
									color="main"
									required
									name="about"
									value={initData.about}
									onChange={e=>changeInitData(e, "about")}
								>
								</TextField>
							</Box>
						</div>
						<div className="col-6">
							<Box>
								<TextField
									required
									label="شماره همراه"
									type="phonenumber"
									variant="outlined"
									fullWidth
									color="main"
									placeholder="09"
									inputProps={{
										dir: "ltr"
									}}
									name="mobile"
									value={initData.mobile}
									onChange={e=>changeInitData(e, "mobile")}
								/>
							</Box>
						</div>
						<div className="col-6">
							<Box>
								<TextField
									required
									label="شماره دوم"
									type="phonenumber"
									variant="outlined"
									fullWidth
									color="main"
									placeholder="021"
									inputProps={{
										dir: "ltr"
									}}
									name="phone"
									helperText="ترجیحا شماره ثابت به همراه کد استان وارد شود."
									value={initData.phone}
									onChange={e=>changeInitData(e, "phone")}
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
									color="main"
									inputProps={{
										dir: "ltr"
									}}
									name="province"
									value={initData.province}
									onChange={e=>changeInitData(e, "province")}
								>
									{provinces?.map(item => {
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
									color="main"
									inputProps={{
										dir: "ltr"
									}}
									name="city"
									value={initData.city}
									onChange={e=>changeInitData(e, "city")}
								>
									{
										initData.province ?
											cities.map(ct => {
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
									color="main"
									rows={4}
									fullWidth
									required
									name="address"
									value={initData.address}
									onChange={e=>changeInitData(e, "address")}
								/>
							</Box>
						</div>
						<div className="col-12 d-flex align-items-center">
							<div className="col-9">
								<Box>
									<TextField
										id="input-with-icon-textfield"
										label="آدرس اینستاگرام"
										type="text"
										color='main'
										autoComplete="off"
										InputProps={{
											dir: "ltr"
										}}
										variant="outlined"
										fullWidth
										name="instagram_address"
										defaultValue={initData.instagram_address}
										onChange={e=>changeInitData(e, "instagram_a")}
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
										color="main"
										type="text"
										autoComplete="off"
										InputProps={{
											dir: "ltr"
										}}
										variant="outlined"
										fullWidth
										name="website_address"
										defaultValue={initData.website_address}
										onChange={e=>changeInitData(e, "website_add")}
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
										id="input-with-icon-textfield"
										label="آدرس تلگرام"
										type="text"
										color="main"
										autoComplete="off"
										InputProps={{
											dir: "ltr"
										}}
										variant="outlined"
										fullWidth
										name="telegram_address"
										defaultValue={initData.telegram_address}
										onChange={e=>changeInitData(e, "telegram_ad")}
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
						    <FormGroup className="my-3">
                                <FormControlLabel control={<Checkbox  checked={checked} onChange={handleChange} />} label="تمامی مسئولیت های حقوقی و کیفری فروش محصولات را می پذیرم." />
                            </FormGroup>
							<Stack spacing={2} direction="row">
								<Button style={{borderRadius:"20px",backgroundColor:checkedcolor}} variant="contained" fullWidth type="submit" disabled={!checked}>
									{loading? <CircularProgress color="white" size={20} /> : <span>
										{!createMode? 
										<span>{"بروزرسانی غرفه"}</span>
										:<span> {"ساخت غرفه"}</span>}
									</span>}
								</Button>
							</Stack>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}




export default Settings