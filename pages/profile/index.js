import React, { useState } from 'react'
import BoxItem from '../../components/Ui/BoxItem/BoxItem'
import BoxItems from '../../components/Ui/BoxItems/BoxItems'
import TextHeadTiltle from '../../components/Ui/TextHeadTiltle'

function main() {



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card_style mt-5 py-3 px-5'>
                        <div className='row'>
                            <div >
                                <div>نام و نام خانوادگی:</div>
                                <div>محمد هستم!</div>
                            </div>
                            <div >
                                <div>پست الکترونیکی: </div>
                                <div>info@mgdesign.ir</div>
                            </div>
                            <div >
                                <div>تلفن همراه:</div>
                                <div>۰۹ - - - - - - </div>
                            </div>
                            <div >
                                <div>استان محل سکونت: </div>
                                <div>مازندران</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default main