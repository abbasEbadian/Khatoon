import { Button, Link } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function BecomeVendorButton() {
    const {user, authenticated} = useSelector(s=>s.auth)
    return (
        <>
        {authenticated && !(user?.market?.message) && 
        <Link href="/new-vendor"><a>
            

        
            <> 
                <Button className="wobble-hor-bottom d-none d-lg-block" variant="contained" color="main">
                    <AddBusinessIcon />
                    <s className="mx-2"></s>
                     پوادارشو  !
                    
                </Button>
                <Button size="small" className="wobble-hor-bottom  d-lg-none" variant="contained" color="main">
                    <AddBusinessIcon />
                    <s className="mx-2"></s>
                     پوادارشو  !
                </Button>
            </>
        </a>
            </Link>

        }
        </>
    )
}

export default BecomeVendorButton