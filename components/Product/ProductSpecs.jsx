import React from 'react'

function ProductSpecs({product}) {
  return (
    <div className="product-specs mt-4">
        <b>ویژگی های محصول</b>
        {product.attributes?.map((item, idx)=>{
            return <div key={item.name} className="product-attribute">
                <b>{item.name}</b> { " : " }
                <span>{item.value}</span>
            </div>
        })}

        <br />
        <b>درباره محصول</b>
        <div className="product-about">{product.about}</div>
    </div>
  )
}

export default ProductSpecs