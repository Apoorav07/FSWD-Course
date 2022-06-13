const fs = require('fs')

// fs.readFile('./test.txt',(error,data)=>{
//   if (error) console.log(error)
//   else console.log( data)
// })

//  it gives you a buffer in output 

// fs.readFile('./test.txt','utf8',(error,data)=>{
//   if (error) console.log(error)
//   else console.log( data)
// })
// it gives you actual text which is there in file as output

// fs.readFile('./test.txt','utf8',(error,data)=>{
//   if (error) console.log(error)
//   else console.log( data.toString())
// })
// tostring method converts bufffer to string


// console.log(fs.readFileSync('./test.txt','utf8'))
// readfilesync make the file to be read in sync way like whtat is logged first will be logged first in console


fs.writeFile('./test.txt','new stuff inside the file',(error,data)=>{
    if (error) console.log(error)
    else console.log( data)
  })


