import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as _ from 'lodash'
import { Box, Typography } from '@mui/material';

export default function ProductAttributes({product, current, setCurrent}) {
    const [active, setActive] = React.useState({});
    const [attrs, setAttrs] = React.useState([])
    const [variants, setVariants] = React.useState([])

    const [activeAttribute, setActiveAttribute] = React.useState() 
    const [activeAttributeValue, setActiveAttributeValue] = React.useState() 

    const handleActive = (event, key , value ) => {
        if(!value) return
        setActive(s => {return {
            ...s, 
            [key]: value 
        }});
        changeActiveAttribute(key, value);
    }
    const changeActiveAttribute = (attribute, val) => {
        const next = product.templates.find( template => template.attributes.find(attr => attr.attribute_id.name === attribute && attr.value_id.name === val) )
        setCurrent(next)
    }

    // React.useEffect(()=>{
    //     setActive(current.attributes.find(i=>i.name === attribute).value_id.name)
    // }, [current])
    React.useEffect(()=>{
        setAttrs(product.attributes)

        const vars = product.templates.filter(i=>!i.default)
        if(!vars) {
            setCurrent(product.templates.find(i=>i.default))
            return
        }
        const  attributeSets = []

        vars.map(_var => {
            _var.attributes.map(att=>{
                if (attributeSets.find(i=>i.attribute === att.attribute_id.name))
                    attributeSets.find(i=>i.attribute === att.attribute_id.name).values.add(att.value_id.name)
                else
                    attributeSets.push({attribute: att.attribute_id.name, values: new Set([att.value_id.name]) })
            })
        })

        
        setVariants(attributeSets)
        setCurrent(attributeSets[0])

         
        // const attrs_grouped = _.groupBy(attributes, (item)=> item.attribute_id.name)
    }, [product])
    React.useEffect(()=>{
        variants.map(variant => {
            console.log("vb", variant)
            handleActive({}, variant.attribute, Array.from(variant.values)[0])
        })
    }, [variants])

    return (
        <>
            <section className="product-attributes w-100 d-flex flex-column align-items-start">
            {
               attrs?.map(attr=>{
                   return <div className="attr-row my-2" key={attr.id}>
                        <span className="text-black-50">{attr.attribute_id.name}</span>
                        {" : "}
                        <strong>{attr.value_id && attr.value_id.name}</strong>
                    </div>
               })
            }
            </section>
            <section className="product-attributes w-100">
            {
                    variants.map((attributeSet) => {
                        const attribute = attributeSet.attribute
                        const values = Array.from(attributeSet.values)
                    
                    return <div key={attribute} className=" my-2 col-12">
                        <b>{attribute}</b> <span className="devider">{" : "}</span>
                        <ToggleButtonGroup
                            value={active[attribute]}
                            exclusive
                            onChange={(e, val)=>handleActive(e, attribute, val)}
                            aria-label="active color"
                        >
                        {values.map(value=>{
                            return <ToggleButton key={value} value={value} sx={{p: "4px", minWidth: "32px"}}>
                                <Box>
                                    {value}
                                </Box>
                            </ToggleButton>
                        })}
                    
                    </ToggleButtonGroup>
                    
                    </div>
                    
                })
            }
            </section>
       
        
            </>
    );
}