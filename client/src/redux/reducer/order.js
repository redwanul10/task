import * as Types from '../constants/actionTypes'

export default (state = {modal:false,items:[]} , action)=>{
    switch (action.type) {
        
        case Types.OPEN_ORDER_MODAL :
            return {...state,modal:true}
        
        case Types.CLOSE_ORDER_MODAL :
            return {...state,modal:false}

        case Types.CREATE_ORDER :
            return {...state,modal:false,items:[...state.items,action.payload.item]}
        
        case Types.FETCHED_ORDERS :
        console.log(action.payload.orders)
            return {...state,modal:false,items:[...action.payload.orders]}
            
        default:
            return state
    }
}