import React from 'react'
import { useState } from 'react';
import BoxAddress from '../../../components/Ui/BoxAddress';
import AddBoxIcon from '@mui/icons-material/AddBox';

import Button from '@mui/material/Button';
import UserPanelBase from '../../../components/UserPanelBase';
import withAuth from '../../../redux/withAuth'
import { useSelector} from 'react-redux'

import AddressDialog from '../../../components/Ui/Dialogs/AddressDialog';
import AddressList from '../../../components/Ui/AddressList';

function BasketAddress() {


    return (
        <main>
            <UserPanelBase active="address" title="آدرس ها" >
                <AddressList />
            </UserPanelBase>
        </main>
    )
}


export default withAuth(BasketAddress)