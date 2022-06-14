const express =require('express')
const app =express()

const verify =(req,res,next)=>{
  if(req.headers['user-agent'] === 'Thunder Client (https://www.thunderclient.com)') next()
  else res.send('BLOCKED')
}


app.get('/',verify,(req,res)=>{
  res.send('verified')
  
})



app.listen(3000,()=>{
  console.log('server listening to port 3000')
})








