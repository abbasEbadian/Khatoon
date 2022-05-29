import React from 'react'
import Link from 'next/link';
import { Box, Tab, Tabs } from '@mui/material';
function BasketTabs({tab, setTab}) {

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'white' }}>
            <Tabs value={tab}  aria-label="basic tabs example" onChange={handleChange}> 
                <Tab label="سبد خرید" />
                <Tab label="افزودن آدرس" />
                <Tab label="پرداخت" />
            </Tabs>
        </Box>
    )
}

export default BasketTabs