import React from 'react';
import {subTotal} from '../util/util'
import {connect} from 'react-redux'
import {openOrderModal} from '../redux/action/orderAction'

const TotalPrice = ({cartItems,openOrderModal}) => {

    
    return ( 
        <div className="total_price">
            <div>Total : {subTotal(cartItems)}</div>
            <button onClick={openOrderModal} class="btn waves-effect waves-light" type="submit" name="action">
                Checkout
            </button>
        </div>
    );
}

const mapDispatchToProps = {
    openOrderModal
}
 
export default connect(null,mapDispatchToProps)(TotalPrice);