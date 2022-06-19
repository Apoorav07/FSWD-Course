const express = require('express')

const router = express.Router()
const database = require('../database/db')
const { v4:uuidv4} =require('uuid')
const { products } = require('../database/db')


router.get('/all',(req,res)=>{
  try {
    res.json({
      products:database.products,
      message:"successfully fetched products",
      status:"success"

    })
  } catch (error) {
    res.json({
      products:[],
      message:error.message,
      status:"FAILED"

    })
  }
})


router.post('/add',(req,res)=>{

  const {name,category,price} = req.body
  
   if(!database.categories.find(item => item.name === category)){
    let newcategory = {name: category , id:uuidv4()}
    database.categories.push(newcategory)

     const newproduct = {
      id:uuidv4(),
      name,price,category : category
     }
     database.products.push(newproduct)
   }else{
    const newproduct = {
      id:uuidv4(),
      name,price,category : category
     }
     database.products.push(newproduct)
   }


  try {
    res.json({
      products:database.products,
      message:"successfully fetched products",
      status:"success"

    })
  } catch (error) {
    res.json({
      products:[],
      message:error.message,
      status:"FAILED"

    })
  }
})


router.delete('/delete',(req,res)=>{
  
   try {
    const {id} = req.body

  const newproducts = database.products.filter(item => item.id !== id)
   database.products = newproducts

     res.json({
      products:newproducts,
      message:"product removed successfully",
      status : "success"
     })
   } catch (error) {
    res.json({
      products :[] ,  
      message:error.message,
      status :"failed"

    })
   }
})




module.exports = router