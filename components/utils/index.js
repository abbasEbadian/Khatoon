import {BASE_URL} from '../../redux/endpoints'
export function on(obj, ...args) {
    obj.addEventListener(...args)
  }
  
  export function off(obj, ...args) {
    obj.removeEventListener(...args)
  }
  
export function market_imlink(url){
  if(url)
    return BASE_URL + url
  return "/images/market-image.png"
  
}
export function user_imlink(url){
  if(url)
    return BASE_URL + url
  return "/images/user-image.png"
}
export function product_imlink(url){
  if(url)
    return BASE_URL + url
  return "/images/user-image.png"
}

export function base_imlink(url){
  if(url)
    return BASE_URL + url
  return false
}