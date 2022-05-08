import React from 'react'
import ProductAttributes from './ProductAttributes'

function ProductSpecs({product}) {
  return (
    <div className="product-specs mt-4">
        <b>ویژگی های محصول</b>
        <ProductAttributes attributes={product.productattribute_set}/>

        <br />
        <b>درباره محصول</b>
        <div className="product-about  text-break my-3"
          dangerouslySetInnerHTML={{ __html:product.description}}
        ></div>
    </div>
  )
}

export default ProductSpecs