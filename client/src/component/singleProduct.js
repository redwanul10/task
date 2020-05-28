import React from 'react';

const SingleProduct = (props) => {
    return ( 
        <div class="col m3">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://via.placeholder.com/468x250"/>
                </div>
               
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                    {props.data.name}
                    {!props.data.inCart 
                        ? <i onClick={e => props.addToCart(props.data)}class="material-icons right cart_icon">shopping_cart</i>
                        : <i class="material-icons right cart_icon">check</i> 
                    }
                    </span>
                    <p>${props.data.price}</p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div>
    );
}

 
export default SingleProduct;