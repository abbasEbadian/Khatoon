import React from 'react'
import ProductAttributes from './ProductAttributes'

function ProductSpecs({product, current, setCurrent}) {
  return (
    <div className="product-specs mt-4">
        <b>ویژگی های محصول</b>
        <ProductAttributes product={product} current={current} setCurrent={setCurrent}/>
        <br />
        <b>درباره محصول</b>
        <div className="product-about  text-break my-3"
          dangerouslySetInnerHTML={{ __html:product.description}}
        ></div>
    </div>
  )
}

export default ProductSpecs