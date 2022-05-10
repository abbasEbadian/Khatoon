import React from 'react'
import SidebarVendor from './elements/SidebarVendor'
import TextHeadTiltle from './Ui/TextHeadTiltle'


function UserPanelBase({children, active, title }) {
    console.log(children)
    return (
        <div className='container_custom'>

            <div className="row mx-0">
                <div className="col-2 ">
                    <SidebarVendor active={active} />
                </div>
                <div className="col-12 col-lg-10  ">
                    <div className="card_style shadow mt-0 ">
                        {/* <TextHeadTiltle underline_dec={true} title={title} /> */}
                        {children}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export function getInitialProps(props){
    return props
}
export default UserPanelBase