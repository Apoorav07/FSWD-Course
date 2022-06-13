const path = require('path')

// console.log(path.resolve('./app.js'))

// resolve method converts relative path to absolute path


// console.log(path.relative('/','./temp/utilis.js'))

// path.relative converts your path to relative path
// path.relative will specify you the  relative path of second parameter to the first parameter

//  console.log(path.extname('./app.js'))

// path.extname gives you the extension name of file you specified


// console.log(path.dirname('./temp/utilis.js'))

// path.dirname will give you the name of directory where your file is

// console.log(__dirname)


// __dirname gives you path of current directory yoou are in



console.log(path.join(__dirname,'app.js'))