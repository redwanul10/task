import React,{useEffect} from 'react';
import {connect} from "react-redux"
import {fetchOrders} from '../redux/action/orderAction'

const Orders = (props) => {
    
    useEffect(()=>{
        props.fetchOrders("/orders")
    },[])

    const displayProducts = products=> {
        const items = products.map(item => item.name)
        return items.toString()
    }

    return ( 
        <>
        <h1>Orders</h1>
        
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Items</th>
              <th>Total Price</th>
          </tr>
        </thead>

        <tbody>
        

        {props.order.items.length > 0 && props.order.items.map(item => (
            <tr>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td className="w450">{displayProducts(item.items)}</td>
                <td>{item.total}</td>
            </tr>
        ))}
        
        </tbody>
      </table>

        </>
     );
}

const mapDispatchToProps = {
    fetchOrders
}

const mapStateToProps = state =>({
    order: state.order
})
 
export default connect(mapStateToProps,mapDispatchToProps)(Orders);