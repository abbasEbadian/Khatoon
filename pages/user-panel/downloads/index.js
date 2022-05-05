import React, { useState } from 'react'
import UserPanelBase from '../../../components/UserPanelBase';
import withAuth from '../../../redux/withAuth'


function index() {


  



    return (
        <UserPanelBase active={"downloads"} title={"دانلود ها"} >
            <main className={" pb-5"}>
                <div className='row'>
                    تاریخچه دانلود شما خالیست.
                </div>
            </main>
        </UserPanelBase>
        
    )
}

export default withAuth(index)