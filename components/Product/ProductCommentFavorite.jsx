import React from 'react'
import Link from 'next/link'

export default function ProductCommentFavorite({product}) {
  return (
    <div>          
        <Link href="#comments">
        {product?.favorite_count >0 ?
            null
        :null}
        </Link>

    </div>
  )
}
