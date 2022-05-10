import * as t from '../types'
import * as e from '../endpoints'
import axios from 'axios'

export const logout = (router)=>{
    return dispatch=>{
        localStorage.removeItem('token')
        dispatch({type:t.UPDATE_STATUS, payload: false})
        dispatch({type:t.UPDATE_USER, payload: {}})
        if(typeof window!== "undefined") document.location.href = "/"
    }
}
export const profile = (setLoading=undefined)=>{
    return dispatch=>{
        axios.get(e.PROFILE)
        .then(response=>{
            const {data} = response
            dispatch({type:t.UPDATE_USER, payload: data})

        })
        .catch(err=>{
            console.log(err)
        })
        .finally(f=>{
            setTimeout(()=>{
                if (setLoading) setLoading(false)
            }, 2000)
        })

    }
}

export const login = (info, next)=>{
    return (dispatch) => {
        
        return new Promise((resolve, reject)=>{
            axios.post(e.AUTHENTICATE, info)
            .then((response)=>{
                const {data} = response
                if(data.error === 0){
                    try{
                        localStorage.removeItem('token')
                        localStorage.setItem('token', data.token)
                        dispatch({type:t.UPDATE_STATUS, payload: true})
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
export const update_profile = (info)=>{
    return (dispatch) => {
        
        return new Promise((resolve, reject)=>{
            axios.post(e.PROFILE, info)
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
