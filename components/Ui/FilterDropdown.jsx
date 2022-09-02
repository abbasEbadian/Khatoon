import react,{useState} from 'react';
import {Card,Button} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
export default function FilterDropdown() {
    const [categoryfilter,setcategoryfilter]=useState("");
    const [productfilter,setproductfilter]=useState({
      st1:"",
      st2:"",
      st3:""
    });
    const [pricefilter,setpricefilter]=useState({
      fromprice:"",
      toprice:""
    });
    const [inventoryfilter,setinventoryfilter]=useState({
      frominv:"",
      toinv:""
    });
    const [preparationfilter,setpreparationfilter]=useState({
      frompre:"",
      topre:""
    });

    const [acceptstates,setAccepstates]=useState({
        category:false,
        product:false,
        price:false,
        inventory:false,
        preparation:false,
      });
      const [selectstates,setSelectstates]=useState({
        category:true,
        product:false,
        price:false,
        inventory:false,
        preparation:false,
      });
      const [filtermenu,setFiltermenu]=useState([
        {name:"دسته بندی",id:"category",accept:acceptstates.category,select:selectstates.category},
        {name:"وضعیت محصول",id:"product",accept:acceptstates.product,select:selectstates.product},
        {name:"قیمت",id:"price",accept:acceptstates.price,select:selectstates.price},
        {name:"موجودی",id:"inventory",accept:acceptstates.inventory,select:selectstates.inventory},
        {name:"زمان آماده سازی",id:"preparation",accept:acceptstates.preparation,select:selectstates.preparation},
      ]);
      const selectStateFilter=(prop)=>{
         setSelectstates({category:false,product:false,price:false,inventory:false,preparation:false});
         if(prop=="category"){setSelectstates({category:true});}
         if(prop=="product"){setSelectstates({product:true});}
          if(prop=="price"){setSelectstates({price:true});}
          if(prop=="inventory"){setSelectstates({inventory:true});}
          if(prop=="preparation"){setSelectstates({preparation:true});}
    
      }
      const handleRadio=(e)=>{
          setcategoryfilter(e.target.value);
      }
      const handleCheckbox=(props)=>(e)=>{
        if(e.target.checked===true){
          setproductfilter({...productfilter,[props]:e.target.value});
        }else{
          setproductfilter({...productfilter,[props]:""});
        }
      }
     
      const handlePrice=(props)=>(e)=>{
        setpricefilter({...pricefilter,[props]:e.target.value});
      }
      const handleInventory=(props)=>(e)=>{
        setinventoryfilter({...inventoryfilter,[props]:e.target.value});
      }
      const handlePreparation=(props)=>(e)=>{
        setpreparationfilter({...preparationfilter,[props]:e.target.value});
      }
      const clearAll=()=>{
        setcategoryfilter("");
        setproductfilter({st1:"",st2:"",st3:""});
        setinventoryfilter({frominv:"",toinv:""});
        setpreparationfilter({frompre:"",topre:""});
        setpricefilter({fromprice:"",toprice:""})
      }
      return (
        <div>
          <div  className='row row-cols-2 p-0' dir="rtl">
          <ul class=" col-4 list-group" style={{borderRadius:"0px"}}>
            {filtermenu.map((item)=>(
              <li class="list-group-item list-group-item-action" onClick={(e)=>{selectStateFilter(item.id)}}>
                <div className=' row row-cols-2'>
                <div className='col-10'>
                <p>{item.name}</p>
                <small>{item.accept ? "انتخاب شده" :""}</small>
                
              </div>
              <div className='col-2 p-2'>
                <KeyboardArrowLeftIcon/>
              </div>
                </div>
              
            </li>
            ))}
            <li class="list-group-item list-group-item-action">
                <div className=' row row-cols-2'>
                 <div className='col-6'>
                 <Button size="small" onClick={clearAll}>پاک کردن</Button>
                 </div>
                 <div className='col-6'>
                 <Button variant="contained" size="small">اعمال</Button>
                 </div>
                </div>
              
            </li>
          </ul>
          <div className='col-8'>
            {selectstates.category && <div className='card-body'>
                <div className='row row-cols-2'>
                  <h3 className='card-title col-9 text-start'>دسته بندی</h3>
                  <Button className="col-3" onClick={()=>{setcategoryfilter("");}} style={{fontSize:"15px"}}>پاک کردن</Button>
                </div>
                <div className='pt-5' style={{width:"450px"}} dir="rtl">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="c1"
                    name="radio-buttons-group"
                    
                   >
                    <FormControlLabel value="c1" onChange={handleRadio} checked={categoryfilter==='c1'}  control={<Radio />} label="دسته اول" />
                    <FormControlLabel value="c2" onChange={handleRadio} checked={categoryfilter==='c2'} control={<Radio />} label="دسته دوم" />
                    <FormControlLabel value="c3" onChange={handleRadio} checked={categoryfilter==='c3'} control={<Radio />} label="دسته سوم" />
                  </RadioGroup>
                </FormControl>
                </div>
            </div>}
          
            {selectstates.price && <div className='card-body'>
                <div className='row row-cols-2'>
                  <h3 className='card-title col-9 text-start'>قیمت</h3>
                  <Button className="col-3" style={{fontSize:"15px"}} onClick={(e)=>{setpricefilter({fromprice:"",toprice:""})}} >پاک کردن</Button>
                </div>
                
                 <div className='pt-5 pe-4 d-flex' style={{width:"450px"}}>
                    <label className='form-label me-3' style={{fontSize:"20px"}}>از</label>
                    <input className='form-control w-50' value={pricefilter.fromprice} onChange={handlePrice('fromprice')} placeholder='قیمت(تومان)' />
                    <label className='form-label ms-3 me-2' style={{fontSize:"20px"}}>تا</label>
                    <input className='form-control me-3 w-50' value={pricefilter.toprice} onChange={handlePrice('toprice')} placeholder='قیمت(تومان)'/>
                 </div>
            </div>}
            {selectstates.product &&  <div className='card-body'>
                <div className='row row-cols-2'>
                  <h3 className='card-title col-9 text-start'>وضعیت محصول</h3>
                  <Button className="col-3" style={{fontSize:"15px"}} onClick={(e)=>{setproductfilter({st1:"",st2:"",st3:""})}}>پاک کردن</Button>
                </div>
                <div className='pt-5 ps-2' style={{width:"450px"}} dir="rtl">
                  <div className='row col-12'>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={handleCheckbox('st1')} checked={productfilter.st1==="access"} value="access" />} label="در دسترس" />
                    <FormControlLabel control={<Checkbox onChange={handleCheckbox('st2')} checked={productfilter.st2==="no access"} value="no access"/>} label="عدم انتشار" />
                    <FormControlLabel control={<Checkbox onChange={handleCheckbox('st3')} checked={productfilter.st3==="ignored"} value="ignored" />} label="تایید نشده" />

                  </FormGroup>
                 
                   </div>
                </div>
            </div>}
            {selectstates.inventory && <div className='card-body'>
                <div className='row row-cols-2'>
                  <h3 className='card-title col-9 text-start'>موجودی</h3>
                  <Button className="col-3" style={{fontSize:"15px"}} onClick={()=>{setinventoryfilter({frominv:"",toinv:""})}}>پاک کردن</Button>
                </div>
                <div className='pt-5 pe-4 d-flex' style={{width:"450px"}}>
                    <label className='form-label me-3' style={{fontSize:"20px"}}>از</label>
                    <input className='form-control w-50' value={inventoryfilter.frominv} onChange={handleInventory('frominv')} />
                    <label className='form-label ms-3 me-2' style={{fontSize:"20px"}}>تا</label>
                    <input className='form-control me-3 w-50'value={inventoryfilter.toinv} onChange={handleInventory('toinv')}/>
                 </div>
            </div>}
            {selectstates.preparation&& <div className='card-body'>
                <div className='row row-cols-2'>
                  <h3 className='card-title col-9 text-start'>زمان اماده سازی</h3>
                  <Button className="col-3" size="large" style={{fontSize:"15px"}} onClick={()=>{setpreparationfilter({frompre:"",topre:""})}}>پاک کردن</Button>
                </div>
                <div className='pt-5 pe-4 d-flex' style={{width:"450px"}}>
                    <label className='form-label me-3' style={{fontSize:"20px"}}>از</label>
                    <input className='form-control w-50' value={preparationfilter.frompre} onChange={handlePreparation('frompre')} type="number"/>
                    <label className='form-label ms-3 me-2' style={{fontSize:"20px"}}>تا</label>
                    <input className='form-control me-3 w-50' value={preparationfilter.topre} onChange={handlePreparation('topre')} type="number"/>
                 </div>
            </div>}
          </div>
       </div>
        </div>
        
        
      );
}
