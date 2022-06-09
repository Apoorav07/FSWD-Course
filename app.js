


const fetchdata = async() =>{
 
  const response = await fetch('http://jsonplaceholder.typicode.com/users')

  const data = await response.json()
  
  console.log(data)
   
}

fetchdata()








