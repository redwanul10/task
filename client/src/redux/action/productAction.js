import * as Types from '../constants/actionTypes'

// Fetch Product fetchProduct
export const fetchProduct = url => async dispatch =>{
    try {

        const sendRequest = await fetch(url)
        const {products}        = await sendRequest.json()

        dispatch({
            type : Types.FETCHED_PRODUCT,
            payload:{products}
        })
        
    } catch (error) {
        console.log(error)
    }
}
