// const http =require('http')
// const fs = require('fs')
// const path = require('path')


// const server =http.createServer((request,response)=>{
//   // console.log(request)
//   // console.log(request.url)
//   // console.log(request.headers)
//   // console.log(request.method)
//   // const path = request.url
//    const markup = fs.readFileSync(path.resolve('./index.html'))
//   response.write(markup)
//   response.end()
// })

// console.log(server)

// server.listen(3000,()=>{
//   console.log(`server listening at PORT: ${3000}`)
// })

// above we created a server



// const http =require('http')
// const fs = require('fs')
// const path = require('path')


// const server =http.createServer((request,response)=>{
//   // console.log(request)
//   // console.log(request.url)
//   // console.log(request.headers)
//   // console.log(request.method)
//   // const path = request.url
//    const {url }=request
//    if(url == '/login'){
//     response.write('<h1>LOGIN</h1>')
//     response.end()
//    }
//    if (url=='/signup'){
//     response.write('<h1>SIGNUP</h1>')
//     response.end()
//    }
// })



// server.listen(3000,()=>{
//   console.log(`server listening at PORT: ${3000}`)
// })

// above thing is called routing






// NOW WE WILL CREATE A SERVER WITH EXPRESS


const express = require('express')
const app =express()

app.get('/login',(req,res) =>{
  
  res.send('hemmlo login pamji')
})

app.get('/logout',(req,res) =>{
  
  res.send('hemmlo logout pamji')
})


app.listen(3000,()=>{
  console.log('server litening to port 3000')
})


