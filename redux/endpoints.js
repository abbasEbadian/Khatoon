// To manage API endpoints in a better way.

//let base = "http://khatooneziba.ir"
let base = "http://192.168.1.101:9000" 

// if(!process.env.NODE_ENV || process.env.NODE_ENV  === 'development')
//     base = "http://localhost:8000" 

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



export const GET_BANKS = _( "/market/bank/all/" ) 

export const GET_CHATS_OF_MARKET = _( "/message/market/all/" ) 
export const GET_CHATS_OF_USER = _( "/message/user/all/" ) 
export const SEND_MESSAGE = _( "/message/send/" ) 
export const SET_SEEN_MARKET = _( "/message/market/seen/" ) 
export const SET_SEEN_USER = _( "/message/user/seen/" ) 
export const CREATE_CHAT_FOR_USER = _( "/message/user/create/" ) 
export const CREATE_CHAT_FOR_MARKET = _( "/message/market/create/" ) 

export const GET_PROVINCES = _( "/state/province/all/" ) 
export const GET_CITIES_BY_PROVINCE = (province_id) => _( "/state/city/province/" + province_id )  
export const GET_ATTRIBUTES =  _( "/attribute/all/" )  

export const GET_BUSINESS_TYPES = _( "/market/business/all/" ) 
export const UPLOAD_COVER_IMAGE = _( "/market/image/cover/" ) 
export const UPLOAD_AVATAR_IMAGE = _( "/market/image/avatar/" ) 
export const UPDATE_MARKET_DETAIL = _( "/market/update/" ) 
export const UPDATE_MARKET_DOCUMENT = _( "/market/update_document/" ) 
export const UPDATE_MARKET_DETAIL_BANK = _( "/market/update_bank/" ) 

export const SEND_TICKET = _( "/ticket/add_ticket/" ) 
export const ADD_TICKET = _("/ticket/add_message/")
export const SEEN_TICKET = _("/ticket/seen/")

export const GET_BUSINESS_TYPES_AND_PROVINCES = _("/market/business_and_province/all/")

export const GET_PRODUCTS = _( "/product/all/" ) 
export const CREATE_PRODUCT = _( "/product/create/" ) 
export const UPDATE_PRODUCT = _( "/product/update/" ) 
export const CHANGE_VISIBILITY = _( "/product/update_visibility/" ) 
export const DELETE_PRODUCT = _( "/product/delete/" ) 
export const GET_PRODUCT_BY_ID = (product_id) => _( "/product/" + product_id ) 

export const GET_PRODUCT_BY_NAME =  _( "/product/search_with_name/") 
export const GET_INDEX_PRODUCTS =  _( "/product/index/") 


export const GET_CATEGORIES = _( "/category/all/" ) 
export const GET_CATEGORY_PRODUCTS = (category) =>  _( "/product/category/" + category ) 
export const GET_VENDOR = (username) =>  _( "/market/" + username ) 


export const GET_CART = _("/order/get_cart/")
export const PATCH_CART = _("/order/delete_from_cart/")
export const EMPTY_CART = _("/order/delete_cart/")
export const ADD_TO_CART = _("/order/add_to_cart/")
export const DECREASE_CART_ITEM = _("/order/decrease_cart_item/")
export const INCREASE_CART_ITEM = _("/order/increase_cart_item/")
export const REMOVE_CART_ITEM = _("/order/remove_cart_item/")

export const GET_CONFIGS = _("/config/all/")

