const express =require('express')
const app =express()

app.use(express.json())

let products = [{name:'iphone12 case',price:'999'},{name:'iphone13 case',price:'1199'},{name:'iphone13 pro case',price:'1499'}]

const validator =(req,res,next) =>{
  const{name,price} =req.body
  if (!name||!price) res.json({error:"validation failed"})
  else next()
}


//public routes
//get route
//send all products


app.get('/products',(req,res)=>{
  res.json({products})
})

//private routes

app.post('/products/add',validator,(req,res)=>{
 const{name,price}=req.body
  const newproduct={
    name,
    price,
  }
  products.push(newproduct)
  res.send({products})

  
  
})


app.listen(3000,()=>{
  console.log('server listening to port 3000')
})








