import {combineReducers} from 'redux'
import products from './product'
import cart from './cart'
import order from './order'

const rootReducer = combineReducers({
    products,
    cart,
    order
})

export default rootReducer