import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import { Button, Chip, InputAdornment, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {toast} from 'react-toastify'
import 'lodash.product';
import * as _ from 'lodash'
import NewProductVariantHelp from './NewProductVariantHelp';
import NewProductCombinations from './NewProductCombinations';

const filter = createFilterOptions();
function ProductAttributeAdd({attributes, attributeValues, attrs, setAttrs, showVariant=false, setCombinationData, initCombinations}) {
    const [attrValues, setAttrValues] = React.useState([])
    const [newMode, setNewMode] = React.useState(false)
    const [variantSelected, setVariantSelected] = React.useState(1)
    const [attrText, setAttrText] = React.useState(null)
    const [attrValueText, setAttrValueText] = React.useState(showVariant? [] : "")
    // const [attrValueColor, setAttrValueColor] = React.useState("")
    const [variantCount, setVariantCount] = React.useState(showVariant?0:2)
    const [combinations, setCombinations] = React.useState([])
    const [editMode, setEditMode] = React.useState(true)

    const  COUNTER = React.useRef(1)
    const submitNew = (e)=>{
        let item = {
            id: COUNTER.current ,
            attribute : attrText ,
            attributeValue: showVariant? attrValueText.join(','): attrValueText,
            variantID: variantSelected,
            price: 0,
            count: 0,
        }
        if(!attrs.find(i=>i.attribute===item.attribute && i.variantID===item.variantID )){
            setAttrs(attrs => [...attrs, item])
            setNewMode(false)
            setAttrText(null)
            setAttrValueText(showVariant? [] : "")
            COUNTER.current += 1 
        }else{
            toast.error(" قبلا این ویژگی مقدار دهی شده است.")
        }
    }
    const removeAttr = (attribute)=>{
        setAttrs(attrs => attrs.filter(i=>i.attribute !== attribute))
        COUNTER.current -= 1 
    }
    const handleAttr = (val) => {
        setAttrText(val)
        if(val){

            setAttrValues(attributeValues.filter( i => {
                return i.attribute_id.name === val
            }))
            setAttrValueText([])
        }
    }
    const handleAttrValue = (val) => {
        if(val)
            setAttrValueText(val)
        else
            setAttrValueText(showVariant? [] : "")
    }

    React.useEffect(()=>{
        if(!showVariant) return;
        if(!attrs.length) {
            setCombinations([])
            return
        }
        const vars = []
        attrs.map(attr=>{
            const arr =  attr.attributeValue.split(",")
            const f = []
            arr.map(attrValue=>{
                f.push({attribute: attr.attribute, value: attrValue})
            })
            vars.push(f)
        })
        setCombinations(_.product(...vars))
    }, [attrs])
    const canCreateNew = React.useMemo(()=>{
        console.log(attrText, attrValueText, !attrText || !attrValueText)
        return !attrText?.length || !attrValueText?.length
    }, [attrText, attrValueText])
    return (
        <div className="attribute-row d-flex flex-wrap mt-4">
           {showVariant && 
            <div className="col-12 my-2">
                <NewProductVariantHelp />
            </div>
           }
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>  ویژگی </TableCell>
                        <TableCell>مقدار</TableCell>
                        <TableCell>عملیات</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {attrs.sort((a,b)=>a.variantID - b.variantID).map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 },'&:nth-of-type(2n)': { background:  "#f4f4f4" } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.attribute}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.attributeValue}
                            </TableCell>
                            
                            <TableCell component="th" scope="row">
                                <Button variant="contained" color='error' onClick={e=>removeAttr(row.attribute)} >حذف</Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        {
                            newMode &&<>
                            <TableRow>
                                <TableCell >
                                    <Autocomplete
                                        options={attributes.map(item=>item.name)}
                                        renderInput={(params) => <TextField {...params} label=" ویژگی " />}
                                        className="w-100"
                                        value={attrText}
                                        onChange={(e, val)=>handleAttr(val)}
                                        onInput={(e)=>{setAttrText(e.target.value)}}
                                        noOptionsText={"ویژگی جدید"}
                                        // getOptionLabel={(option) => option.name}
                                        freeSolo
                                    
                                    />
                                   
                                </TableCell>
                                <TableCell >
                                    {showVariant ? <Autocomplete
                                        options={attrValues.map((option) => option && option.name)}
                                        renderInput={(params) => <TextField {...params} label="مقدار ویژگی " />}
                                        className="w-100"
                                        onChange={(e, val)=>handleAttrValue(val)}
                                        // onInput={(e)=>handleAttrValue({name: e.target.value})}
                                        noOptionsText={"مقدار جدید"}
                                        // getOptionLabel={}
                                        freeSolo
                                        disabled={!attrText}
                                        multiple
                                        renderTags={(attrValueText, getTagProps) =>
                                            attrValueText.map((option, index) => (
                                              <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                                            ))
                                        }
                                    />
                                    :
                                    <Autocomplete
                                        options={attrValues.map((option) => option && option.name)}
                                        renderInput={(params) => <TextField {...params} label="مقدار ویژگی " />}
                                        className="w-100"
                                        onChange={(e, val)=>handleAttrValue(val)}
                                        // onInput={(e)=>handleAttrValue({name: e.target.value})}
                                        noOptionsText={"ویژگی جدید"}
                                        // getOptionLabel={}
                                        freeSolo
                                        disabled={!attrText}
                                        selectOnFocus
                                        clearOnBlur
                                        handleHomeEndKeys
                                        filterOptions={(options, params) => {
                                            const filtered = filter(options, params);
                                    
                                            const { inputValue } = params;
                                            // Suggest the creation of a new value
                                            const isExisting = options.some((option) => inputValue === option);
                                            if (inputValue !== '' && !isExisting) {
                                            //   filtered.push({
                                            //     inputValue,
                                            //     name: `Add "${inputValue}"`,
                                            //   });
                                              filtered.push( inputValue)
                                            }
                                            return filtered;
                                          }}
                                    />
                                    }
                                </TableCell>
                              
                                <TableCell>
                                    <input type="text" className="d-none" value={JSON.stringify(attrValueText, 0, 2)}/>
                                    <Button variant="contained" color='success' onClick={submitNew} disabled={canCreateNew}>تایید</Button>
                                    <Button variant="contained" color='error' onClick={e=>setNewMode(false)} className="mx-lg-2">لغو</Button>
                                </TableCell>
                                </TableRow>
                                
                            </>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            
            {!newMode &&<Button variant="contained" color="skyblue" fullWidth onClick={e=>setNewMode(true)}>
                + افزودن ویژگی 
            </Button> || <Typography fontSize={11} sx={{py:2}}>
                        <b>نکته: </b>
                        <small>
                             اگر ویژگی از قبل ایجاد شده بود می توانید  از بین لیست باز شونده آن را انتخاب کنید  
                            <br />  
                            در غیر این صورت می توانید ویژگی جدید خود را بنویسید تا به سیستم اضافه شود.
                        </small>
            </Typography>}
           
            {   showVariant &&  combinations.length > 0?
                <NewProductCombinations initCombinations={ initCombinations } rows={combinations} editMode={editMode} setEditMode={setEditMode} confirmCombinations={setCombinationData}/> : null
            }

        </div>
    )
}

export default ProductAttributeAdd