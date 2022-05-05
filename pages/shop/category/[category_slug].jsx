import React from 'react'
import ProductsFilters from '../../../components/Products/ProductsFilters'
import ProductsProducts from '../../../components/Products/ProductsProducts'
import ProductsSortOptions from '../../../components/Products/ProductsSortOptions'
import * as e from '../../../redux/endpoints'


function Products({categories, products}) {
    console.log(products)
  return (
    <section id="products-main" className="container_custom">
        <div className="row">
            <div className="col-12 col-lg-3">
                <ProductsFilters categories={categories}/>
            </div>
            <div className="col-12 col-lg-9">
                <ProductsSortOptions />
                <ProductsProducts products={products}/>
            </div>
        </div>
    </section>
  )
}
export async function getServerSideProps ({query}){
    let categories = []
    let products = []
    let {category_slug} = query
    try{
        category_slug = category_slug.split('-')[0]
        const res    = await fetch(e.GET_CATEGORIES)
        categories   = await  res.json()

        const res2    = await fetch(e.GET_CATEGORY_PRODUCTS(category_slug))
        products   = await  res2.json()
    }
    catch(e){
        console.log(e)
    }
    return {
        props: {
            categories,
            products
        }
    }
}
export default Products