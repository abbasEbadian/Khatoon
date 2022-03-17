// To manage API endpoints in a better way.

let base = "https://www.my-domain.ir"

if(!process.env.NODE_ENV || process.env.NODE_ENV  === 'development')
    base = "http://localhost:8000" 

export const BASE_URL = base



const _ = (url) => {return BASE_URL + "/api/v1"+url} 


export const GET_CATEGORIES = _( "/categories/all/" ) 
