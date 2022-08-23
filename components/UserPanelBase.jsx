import React from 'react'
import SidebarMenu from './elements/sidebarMenu'
import TextHeadTiltle from './Ui/TextHeadTiltle'

import { Fab } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function UserPanelBase({children, active, title, }) {
    const [openSidebar, setOpenSidebar] = React.useState(false)

    const handleClick = () => {
        setOpenSidebar(prev => !prev)
    }
    
    return (
        <div className='container_custom'>

            <div className="card_style mt-0 py-2 px-2 py-md-4">
                <div className="row mx-0">
                    <div className="col-12 col-lg-3 col-xxl-2">
                        <SidebarMenu active={active} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                    </div>
                    <div className="col-12 col-lg-9 col-xxl-10 ">
                        <div className="bg-white shadow p-md-4 p-2 rounded-lg">
                            {title && <TextHeadTiltle underline_dec={true} title={title} />}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Fab color="primary" aria-label="add" size="medium" className="d-lg-none position-fixed" sx={{bottom: 16, right: 16}} onClick={handleClick}>
                {openSidebar? <CloseIcon/> :<MenuIcon />}
            </Fab>
        </div>
    )
}

export function getInitialProps(props){
    return props
}
export default UserPanelBase