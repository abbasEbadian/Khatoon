// To manage API endpoints in a better way.

let base = "https://www.my-domain.ir"

if(!process.env.NODE_ENV || process.env.NODE_ENV  === 'development')
    base = "http://localhost:8000" 

export const BASE_URL = base



const _ = (url) => {return BASE_URL + "/api/v1"+url} 


export const AUTHENTICATE = _( "/users/authenticate/" ) 
export const PROFILE = _( "/users/profile/" ) 


export const CREATE_ADDRESS = _( "/address/create/" ) 
export const EDIT_ADDRESS = _( "/address/edit/" ) 
export const CHANGE_ACTIVE_ADDRESS = (id) => _( "/address/change_active/" + id +"/") 
export const DELETE_ADDRESS = (id) => _( "/address/delete/" + id +"/") 


export const TOGGLE_FAVORITE = _( "/favorite/toggle/" ) 
export const TOGGLE_REMINDER = _( "/reminder/toggle/" ) 



export const GET_BANKS = _( "/bank/all/" ) 


export const GET_PROVINCES = _( "/state/province/all/" ) 
export const GET_CITIES_BY_PROVINCE = (province_id) => _( "/state/city/province/" + province_id )  

export const GET_BUSINESS_TYPES = _( "/market/business/all/" ) 
export const UPLOAD_COVER_IMAGE = _( "/market/image/cover/" ) 
export const UPLOAD_AVATAR_IMAGE = _( "/market/image/avatar/" ) 


export const GET_BUSINESS_TYPES_AND_PROVINCES = _("/market/business_and_province/all/")

export const GET_PRODUCTS = _( "/product/all/" ) 
export const GET_PRODUCT_BY_ID = (product_id) => _( "/product/" + product_id ) 


export const GET_CATEGORIES = _( "/category/all/" ) 
export const GET_CATEGORY_PRODUCTS = (category) =>  _( "/product/category/" + category ) 
