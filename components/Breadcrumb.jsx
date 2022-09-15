import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const get_url = (category)=>{
    return category.id + "-" + (category.persian_name.replace(/[\s]+/g, '-'))
}

export default function Breadcrumb({product}) {
    console.log(product)
  return (
    <div role="presentation" onClick={handleClick} className=" bg-transparent px-2 py-1 rounded">
      <Breadcrumbs aria-label="breadcrumb"  >
        <Link underline="hover" color="inherit" href="/">
          <a>خاتون زیبا</a>
        </Link>
            
            {product?.category_id?.parent_id?.parent_id &&
                <Link
                    underline="hover"
                    color="inherit"
                    href={"/shop/category/" + get_url(product.category_id.parent_id.parent_id)}
                >
                <a>
                    {product.category_id.parent_id.parent_id.persian_name}
                </a>
            </Link>
            }
            {product?.category_id?.parent_id &&
                <Link
                    underline="hover"
                    color="inherit"
                    href={"/shop/category/" +get_url(product.category_id.parent_id)}
                >
                <a>
                    {product.category_id.parent_id.persian_name}
                </a>
            </Link>
            }
            {product?.category_id?.parent_id &&
                <Link
                    underline="hover"
                    color="inherit"
                    href={"/shop/category/" +(product.category_id.url)}
                >
                <a>
                    {product.category_id.persian_name}
                </a>
            </Link>
            }
        <Link
          underline="hover"
          color="text.primary"
          href="#"
          aria-current="page"
        >
          {product?.name}
        </Link>
      </Breadcrumbs>
    </div>
  );
}