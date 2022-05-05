import axios from 'axios'
import * as t from '../types'
import * as e from '../endpoints'
import {profile} from '../actions'

export const get_initial_data = ()=>{
    return dispatch =>{
        dispatch(check_user())
        dispatch(fetch_categories())
       
    }
}

export const check_user = ()=>{
    return dispatch=>{
        const token = localStorage.getItem("token")
        if(token){
            dispatch({type:t.UPDATE_STATUS, payload: true})
            dispatch(profile())
        }
    }
}

export const fetch_categories = () =>{
    return async (dispatch, getState)=>{
        return (
            axios.get(e.GET_CATEGORIES)
            .then(response=>{
                const {data} = response
                dispatch(update_categories(data))
                
            })
            .catch(err=>console.log(err))
            
        )
    }
}



export const update_categories = (categories)=>{
    return {
        type: t.UPDATE_CATEGORIES,
        payload: categories
    }

}
