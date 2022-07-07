import React from 'react'
import ProductsFilters from '../../components/Products/ProductsFilters'
import ProductsProducts from '../../components/Products/ProductsProducts'
import ProductsSortOptions from '../../components/Products/ProductsSortOptions'
import VendorCover from '../../components/Vendor/VendorCover'
import * as e from '../../redux/endpoints'


function Products({categories, vendor}) {
    const [ page, setPage ] = React.useState() 
    const [products, setProducts]= React.useState([])
    React.useEffect(() =>{
        if(vendor) setProducts(vendor.products)
    }, [vendor, products])
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
    let vendor = {}
    let {vendor_username} = query
    try{
        const res        = await fetch(e.GET_CATEGORIES)
        categories   = await  res.json()
        const res3 = await fetch(e.GET_VENDOR(vendor_username))
        vendor = await res3.json()
    }
    catch(e){
        console.log(e)
    }
    return {
        props: {
            categories: categories.flat_categories || [],
            vendor
        }
    }
}
export default Products