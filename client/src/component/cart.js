import React from 'react';
import {connect} from 'react-redux'
import CartItem from './cartItem';
import {
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart
} from '../redux/action/cart'
import TotalPrice from './totalPrice';


const Cart = (props) => {
    return ( 
        <div class="cart_list card">
            {props.cartItems.map(item => (
                <CartItem data={item}
                increaseQuantity={props.increaseQuantity}
                decreaseQuantity={props.decreaseQuantity}
                deleteFromCart={props.deleteFromCart}
                />
            ))}
            <TotalPrice cartItems={props.cartItems}/>
        </div>
     );
}

const mapStateToProps = state =>({
    cartItems: state.cart,
})

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Cart);