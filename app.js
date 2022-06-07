let response = fetch('http://jsonplaceholder.typicode.com/users').then(res => {
  let parseddata =res.json()
  console.log(parseddata)
  return parseddata
}).then(data => {console.log(data)})

