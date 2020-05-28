import React from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../redux/action/cart'
import SingleProduct from './singleProduct';

const Products = ({products,addToCart}) => {
    console.log(products)
    return ( 
        <div className="products">
            {products.items.map(item => 
                <SingleProduct data={item} addToCart={addToCart}/> 
            )}
        </div>
     );
}

const mapStateToProps = (state)=>({
    products: state.products,
})

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
