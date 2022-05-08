import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as _ from 'lodash'
import { Box, Typography } from '@mui/material';

export default function ProductAttributes({attributes}) {
    const [active, setActive] = React.useState({});
    const [attrs, setAttrs] = React.useState([])

    const handleActive = (event, key , value ) => {
        setActive(s => {return {
            ...s, 
            [key]: value 
        }});
    };
    React.useEffect(()=>{
        const attrs_grouped = _.groupBy(attributes, (item)=> item.attribute_id.name)
        setAttrs(attrs_grouped)
    }, [attributes])
    console.log(active)
    return (
            <section className="product-attributes w-100">
            {
                Object.keys(attrs).map((key) => {
                    const attr_list = attrs[key]
                    if(attr_list.length > 1 ){
                        return <div className="product-attribute col-md-6 col-12">
                            <b>{attr_list[0].attribute_id.name}</b> <span className="devider">{" : "}</span>
                            <ToggleButtonGroup
                            value={active[key]}
                            exclusive
                            onChange={(e, val)=>handleActive(e, key, val)}
                            aria-label="active color"
                            >
                            {attr_list.map(attr=>{
                                return <ToggleButton key={attr.id} value={attr} sx={{p: "4px"}}>
                                    {attr.value_id.color? 
                                        <Box sx={{width: "24px", height: "24px", backgroundColor: attr.value_id.color}}/>
                                    :
                                    <Box sx={{width: "24px", height: "24px", backgroundColor: attr.value_id.color}}>
                                        {attr.value_id.name}
                                    </Box>
                                    }
                                </ToggleButton>
                            })}
                        
                        </ToggleButtonGroup>
                        <span className="px-2">
                            <Typography sx={{fontSize: "12px"}}>
                                {Object.keys(active).includes(key)? (active[key]?.value_id.name || "") : null}
                            </Typography>
                        </span>
                        </div>
                    } else{
                        return <div key={attr_list[0].id} className="product-attribute col-md-6 col-12">
                                <b>{attr_list[0].attribute_id.name}</b><span className="devider">{" : "}</span>
                                <span>{attr_list[0].value_id.name}</span>
                            </div>
                    }
                })
            }</section>
       
        
       
    );
}