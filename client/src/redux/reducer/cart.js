import * as Types from '../constants/actionTypes'
import {deleteProduct, findProductIndex} from '../../util/util'


export default (state = [] , action)=>{
    let index = null

    switch (action.type) {

        case Types.ADD_TO_CART :

            index = findProductIndex(state,action.payload.product.id)

            action.payload.product.quantity = 1
            return [
                ...state,
                action.payload.product
            ];
            
        case Types.DELETE_FROM_CART :
             
            return deleteProduct(state,action.payload.productId)
    
        case Types.INCREASE_QUANTITY :

            index = findProductIndex(state,action.payload.productId)
            state[index].quantity += 1
            console.log(state)

            return [...state]

        case Types.DECREASE_QUANTITY :

            index = findProductIndex(state,action.payload.productId)
            const quantity = state[index].quantity 
            if(quantity > 1) state[index].quantity  -= 1

            return [...state]

        case Types.CREATE_ORDER:
            return []

        default:
            return state
    }
}