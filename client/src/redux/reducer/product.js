import * as Types from '../constants/actionTypes'
import {deleteProduct,findProductIndex} from '../../util/util'

// {items:[],filteredList:[]}

export default (state = {items:[]} , action)=>{
    let index = 0
    switch (action.type) {

        case Types.FETCHED_PRODUCT :
            console.log(action.payload.products)
            return {
                ...state,
                items:[...action.payload.products],
            };

        case Types.ADD_TO_CART :

            index = findProductIndex(state.items,action.payload.product.id)
            state.items[index].inCart = true

            return{...state}
        
        case Types.DELETE_FROM_CART :
        
            index = findProductIndex(state.items,action.payload.productId)
            state.items[index].inCart = false

            return{...state}

        case Types.ADD_PRODUCT :

            return {
                ...state,
                items:[...state.items,action.payload]
            };
        
        case Types.DELETE_PRODUCT :
             
            return deleteProduct(state,action.payload.id)
    
        case Types.UPDATE_PRODUCT :

            index = findProductIndex(state,action.payload.product.id)
            state[index] = action.payload.product

            return {...state}

        
        default:
            return state
    }
}