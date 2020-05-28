const cors = require('cors')
const uid = require('uid');
const bodyparser = require('body-parser')
const express = require('express')
const app = express()

const products = require('./product.json')
const orders = require('./order.json')

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

const data ={
    products:[...products],
    orders : [...orders] 
}

// Get All Products

app.get("/products", (req,res) => {
    const {products} = data
    res.status(200).json({products})
})

// Create An Order

app.post("/orders",(req,res)=>{
    const newOrder = {
        ...req.body,
        id: uid(20)
    }
    data.orders.push(newOrder)
    res.status(200).json({data:newOrder})
})

// Get All Orders

app.get("/orders",(req,res)=>{
    const {orders} = data
    res.status(200).json({orders})
})


app.listen(5000,()=>console.log("server started"))

