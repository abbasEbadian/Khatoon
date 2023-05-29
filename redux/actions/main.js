import axios from 'axios'
import * as t from '../types'
import * as e from '../endpoints'
import {profile} from '../actions'
import {toast} from 'react-toastify'

export const get_initial_data = ()=>{
    return dispatch =>{
        dispatch(get_cart())
        dispatch(check_user())
        dispatch(fetch_categories())
        dispatch(fetch_provinces())
        dispatch(fetch_configs())
    }
}

export const get_cart = () =>{
    return async (dispatch, getState)=>{
        dispatch({type: t.LOADING_BASKET ,payload:  true })
        axios.get(e.GET_CART).then(res=>{
            const {data} = res
            dispatch({type: t.UPDATE_BASKET,payload:  data })
        }).catch(e=>console.log(e))
        .finally(f=>{
            dispatch({type: t.LOADING_BASKET ,payload:  false })
        })
    }
}


export const check_user = ()=>{
    return dispatch=>{
        const token =  (typeof window!== "undefined" && typeof localStorage!== "undefined" )?  localStorage.getItem("token") : undefined
        if(token){
            dispatch({type:t.UPDATE_STATUS, payload: true})
            dispatch(profile())
        }
    }
}

export const fetch_banks = () =>{
    return async (dispatch, getState)=>{
        return (
            axios.get(e.GET_BANKS)
            .then(response=>{
                const {data} = response
                dispatch(update_banks(data))
                
            })
            .catch(err=>console.log(err))
            
        )
    }
}
export const fetch_configs = () =>{
    return async (dispatch, getState)=>{
        return (
            axios.get(e.GET_CONFIGS)
            .then(response=>{
                const {data} = response
                dispatch(update_configs(data))
                
            })
            .catch(err=>console.log(err))
            
        )
    }
}
export const fetch_categories = () =>{
    return async (dispatch, getState)=>{
        return (
            axios.get(e.GET_CATEGORIES)
            .then(response=>{
                const {data} = response
                dispatch(update_categories(data.categories))
                dispatch(update_flag_categories(data.flat_categories))
                
            })
            .catch(err=>console.log(err))
            
        )
    }
}

export const fetch_provinces = () =>{
    return async (dispatch, getState)=>{
        return (
            axios.get(e.GET_PROVINCES)
            .then(response=>{
                const {data} = response
                dispatch(update_provinces(data))
                
            })
            .catch(err=>console.log(err))
            
        )
    }
}



export const create_address = (info)=>{
    return (dispatch) => {
        
        return new Promise((resolve, reject)=>{
            axios.post(e.CREATE_ADDRESS, info)
            .then((response)=>{
                const {data} = response
                if(data.error === 0){
                    try{
                        dispatch(profile())
                    }catch(error){console.log(error)}
                    // dispatch(get_cart())
                }
                return resolve({error: data.error, message: data.message})
            })
            .catch(err=>{
                console.log(err)

                if(err.response?.status === 401 || err.response?.status === 400)
                    return resolve({error: 1, message: err.response?.data?.message})

                return resolve({error: 1, message: "خطا در برقراری ارتباط"})
            })
        })
    }
}
export const change_active_address = (id)=>{
    return (dispatch) => {
        
        axios.get(e.CHANGE_ACTIVE_ADDRESS(id))
        .then((response)=>{
            const {data} = response
            if(data.error === 0){
                try{ dispatch(profile()) }
                catch(error){console.log(error)}
            }
            toast(data.message, {type: data.error? "error": "success"})
        })
        .catch(err=>{
            console.log(err)
            return toast.error("خطا در برقراری ارتباط")
        })
        
    }
}
export const delete_address = (id, closeModal)=>{
    return (dispatch) => {
        
        axios.delete(e.DELETE_ADDRESS(id))
        .then((response)=>{
            const {data} = response
            if(data.error === 0){
                try{ dispatch(profile()) }
                catch(error){console.log(error)}
            }
            toast(data.message, {type: data.error? "error": "success"})
            if(typeof closeModal !== "undefined" )
                closeModal()
        })
        .catch(err=>{
            console.log(err)
            return toast.error("خطا در برقراری ارتباط")
        })
        
    }
}

export const update_categories = (categories)=>{
    return {
        type: t.UPDATE_CATEGORIES,
        payload: categories
    }
}
export const update_flag_categories = (categories)=>{
    return {
        type: t.UPDATE_FLAT_CATEGORIES,
        payload: categories
    }
}
export const update_configs = (configs)=>{
    return {
        type: t.UPDATE_CONFIGS,
        payload: configs
    }
}
export const update_provinces = (provinces)=>{
    return {
        type: t.UPDATE_PROVINCES,
        payload: provinces
    }

}
export const update_banks= (provinces)=>{
    return {
        type: t.UPDATE_BANKS,
        payload: provinces
    }

}
