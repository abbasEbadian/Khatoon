import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import VendorPanelBase from '../../../components/VendorPanelBase'
import ProductImages from '../../../components/Product/ProductImages'
import * as e from '../../../redux/endpoints'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import ProductAttributeAdd from '../../../components/Product/ProductAttributeAdd';
import { Alert, AlertTitle, Autocomplete, Checkbox, FormControlLabel } from '@mui/material';
import { Circles } from 'react-loader-spinner';
import { useRouter } from 'next/router';
import withAuth from '../../../redux/withAuth'
import NumberFormat from 'react-number-format';
import { profile } from '../../../redux/actions';


const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
        <NumberFormat
          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          isNumericString
          prefix=""
        />
      );
  });

function AddProduct({ attributes, attributeValues }) {
    const router = useRouter()
    const dispatch = useDispatch()
    
    const [category, setCategory] = React.useState(null);
    const [extra, setExtra] = React.useState("");
    const [sure, setSure] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const categories = useSelector(s=>s.main.flat_categories)
    const [combinationData, setCombinationData] = React.useState([])
    
    const handleCategory = (event, value) => {
        setCategory(value);
    };
    const [attrs, setAttrs] = React.useState([])
    const [mainAttrs, setMainAttrs] = React.useState([])
    const [values, setValues] = React.useState({price: ''})

    

    const createProduct = (event)=>{
        event.preventDefault();
        try{
            console.log(attrs, combinationData,attrs.length && Array.isArray(combinationData))
            if(attrs.length && Array.isArray(combinationData)){
                toast.error("???????? ?????????? ???????? ?? ?????????? ?????????????? ???? ???????? ????????.")
                return
            }
            const data = {
                name: event.target.elements.name.value,
                description: event.target.elements.description.value,
                price: values.price,
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
                combinationData: JSON.stringify(combinationData)
            }
            const dform = new FormData()
            for (let key of Object.keys(data)) {
                dform.append(key, data[key])
            }
            if(!data.image){
                toast.error("?????????? ???????? ????????????????")
                return
            }
            setLoading(true)
            axios.post(e.CREATE_PRODUCT, dform, {
                headers:{
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response=>{
                const {data} = response
                toast(data.message, {type: (data.error? "error": "success")})
                if(!data.error){
                    diapatch(profile())
                    router.push('/vendor-panel/products')
                }
            })
            .catch(error=>{
                console.log(error)
                toast.error("?????? ???? ???????????? ")
            })
            .finally(f=>setLoading(false))
        }
        catch(e){console.log(e)}

    }
    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
    return (
        <section id="add-product">
            <VendorPanelBase active="products" title="?????????? ????????">
                <div className="row p-2 p-md-4">
                    <div className="col-xxl-10 col-12 mx-auto">
                        <form className='row align-items-center' onSubmit={createProduct} >

                            <Alert severity="info">
                                <AlertTitle>?????????????? ??????????</AlertTitle>
                            </Alert>
                            <div className="col-lg-6 col-12">
                                <Box >
                                    <TextField
                                        required
                                        label="?????? ??????????"
                                        placeholder="?????????? 12 ???????????? 256 ?????? NOT ACTIVE"
                                        variant="outlined"
                                        fullWidth
                                        name="name"
                                    />
                                </Box>
                            </div>
                          
                            <div className="col-lg-6 col-12">
                                <Box>
                                    <Autocomplete
                                        disablePortal
                                        options={categories.filter(i=>i.parent_id !== null)}
                                        renderInput={(params) => <TextField name="category_id" {...params} label="???????? ????????" />}
                                        value={category}
                                        onChange={(e,v) => handleCategory(e, v)}
                                        noOptionsText="?????????? ???????? ??????"
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
                                        label="???????????? ??????????"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        defaultValue=""
                                        required
                                        name="description"
                                    >
                                    </TextField>
                                </Box>
                            </div>
                            <div className="col-md-6 col-12">
                                <Box>
                                    <TextField
                                        required
                                        label="????????"
                                        variant="outlined"
                                        fullWidth
                                        inputProps={{
                                            dir: "ltr"
                                        }}
                                        placeholder="20000"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" sx={{pl:1, ml:1,}} >??????????</InputAdornment>,
                                            inputComponent: NumberFormatCustom,
                                        }}
                                        name="price"
                                        value={values.price}
                                        onChange={handleChange}

                                    />

                                </Box>
                            </div>
                            <div className="col-md-6 col-12">
                                <Box>
                                    <TextField
                                        required
                                        label="???????? ?????????? ????????"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="1"
                                        type="number"
                                        name="preperation_time"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" sx={{pl:1, ml:1}} >?????? ????????</InputAdornment>
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Box>
                                    <TextField
                                        required
                                        label="?????????? ??????????"
                                        variant="outlined"
                                        fullWidth
                                        placeholder="1"
                                        type="number"
                                        name="count"
                                        className="mt-4"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end" sx={{pl:1, ml:1}} >??????</InputAdornment>
                                        }}
                                    />
                                </Box>
                            </div>
                            <div className="col-12">
                                <Alert severity="info">
                                    <AlertTitle>????????????</AlertTitle>
                                </Alert>
                                <br />
                                <ProductImages />
                            </div>
                            
                            <div className="col-12 ">
                                <Alert severity="info">
                                    <AlertTitle>?????????? ?????? ?????? ?? ????????</AlertTitle>
                                    <small>?????? ?????????? ???? ???? ???????? ?????????? ???????? ????????????.</small><br />
                                    <small>???????? ???????? ?? ?????? ?????? ???????? </small>
                                </Alert>
                                <ProductAttributeAdd attributes={attributes} attributeValues={attributeValues} attrs={mainAttrs} setAttrs={setMainAttrs}  />
                            </div>
                            <div className="col-12 ">
                                <Alert severity="info">
                                    <AlertTitle>?????????? ?????? ??????</AlertTitle>
                                    <small>?????? ?????????? ???? ?????????? ?????????? ???????? ???? ?????????? </small>
                                        <br />
                                    <small>???????? ???????? ???? ?????????? ???? ???? ?????? ???????????? ???????? ???? ???? ???????? ???? ?????? ????????.</small>
                                        <br />
                                    <small>???????? ???????????? ???????????? ???????????? ???????? ???????????? ?? ???? ?????? ?????????? ???? ?????????????? ????????????.</small>
                                </Alert>
                                
                                <ProductAttributeAdd setCombinationData={setCombinationData} attributes ={attributes} attributeValues={attributeValues} attrs={attrs} setAttrs={setAttrs} showVariant/>
                                

                            </div>
                            <div className="col-12">
                                <label>
                                    ???? ?????????? ???? ???????? ???? ???????????? ?????????????? ?????????? ???? ?????? ????????????  ?????????? ?? ?????????? ?????????????? ???? ?????????? ???????? ????????????
                                    <br />
                                    <small>???????? ????????: ?????? ???????? ?????????? ?????? ????????????</small>
                                </label>
                                <input type="text" className="form-control py-3 mt-2" value={extra} onChange={e=>setExtra(e.target.value)} placeholder="?????????? ??????????????"/>
                            </div>
                            <div className="col-12">
                                <FormControlLabel control={<Checkbox value={sure} onClick={e=>setSure(s=>!s)} />} label="?????? ???? ?????????? ?????????????? ?????????????? ????????????" />

                                <Button color="main" variant="contained" fullWidth type="submit" disabled={!sure || loading} >
                                    {loading?<Circles height={20} width={30} color="white"/>: <span>?????????????? ?????????? ?? ??????????</span>}
                                </Button>
                            </div>


                        </form>
                    </div>
                </div>
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
export default withAuth(AddProduct) 