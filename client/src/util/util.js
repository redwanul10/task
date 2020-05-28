
// Delete Product from List By Id 

export const deleteProduct = (list, id)=>{
    const filter = list.filter(item => item.id !== id)
    return filter
}

// Find Product Index From List

export const findProductIndex = (list, id)=>{
    const index = list.findIndex(item => item.id === id)
    return index
}

export const subTotal = cartItems =>{
    let price = 0
    cartItems.forEach(item =>  price += item.price*item.quantity)

    return price
}




