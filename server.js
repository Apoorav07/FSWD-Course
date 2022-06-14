const express =require('express')
const app =express()

const logger =(req,res,next)=>{
  console.log(req.method)
  next()
}

app.use(logger)

app.get('/',(req,res)=>{
  res.send('hemlo sirmji')
})

app.post('/',(req,res)=>{
  res.send('servevr changa si')
})

app.listen(3000,()=>{
  console.log('server listening to port 3000')
})








