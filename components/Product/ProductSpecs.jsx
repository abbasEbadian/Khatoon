import React from 'react'
import ProductAttributes from './ProductAttributes'
import {IconButton} from '@mui/material'
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ProductSpecs({product, current, setCurrent}) {
  const [classes, setclasses] = useState({
    atrrs:"rotup",
    desc:"rotup",
  });
  const [values, setvalues] = useState({
    atrrs:true,
    desc:true,
  })
  const HandleAttributes=()=>{
    if(values.attrs===true){
      setclasses({attrs:"rotdown"});
      setvalues({attrs:false});
    }
    else{
      setclasses({attrs:"rotup"});
      setvalues({attrs:true});

    }
  }
  const HandleDescriptions=()=>{
    if(values.desc===true){
      setclasses({desc:"rotdown"});
      setvalues({desc:false});
    }
    else{
      setclasses({desc:"rotup"});
      setvalues({desc:true});

    }
  }
  return (
    <div className="product-specs mt-4">
      <div className='d-flex justify-content-between'>
         <h5>ویژگی های محصول</h5>
         <IconButton onClick={HandleAttributes} className={classes.atrrs}>
           <KeyboardArrowDownIcon/>
         </IconButton>
      </div>
        { values.atrrs && <div className="px-3">
        <ProductAttributes product={product} current={current} setCurrent={setCurrent}/>
        </div>}
        <br/>
        <hr/>
        <br />
        <div className='d-flex justify-content-between'>
        <h5>درباره محصول</h5>
         <IconButton onClick={HandleDescriptions} className={classes.desc}>
           <KeyboardArrowDownIcon/>
         </IconButton>
        </div>
        {values.desc &&<div className="product-about  text-break my-3 px-3"
          dangerouslySetInnerHTML={{ __html:product.description}}
        ></div>}
    </div>
  )
}

export default ProductSpecs