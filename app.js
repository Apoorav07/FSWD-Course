let value = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject('Hello')
  }, 3000)
})

setTimeout(() => {
  console.log(value)
}, 4000)