var button=document.querySelector('button')
var input= document.querySelector('input')
var list=document.querySelector('ul')

const callbackfunc = (event) => {
  console.log(event.target)
  console.log(input.value)
}

button.addEventListener('click',callbackfunc)

