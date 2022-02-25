var heading =document.getElementById('heading')

console.log(heading)
heading.innerHTML='i was added by JS'
heading.style='color:red;font-size:3rem'

heading.classList.add('five')
heading.classList.remove('one')
console.log(heading.classList)