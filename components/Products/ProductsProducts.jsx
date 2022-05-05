import React from 'react'
import BoxItem from '../Ui/BoxItem/BoxItem'


function ProductsProducts({products}) {
  return (
    <div className="products-filterbox products-list">
        <div className="row">
            {products?.map((product, idx)=>{
                
                return <div className="col-xl-3 col-lg-4 col-sm-6 col-12" key={product.id}>
                        <BoxItem  item={product} type="product"/>
                    </div>
            }) || "نتیجه ای یافت نشد."}
        </div>
    </div>
  )
}

export default ProductsProducts