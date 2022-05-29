import * as t from '../types'

const init_state = {
    user: null,
    authenticated: false,
    loading: false,
    register_success: false,
    basket: {},
    loadingBasket: false
}

const authReducer = (state=init_state, action)=>{
    const {type, payload} = action
    
    switch(type){
        case t.UPDATE_USER: 
            return {
                ...state, 
                user: payload
            }
        case t.UPDATE_STATUS:
            return {
                ...state,
                authenticated: payload
            }
        case t.UPDATE_LOADING_USER:
            return {
                ...state,
                loading: payload
            }
        case t.UPDATE_BASKET:
            return {
                ...state,
                basket: payload
            }
        case t.LOADING_BASKET:
            return {
                ...state,
                loadingBasket: payload
            }
        default: 
        return state
    }
}

export default authReducer;