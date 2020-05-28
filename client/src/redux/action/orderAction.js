import * as Types from '../constants/actionTypes'



// Fetch Product fetchOrders
export const fetchOrders = url => async dispatch =>{
    try {

        const sendRequest = await fetch(url)
        const {orders}        = await sendRequest.json()
        console.log(orders)

        dispatch({
            type : Types.FETCHED_ORDERS,
            payload:{orders}
        })
        
    } catch (error) {
        console.log(error)
    }
}


export const openOrderModal = ()=> dispatch =>{
    dispatch({
        type: Types.OPEN_ORDER_MODAL,
    })
}

export const closeOrderModal = ()=> dispatch =>{
    dispatch({
        type: Types.CLOSE_ORDER_MODAL,
    })
}

export const createdOrder = item => dispatch =>{
    dispatch({
        type: Types.CREATE_ORDER,
        payload:{
            item
        }
    })
}