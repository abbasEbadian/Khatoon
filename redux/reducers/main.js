import * as t from '../types'
import {HYDRATE} from 'next-redux-wrapper';

const init_state = {
    categories : [],
    provinces: [],
    banks: []
}


  
const mainReducer = (state=init_state,action)=>{
    switch(action.type){
        case HYDRATE:
            return {...state, ...action.payload};

        case t.UPDATE_CATEGORIES: 
            return {
                ...state,
                categories: action.payload
            }
        case t.UPDATE_PROVINCES: 
            return {
                ...state,
                provinces: action.payload
            }
        case t.UPDATE_BANKS: 
            return {
                ...state,
                banks: action.payload
            }
        default: return {...state}
    }
}
export default mainReducer
