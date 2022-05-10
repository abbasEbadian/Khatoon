import React from 'react'
import SidebarMenu from './elements/sidebarMenu'
import TextHeadTiltle from './Ui/TextHeadTiltle'


function UserPanelBase({children, active, title }) {
    return (
        <div className='container_custom'>

            <div className="card_style">
                <div className="row mx-0">
                    <div className="col-2">
                        <SidebarMenu active={active} />
                    </div>
                    <div className="col-12 col-lg-10 py-3 ">
                        <div className="bg-white shadow p-4 rounded-lg">
                            <TextHeadTiltle underline_dec={true} title={title} />
                            {children}
                        </div>
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