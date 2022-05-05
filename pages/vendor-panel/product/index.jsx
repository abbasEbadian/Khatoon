import React from 'react'
import SidebarVendor from '../../../components/elements/SidebarVendor'
import Styles from '../../../styles/vendorProduct.module.scss'

function index() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3">
                    <SidebarVendor />
                </div>
            </div>
        </div>
    )
}

export default index