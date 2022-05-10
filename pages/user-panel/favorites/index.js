import React, { useState } from 'react'
import BoxItem from '../../../components/Ui/BoxItem/BoxItem'
import UserPanelBase from '../../../components/UserPanelBase';
import styles from './favorits.module.scss'
import withAuth from '../../../redux/withAuth'
import {useSelector} from 'react-redux'


function Favorites() {
    const user = useSelector(s=>s.auth.user)



    return (
        <main className={styles.favorites + " pb-5"}>
            <UserPanelBase active={"favorites"} title={"علاقه مندی ها"} >
                    <div className='row'>
                        {user && user.favorite_set.length ?
                            user.favorite_set.map((item, index) => {
                                return (
                                    <div className='col-12 col-md-6 col-lg-3 mb-3' key={index}>
                                        <BoxItem item={item.product_id} />
                                    </div>
                                )
                            }): <span className="mt-5"> لیست علاقه مندی های شما خالیست</span>
                        }
                    </div>
            </UserPanelBase>
        </main>
        
    )
}

export default withAuth(Favorites)