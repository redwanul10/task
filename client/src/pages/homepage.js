import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {fetchProduct} from '../redux/action/productAction'
import Products from '../component/products';
import Cart from '../component/cart';
import OrderModal from '../component/orderModal';

const HomePage = (props) => {

    useEffect(()=>{
        props.fetchProduct("/products")
    })

    return ( 
        <div class="row">
            <div class="col s9"><Products/></div>
            <div class="col s3"><Cart/></div>
            <OrderModal/>
        </div>
    );
}

const mapDispatchToProps = {
    fetchProduct
}


 
export default connect(null,mapDispatchToProps)(HomePage);