const express =require('express')
const app =express()

app.get('/products/cases')
app.get('/products/protection')
app.get('/products/bands')

app.get('/products/:categories',(req,res)=>{
  console.log(req.params)
  res.send('PING')
})


app.listen(3001,()=>{
  console.log('server listening to port 3001')
})








