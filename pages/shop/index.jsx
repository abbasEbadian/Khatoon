import React from 'react'
import ProductsFilters from '../../components/Products/ProductsFilters'
import ProductsProducts from '../../components/Products/ProductsProducts'
import ProductsSortOptions from '../../components/Products/ProductsSortOptions'
import * as e from '../../redux/endpoints'


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
export async function getServerSideProps (){
    let categories = []
    try{
        const res        = await fetch(e.GET_CATEGORIES)
        categories   = await  res.json()
    }
    catch(e){
        console.log(e)
    }
    return {
        props: {
            categories,
            products: [
                {
                    id: 1,
                    title: 'بلوز شلوار مخمل طرح پوست ماری',
                    category_id: '123',
                    seller: 'پوشاک کده نیل',
                    garanty: 'کار با کیفیت جنس اصل',
                    sendType: ' پست سفارشی',
                    count: 1,
                    image: '/static/img/imgs/image 10.png',
                    price: '500000',
                    priceWithDiscount: '400000'
                  },
                  {
                    id: 2,
                    title: 'بلوز شلوار مخمل طرح پوست ماری',
                    category_id: '123',
                    seller: 'پوشاک کده نیل',
                    garanty: 'کار با کیفیت جنس اصل',
                    sendType: ' پست سفارشی',
                    count: 1,
                    image: '/static/img/imgs/image 10.png',
                    price: '500000',
                    priceWithDiscount: '400000'
                  },
            ]
        }
    }
}
export default Products