const express = require('express')
const { categories } = require('../database/db')
const router = express.Router()
const database = require('../database/db')
const { v4:uuidv4} =require('uuid')


router.get('/all',(req,res)=>{
  try {
    res.status(200).json({
      categories:database.categories,
      message:"successfully fetched categories",
      status:"success"

    })
  } catch (error) {
    res.status(200).json({
      categories:[],
      message:error.message,
      status:"FAILED"

    })
  }
})


router.post('/add',(req,res)=>{
  const{name}=req.body
    let newcategory ={
      
      id:uuidv4(),
      name
    }
    database.categories.push(newcategory)
  try {
    
    res.status(200).json({
      categories:database.categories,
      message:"successfully added category",
      status: "SUCCESS"
    })
  } catch (error) {
    res.status(200).json({
      categories:[],
      message:error.message,
      status: "FAILED"
    })
  }
})



module.exports = router