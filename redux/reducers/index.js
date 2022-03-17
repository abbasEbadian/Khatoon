import mainReducer from './main'
import authReducer from './auth'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    main: mainReducer
})

export default rootReducer