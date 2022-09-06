import { Checkbox, FormControlLabel, FormGroup, Switch } from '@mui/material'
import React from 'react'
import ProductSendOptions from './ProductSendOptions'
import ProductsPriceSlider from './ProductsPriceSlider'
import ProductScoreFilter from './ProductScoreFilter'

function ProductsFilters({categories=[]}) {

    return (  
        <div className="products-filters">

            <div className="products-filterbox filter-search">
                <p className="filter-title mb-3">جست و جو در نتایج</p>
                <input type="text" placeholder="نام محصول یا برند" className="form-control form-conrtrol-sm" style={{borderRadius:"20px",backgroundColor:"pink"}} />
            </div>

            <div className="products-filterbox filter-available">
                <FormControlLabel control={<Switch defaultChecked color="main" />} label={"کالاهای موجود"} />
                <FormControlLabel control={<Switch defaultChecked color="main"/>} label={"ارسال رایگان"} />
            </div>

            <div className="products-filterbox filter-categories">
                <FormGroup>
                    {categories.length> 0 && categories.map((item, idx)=>{
                        return <FormControlLabel key={item.id} control={<Checkbox  sx={{ fontSize: "28px" }}/>}  sx={{ fontSize: "28px" }} label={item.persian_name} />
                    })}
                </FormGroup>
            </div>

            <div className="products-filterbox filter-search">
                <p className="filter-title mb-3">محدوده قیمت</p>
                
                <ProductsPriceSlider />

               
            </div>
            <div className="products-filterbox">
            <p className='filter-title mb-3'>استان و شهر غرفه‌دار</p>
                <ProductSendOptions/>
            </div>
            <div className="products-filterbox">
            <p className='filter-title mb-3'>امتیاز محصول</p>
                <ProductScoreFilter/>
            </div>
        </div>
    )
}


export default ProductsFilters