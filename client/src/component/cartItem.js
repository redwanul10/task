import React from 'react';


const CartItem = (props) => {
    
    return ( 
        <div className="item_wrapper">
            <div className="image"><img src="https://via.placeholder.com/60x60" alt=""/></div>
            <div className="title">{props.data.name}</div>
            <div className="quantity">
                <button onClick={e => props.increaseQuantity(props.data.id)}>+</button>
                <span>{props.data.quantity}</span>
                <button onClick={e => props.decreaseQuantity(props.data.id)}>-</button>
            </div>
            <div className="delete_button">
                <button onClick={e => props.deleteFromCart(props.data.id)}><i class="large material-icons">delete</i></button>
            </div>
        </div>
    );
}


export default CartItem