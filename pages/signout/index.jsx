import React from 'react'
import {useDispatch} from 'react-redux'
import { logout } from '../../redux/actions'
import withAuth from '../../redux/withAuth'

function Signout() {
    const dispatch = useDispatch()
    dispatch(logout())

    return (
        <div className="d-flex py-5 my-5 text-center w-100 justify-content-center align-items-center h-75">
            <h4>در حال خروج</h4>
        </div>
    )
}

export default withAuth(Signout, 1)