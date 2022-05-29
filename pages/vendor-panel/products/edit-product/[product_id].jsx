import React from 'react'

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Alert, AlertTitle, Autocomplete, Checkbox, FormControlLabel } from '@mui/material';

import axios from 'axios'
import {toast} from 'react-toastify'
import { useRouter } from 'next/router';
import { Circles } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux'

import * as e from '../../../../redux/endpoints'
import withAuth from '../../../../redux/withAuth'

import VendorPanelBase from '../../../../components/VendorPanelBase'
import ProductImages from '../../../../components/Product/ProductImages'
import ProductAttributeAdd from '../../../../components/Product/ProductAttributeAdd';
import BlurLoader from '../../../../components/dialog/BlurLoader';



function EditProduct({ attributes, attributeValues }) {
    const router = useRouter()
    const [category, setCategory] = React.useState(null);
    const [extra, setExtra] = React.useState("");
    const [sure, setSure] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const categories = useSelector(s=>s.main.flat_categories)
    const [combinationData, setCombinationData] = React.useState([])
    

    const {product_id} = router.query
    const {user} = useSelector(s=>s.auth)
    const formRef = React.useRef()
    const handleCategory = (event, value) => {
        setCategory(value);
    };
    const [attrs, setAttrs] = React.useState([])
    const [initCombinations, setInitCombinations] = React.useState(undefined)
    const [mainAttrs, setMainAttrs] = React.useState([])


    // EditProduct
    const editProduct = (event)=>{
        event.preventDefault();
        try{
            if(attrs.length && Array.isArray(combinationData)){
                toast.error("لطفا ابتدا دکمه « تایید مقادیر» را فشار دهید.")
                return
            }
            const data = {
                name: event.target.elements.name.value,
                description: event.target.elements.description.value,
                price: event.target.elements.price.value,
                preperation_time: event.target.elements.preperation_time.value,
                count: event.target.elements.count.value,
                category_id: event.target.elements.category_id.value,
                image: event.target.elements.image.files[0],
                image1: event.target.elements.image1.files[0],
                image2: event.target.elements.image2.files[0],
                image3: event.target.elements.image3.files[0],
                image4: event.target.elements.image4.files[0],
                attributes : JSON.stringify(mainAttrs),
                extra_description: extra,
                // variants:JSON.stringify( _.groupBy(attrs, i=>i.variantID)),
                combinationData: JSON.stringify(combinationData),
                pk: product_id,
            }
            const dform = new FormData()
            for (let key of Object.keys(data)) {
                dform.append(key, data[key])
            }
            
            setLoading(true)
            axios.post(e.UPDATE_PRODUCT, dform, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response=>{
                const {data} = response
                toast(data.message, {type: (data.error? "error": "success")})
                if(!data.error)
                router.push('/vendor-panel/products')
                if(data.extra){
                    toast.warning(data.extra)
                }
            })
            .catch(error=>{
                console.log(error)
                toast.error("خطا در ارتباط ")
            })
            .finally(f=>setLoading(false))
        }
        catch(e){console.log(e)}

    }


    const generate_combinations = (rows) => {
        const d = {};
        rows.map((row) => {
            const key = row.attributes.sort((a,b)=>a.attribute_id.name - b.attribute_id.name).map(i=>i.value_id.name).join("-")
            const _attr = row.attributes.sort((a,b)=>a.attribute_id.name - b.attribute_id.name).map(i=>i.attribute_id.name).join("-")
            d[key] =  { price: row.price, count: row.count, attribute:_attr};
        });
        return d
      };


    const [initData, setInitData] = React.useState()
    React.useEffect(()=>{
        if(!product_id) return;
        const product = user?.market?.products?.find(i=>i.id === +product_id)  || null
        if(product){
            const d = {
                name: product.name,
                description: product.description,
                price: product.price,
                preperation_time: product.preperation_time,
                count: product.count,
                image: product.image,
                image1: product.image_1,
                image2: product.image_2,
                image3: product.image_3,
                image4: product.image_4,
            }
            setInitData(d)
            setCategory(product.category_id)
            setExtra(product.extra_description)
            let attrs =  product.attributes
            setMainAttrs(attrs.map((item, idx)=>{
                return {attribute: item.attribute_id.name, attributeValue: item.value_id?item.value_id.name: ""}
            }))
            const variants = product.templates
            const attr_names = variants &&variants[0]&& variants[0].attributes.length && variants[0].attributes.map(attr=> attr.attribute_id.name) || []
            attrs = []
            if(attr_names.length > 0){
                attr_names?.map(a=>attrs.push({attribute: a, attributeValue: "", count: 0, price: 0}))
                variants.map(variant=>{
                    variant.attributes.map(attr=>{
                        const _attr = attrs.find(w=>w.attribute===attr.attribute_id.name)
                        if(attr.value_id && attr.value_id.name !== 'undefined')
                            (_attr["attributeValue"] += attr.value_id.name + ",")
                        })
                })
                setInitCombinations(generate_combinations(variants))
                const fattrs = []
                const battrs = {}
                attrs.map(i=>{
                    const a = new Set(i.attributeValue.replace("undefined", "").split(",").filter(v=>v))
                    const key = Array.from(a).sort().join(",")
                    fattrs.push({
                        ...i,
                        attributeValue: key
                    })
                })
                setAttrs(fattrs)
            }
            

        }
        else{
            if(!product_id && !user){
                toast.error("محصول یافت نشد")
                router.replace("/vendor-panel/products")
            }
        }
    }, [user, product_id])

    return (
        <section id="add-product">
            <VendorPanelBase active="products" title="ویرایش">
                {initData?
                <div className="row p-2 p-md-4">
                    <div className="col-xxl-10 col-12 mx-auto">
                        <form className='row align-items-center' onSubmit={editProduct} ref={formRef}>

                            <Alert severity="info">
                                <AlertTitle>اطلاعات عمومی</AlertTitle>
                            </Alert>
                            <div className="col-lg-6 col-12">
                                <Box >
                                    <TextField
                                        required
                                        label="نام محصول"
                                        placeholder="آیفون 12 پرومکس 256 گیگ NOT ACTIVE"
                                        variant="outlined"
                                        fullWidth
                                        name="name"
                                        defaultValue={initData.name}
                                    />
                                </Box>
                            </div>
                          
                            <div className="col-lg-6 col-12">
                                <Box>
                                    <Autocomplete
                                        disablePortal
                                        options={categories.filter(i=>i.parent_id !== null)}
                                        renderInput={(params) => <TextField name="category_id" {...params} label="دسته بندی" />}
                                        value={category}
                                        onChange={(e,v) => handleCategory(e, v)}
                                        noOptionsText="موردی یافت نشد"
                                        groupBy={(option) => (
                                            option.parent_id.parent_id?.persian_name? option.parent_id.parent_id.persian_name +  " > " : "") + option.parent_id.persian_name }
                                        getOptionLabel={(option) => option.persian_name}
                                    />
                                    
                                </Box>
                            </div>
                            <div className=" col-12">
                                <Box sx={{ minWidth: 120 }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="درباره محصول"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        required
                                        name="description"
                                        defaultValue={initData.description}
                                    >
                                    </TextField>
                                </Box>
                            </div>
                            <div className="col-md-6 col-12">
                                <Box>
                                    <TextField
                                        required
                                        label="قیمت"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="200000"
                                        inputProps={{
                                            dir: "ltr"
                                        }}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" sx={{pl:1, ml:1,}} >تومان</InputAdornment>
                                        }}
                                        name="price"
                                        defaultValue={initData.price}

                                    />

                                </Box>
                            </div>
                            <div className="col-md-6 col-12">
                                <Box>
                                    <TextField
                                        required
                                        label="زمان آماده سازی"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="1"
                                        type="number"
                                        name="preperation_time"
                                        defaultValue={initData.preperation_time}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" sx={{pl:1, ml:1}} >روز کاری</InputAdornment>
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box>
                                    <TextField
                                        required
                                        label="تعداد موجود"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="1"
                                        type="number"
                                        name="count"
                                        defaultValue={initData.count}
                                        className="mt-4"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" sx={{pl:1, ml:1}} >عدد</InputAdornment>
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Alert severity="info">
                                    <AlertTitle>تصاویر</AlertTitle>
                                </Alert>
                                <br />
                                <ProductImages initData={initData} />
                            </div>
                            
                            <div className="col-12 ">
                                <Alert severity="info">
                                    <AlertTitle>ویژگی های کلی و ثابت</AlertTitle>
                                    <small>این ویژگی ها در قیمت تاثیر گذار نیستند.</small><br />
                                    <small>برای مثال ، طرح یقه بلوز </small>
                                </Alert>
                                <ProductAttributeAdd attributes={attributes} attributeValues={attributeValues} attrs={mainAttrs} setAttrs={setMainAttrs}  />
                            </div>
                            <div className="col-12 ">
                                <Alert severity="info">
                                    <AlertTitle>ویژگی های خاص</AlertTitle>
                                    <small>این ویژگی ها امکان تغییر قیمت را دارند </small>
                                        <br />
                                    <small>برای مثال یک محصول در دو رنگ متفاوت باشد یا یک لباس در چند سایز.</small>
                                        <br />
                                    <small>برای افزودن قابلیت انتخاب برای خریدار ، از این ویژگی ها استفاده نمایید.</small>
                                </Alert>
                                
                                <ProductAttributeAdd initCombinations={initCombinations}setCombinationData={setCombinationData} attributes ={attributes} attributeValues={attributeValues} attrs={attrs} setAttrs={setAttrs} showVariant/>
                                

                            </div>
                            <div className="col-12">
                                <label>
                                    در صورتی که نیاز به دریافت اطلاعات بیشتر از سمت خریدار  دارید ، عنوان درخواست را اینجا وارد نمایید
                                    <br />
                                    <small>برای مثال: نام برای حکاکی روی دستبند</small>
                                </label>
                                <input type="text" className="form-control py-3 mt-2" value={extra} onChange={e=>setExtra(e.target.value)} placeholder="عنوان درخواست"/>
                            </div>
                            <div className="col-12">
                                <FormControlLabel control={<Checkbox value={sure} onClick={e=>setSure(s=>!s)} />} label="آیا از درستی اطلاعات اطمینان دارید؟" />

                                <Button color="main" variant="contained" fullWidth type="submit" disabled={!sure || loading} >
                                    {loading?<Circles height={20} width={30} color="white"/>: <span>اعمال تغییرات</span>}
                                </Button>
                            </div>


                        </form>
                    </div>
                </div>:
                    <BlurLoader />
                }
            </VendorPanelBase>
        </section>
    )
}


export async function getServerSideProps() {
    let attributes = []
    let attributeValues = []
    try {
        const res = await fetch(e.GET_ATTRIBUTES)
        const result = await res.json()
        console.log(result)
        attributes = result.attributes
        attributeValues = result.attributeValues
    }
    catch (e) {
        console.log(e)
    }
    return {
        props: {
            attributes,
            attributeValues,
        }
    }
}
export default withAuth(EditProduct) 