import React from 'react'
import { Button } from "@mui/material";
import axios from 'axios';
import {toast} from 'react-toastify';

import {DELETE_PRODUCT} from '../../redux/endpoints'
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteProductDialog from '../dialog/DeleteProductDialog';
import {profile} from '../../redux/actions'
import {useDispatch} from 'react-redux'

function DeleteProductButton({product}) {
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false)
    const remove = () => {
        axios.delete(DELETE_PRODUCT + product.id)
        .then(response=>{
            const {data} = response
            toast(data.message, {type: (data.error? "error": "success")})
            setOpen(false)
            dispatch(profile())
        })
        .catch(err=>{
            console.log(err)
            toast.error("خطا در ارتباط")
        })
    }
    return (<>
        <Button
        size="small"
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        className="mx-1"
        onClick={e=>setOpen(true)}
        >
        حذف
        </Button>
        <DeleteProductDialog open={open} setOpen={setOpen} submit={remove}/>
    </>
  );
}

export default DeleteProductButton