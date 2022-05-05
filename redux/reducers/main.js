import * as t from '../types'
import {HYDRATE} from 'next-redux-wrapper';

const init_state = {
    categories : [],
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
        default: return {...state}
    }
}
export default mainReducer
