// let response = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {console.log(data)})

const list =document.querySelector('ul')


var arr = ['one','two','three','four']

arr.forEach(chore =>{
 const element =document.createElement('li')
 const textnode =document.createTextNode(chore)
 element.appendChild(textnode)
 console.log(element)
 
 element.addEventListener('click', (e) => {
   
   const userinput =window.prompt(`are you sure you want to delete "${chore}" `)
   if (userinput === 'YES') e.target.remove('chore')
 })

 list.appendChild(element)
})


