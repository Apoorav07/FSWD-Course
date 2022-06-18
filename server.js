const express =require('express')
const app =express()
const database = require('./database/db')
const categoryroutes = require('./routes/categoryroutes')
const productroutes = require('./routes/productroutes')
 
app.use(express.json())
app.use('/category',categoryroutes)
app.use('/products',productroutes)


app.listen(3001,()=>{
  console.log('server listening to port 3001')
})







