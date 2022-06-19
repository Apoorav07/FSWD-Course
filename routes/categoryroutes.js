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
  
  try {
    const includes = database.categories.find(item =>item.name ===name)
  if(!includes)database.categories.push(newcategory)
  else console.log("already exists")

    
    res.status(200).json({
      categories:database.categories,
      message:"successfully added category",
      status: "SUCCESS"
    })
  } catch (error) {
    res.json({
      categories:[],
      message:error.message,
      status: "FAILED"
    })
  }
})

router.delete('/delete',(req,res)=>{
  try {
    const {id} =req.body
    // let element =database.categories.find(item=> item.id === id)
    // const index = database.categories.indexOf(element)
    // database.categories.splice(index,1)
    
    const newcategories = database.categories.filter(item => item.id!==id)
    database.categories = newcategories


    
    res.json({
      categories:newcategories,
      message:"successfully removed category",
      status: "SUCCESS"
    })
  } catch (error) {
    res.json({
      categories:[],
      message:error.message,
      status: "FAILED"
    })
  }
})

router.put('/update',(req,res)=>{
  try {
    const {id , newname} = req.body
   const element = database.categories.find(item=> item.id === id)
    if(element.name !== newname){
      const newcategory = element.name.replace(name,newname)
      database.categories=newcategory
    }
    else{console.log('already exists')}
   
    res.json({
     categories:newcategory,
     message: "successfully updated",
     status: "success"
    })

  } catch (error) {
   res.json({categories:[],
    message : error.message,
    status: "failed"}) 
  }
})


module.exports = router