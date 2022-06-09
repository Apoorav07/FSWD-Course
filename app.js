const table = document.querySelector('table')




fetch('http://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
  
  data.forEach(user => {
    let newrow = document.createElement('tr')
    let element =
    `<td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.username}</td>`
     newrow.innerHTML=element
     table.appendChild(newrow)
  })
})








