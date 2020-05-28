import React,{useState} from 'react';
import {connect} from 'react-redux'
import {closeOrderModal,createdOrder} from '../redux/action/orderAction'
import {subTotal} from '../util/util'

const OrderModal = ({order:{modal,items},closeOrderModal,cartItems,createdOrder}) => {
    console.log(items)
   
    const [data,setData] = useState({
        name:"",
        email:"",
        phone:"",
        shippingAddress:""
    })

    if(!modal) return null

    const handleChange = (event,name)=>{
        setData({
            ...data,
            [name] : event.target.value
        })
    }

    const handleSubmit = ()=> {
        const {name,email,phone,shippingAddress} = data

        if( !name || !email || !phone || !shippingAddress){
            return alert("Please Fill All The Input Fields ")
        }

        if(cartItems.length === 0){
            return alert("Your Cart is Emty")
        }

        const order = {
            ...data,
            items:cartItems,
            total:subTotal(cartItems),
            created : Date.now()
        }

        fetch("/orders",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(order)
       })
        .then(res => res.json())
        .then(order => {
            console.log(order)
            setData({
                name:"",
                email:"",
                phone:"",
                shippingAddress:""
            })
            createdOrder(order.data)
        })
        .catch(err => console.log(err))
    }
    return ( 
        <div id="modal1" class={`modal `} tabindex="0" style={{"zIndex":"1003","display":"block","opacity":"1","top":"10%","transform":"scaleX(1) scaleY(1)"}}>
          <div class="modal-content">
            <h4>Place Order</h4>

            <div className="row">
                <div class="input-field col s12">
                    <input  
                    onChange={e=> handleChange(e,"name")}
                    type="text" 
                    value={data.name}
                    placeholder="Your Name"
                    class="validate"/>
                </div>

                <div class="input-field col s12">
                    <input  
                    onChange={e=> handleChange(e,"email")} 
                    type="email" 
                    value={data.email}
                    placeholder="Your Email"
                    class="validate"/>
                </div>

                <div class="input-field col s12">
                    <input  
                    onChange={e=> handleChange(e,"phone")}
                    type="number" 
                    value={data.phone}
                    placeholder="Phone Number"
                    class="validate"/>
                </div>

                <div class="input-field col s12">
                    <textarea 
                    onChange={e=> handleChange(e,"shippingAddress")}
                    id="textarea1" 
                    row={5}
                    col={5}
                    value={data.shippingAddress}
                    placeholder="Shipping Address"
                    class="materialize-textarea">
                    </textarea>
                </div>
            </div>

          </div>
          <div class="modal-footer">
            <span onClick={closeOrderModal} class="modal-close waves-effect waves-red btn-flat">cancle</span>
            <span onClick={handleSubmit} class="modal-close waves-effect waves-green btn-flat">order</span>
          </div>
        </div>
    );
}

const mapStateToProps = state => ({
    order: state.order,
    cartItems: state.cart,
})

const mapDispatchToProps = {
    closeOrderModal,
    createdOrder
}
 
export default connect(mapStateToProps,mapDispatchToProps)(OrderModal);

