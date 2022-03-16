import React from 'react'
import Link from 'next/link';
import { Box, Tab, Tabs } from '@mui/material';
function BasketTabs({tab}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', background: 'white' }}>
            <Tabs value={tab}  aria-label="basic tabs example">
                <Link href="/card" passHref>
                    <Tab label="سبد خرید" />
                </Link>
                <Link href="/card/basket-address" passHref>
                    <Tab label="افزودن آدرس" />
                </Link>
                <Link href="/card/payment-methods" passHref>
                    <Tab label="پرداخت" />
                </Link>
            </Tabs>
        </Box>
    )
}

export default BasketTabs