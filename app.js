let value = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('Hello')
  }, 3000)
})

setTimeout(() => {
  console.log(value)
}, 4000)