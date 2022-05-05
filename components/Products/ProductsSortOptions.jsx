import React from 'react'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { FormControl, MenuItem, Select } from '@mui/material';

export default function ProductsSortOptions() {
    const options = [
        {
            name: "جدیدترین",
            value: "-id"
        },
        {
            name: "قدیمی ترین",
            value: "id"
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
            name: "پرفروش ترین",
            value: "-sales_count"
        },
        {
            name: "کمفروش ترین",
            value: "sales_count"
        },
    ]
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [alignment, setAlignment] = React.useState('-id');

  return (
    <div className="products-filterbox products-sortby py-2">
        مرتب سازی بر اساس:
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





