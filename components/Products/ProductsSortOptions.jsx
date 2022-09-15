import React from 'react'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FormControl, MenuItem, Select } from '@mui/material';
import Barrier from '../utils/SVGBarrier';
import SortIcon from '../../static/img/icon/sort.svg'
export default function ProductsSortOptions() {
    const options = [
        {
            name: "مرتبط‌بودن",
            value: "category"
        },
        {
            name: "پربازدیدترین",
            value: "-view_count"
        },
        {
            name: "جدیدترین",
            value: "-id"
        },
        {
            name: "پرفروش ترین",
            value: "-sales_count"
        },
        {
            name: "ارزان ترین",
            value: "price"
        },
        {
            name: "گران ترین",
            value: "-price"
        },
        
        {
            name: "سریع‌ترین ارسال",
            value: "send_time"
        },
        {
            name: "پیشنهاد خریداران",
            value: "suggestion"
        },
    ]
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [alignment, setAlignment] = React.useState('-id');

  return (
    <div className="products-filterbox products-sortby py-2">
        <Barrier  Component={SortIcon} height="20px" width="20px" className="mx-2"/>   مرتب سازی  :
        <div className="d-none d-lg-block">
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                classes={{
                    selected: "sort-selected"
                }}
            >
                {options.map((item, idx)=>{
                    return <ToggleButton key={idx} value={item.value} aria-label="left aligned">
                        {item.name}
                    </ToggleButton>
                })}
                
            </ToggleButtonGroup>
        </div>
        <div className="d-block d-lg-none">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={alignment}
                onChange={e=>handleAlignment(e, e.target.value)}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                classes={{
                    selected: "sort-selected"
                }}
            >
              {options.map((item, idx)=>{
                    return <MenuItem key={idx} value={item.value}>
                        {item.name}
                    </MenuItem>
                })}
            </Select>
        </FormControl>
        </div>
    </div>
  )
}





