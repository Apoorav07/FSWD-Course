var heading =document.getElementById('heading')
var body=document.querySelector('body')
console.log(heading)
heading.innerHTML='i was added by JS'
heading.style='color:red;font-size:3rem'

heading.classList.add('five')
heading.classList.remove('one')
body.classList.add('dark')
