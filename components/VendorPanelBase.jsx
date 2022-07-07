import React from 'react'
import SidebarVendor from './elements/SidebarVendor'
import TextHeadTiltle from './Ui/TextHeadTiltle'
import { useDispatch, useSelector } from 'react-redux'
import {profile} from '../redux/actions'
import { Fab } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useRouter} from 'next/router'


function VendorPanelBase({children, active, title, props }) {
    const dispatch = useDispatch()
    const router = useRouter()
    const user = useSelector(s=>s.auth.user)
    React.useEffect(()=>{
        if(user && !(user.market)) router.replace('/new-vendor')
    }, [user])
    const [openSidebar, setOpenSidebar] = React.useState(false)

    const handleClick = () => {
        setOpenSidebar(prev => !prev)
    }
    return (
        <section className='container_custom'>

            <div className="row mx-0">
                <div className="col-12 col-lg-3 col-xxl-2">
                    <SidebarVendor active={active} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
                </div>
                <div className="col-12 col-lg-9 col-xxl-10 p-0">
                    <div className="card_style shadow mt-0 p-md-4 p-2">
                        {title && <TextHeadTiltle underline_dec={true} title={title} />}
                        {children}
                    </div>
                </div>
            </div>
            <Fab color="main" aria-label="add" size="medium" className="d-lg-none position-fixed" sx={{bottom: 16, right: 16}} onClick={handleClick}>
                {openSidebar? <CloseIcon/> :<MenuIcon />}
            </Fab>
        </section>
    )
}

export function getInitialProps(props){
    return props
}
export default VendorPanelBase