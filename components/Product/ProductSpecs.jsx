import React from 'react'
import ProductAttributes from './ProductAttributes'
import {IconButton,Button} from '@mui/material'
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ProductSpecs({product, current, setCurrent}) {
  
  const [class1, setclass1] = React.useState("rotup");
  const [class2, setclass2] = React.useState("rotup");
  const [value1, setvalue1] = React.useState(true);
  const [value2, setvalue2] = React.useState(true);

  const HandleAttributes=()=>{
    if(value1===true){
      setclass1("rotdown");
      setvalue1(false);
    }
    else{
      setclass1("rotup");
      setvalue1(true);

    }
  }
  const HandleDescriptions=()=>{
    if(value2===true){
      setclass2("rotdown");
      setvalue2(false);
    }
    else{
      setclass2("rotup");
      setvalue2(true);

    }
  }
  return (
    <div className="product-specs mt-4">
      <div className='d-flex justify-content-between w-100'>
         <h5 className="px-4">ویژگی های محصول</h5>
         <div className='px-2 pb-3'>
         <Button size="small" color="main" sx={{ borderRadius: '40px' }} onClick={HandleAttributes} className={class1}>
           {value1?<KeyboardArrowUpIcon fontSize="large"/>:<KeyboardArrowDownIcon fontSize="large"/>}
         </Button>
         </div>
      </div>
        { value1 && <div className="px-4">
        <ProductAttributes product={product} current={current} setCurrent={setCurrent}/>
        </div>}
        <br/>
        <hr/>
        <br />
        <div className='d-flex justify-content-between w-100'>
         <h5 className="px-4">درباره محصول</h5>
        <div className="px-2 pb-3">
        <Button  size="small" color="main" sx={{ borderRadius: '60px',fontSize:'20px' }} onClick={HandleDescriptions} className={class2}>
        {value2?<KeyboardArrowUpIcon fontSize="large"/>:<KeyboardArrowDownIcon fontSize="large"/>}
         </Button>
        </div>
         
        </div>
        {value2 &&<div className="product-about  text-break my-3 px-4"
          dangerouslySetInnerHTML={{ __html:product.description}}
        ></div>}
    </div>
  )
}

export default ProductSpecs