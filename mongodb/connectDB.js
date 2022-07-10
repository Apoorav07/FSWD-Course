const mongoose = require('mongoose')

const connection_string = 'mongodb+srv://apoorav23:apooravmongo7@webdevelopment.2345d.mongodb.net/test'




const connectDB =async() =>{
  try {
   await mongoose.connect(connection_string)
   console.log('connected to database')
  } catch (error) {
    console.log(error)
  }
}


module.exports= connectDB