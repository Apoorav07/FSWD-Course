const express =require('express')
const app =express()
const database = require('./database/db')
const categoryroutes = require('./routes/categoryroutes')

 
app.use(express.json())
app.use('/',categoryroutes)
app.get('/',(req,res)=>{
  try {
    console.log(document)
  } catch (error) {
    res.status(203).send(error.message)
  }
})


app.listen(3001,()=>{
  console.log('server listening to port 3001')
})








