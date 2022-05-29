import React from 'react'
import ProductsFilters from '../../components/Products/ProductsFilters'
import ProductsProducts from '../../components/Products/ProductsProducts'
import ProductsSortOptions from '../../components/Products/ProductsSortOptions'
import VendorCover from '../../components/Vendor/VendorCover'
import * as e from '../../redux/endpoints'


function Products({categories, products, vendor}) {
    const [ page, setPage ] = React.useState() 
  return (
    <section id="products-main" className="container_custom vendor-page">
        
        <div className="row">
            <div className="col-12 col-lg-3">
                <ProductsFilters categories={categories}/>
            </div>
            <div className="col-12 col-lg-9">
                <VendorCover vendor={vendor}/>
                <ProductsSortOptions />
                <ProductsProducts products={products} page={page} setPage={setPage}/>
            </div>
        </div>
    </section>
  )
}
export async function getServerSideProps ({query}){
    let categories = []
    let products = []
    let vendor = {}
    let {vendor_username} = query
    try{
        const res        = await fetch(e.GET_CATEGORIES)
        categories   = await  res.json()

        const res2    = await fetch(e.GET_PRODUCTS)
        products   = await  res2.json()

        const res3 = await fetch(e.GET_VENDOR(vendor_username))
        vendor = await res3.json()
    }
    catch(e){
        console.log(e)
    }
    return {
        props: {
            categories,
            products: products?.products || [],
            products_length: products?.products_length || [],
            vendor
        }
    }
}
export default Products