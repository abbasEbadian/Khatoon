import { Pagination } from '@mui/material'
import React from 'react'
import BoxItem from '../Ui/BoxItem/BoxItem'


function ProductsProducts({ products, page=1, setPage }) {
  return (
    <div className="products-filterbox products-list">
        <div className="row">
            {products.length? products?.map((product, idx)=>{
                
                return <div className="col-xl-3 col-lg-4 col-sm-6 col-12" key={product.id}>
                        <BoxItem  item={product} type="product"/>
                    </div>
            }) :<span> نتیجه ای یافت نشد. </span>}
        </div>
        {products.length > 20 ?
          <Pagination count={Math.floor(products.length / 20)} page={page} onChange={(e, v)=>setPage(v)} />
        :null}

    </div>
  )
}

export default ProductsProducts