var input = document.querySelector('input')
var add = document.querySelector('.add')
var mode = document.querySelector('.mode')
var body = document.querySelector('body')
var list = document.querySelector('ul')

var chores =[]



var callbackfunc = () => {

  const inputvalue = input.value
  if(chores.includes(inputvalue)){
    window.prompt(inputvalue  + ' already exists')
  }
  else{
    chores.push(inputvalue)
    const element = document.createElement('li')
  const textnode = document.createTextNode(inputvalue)
  element.appendChild(textnode)
  list.appendChild(element)
  
  element.addEventListener('click',(e) =>{
     e.target.remove()
  })
  }
  


}

add.addEventListener('click',callbackfunc)

mode.addEventListener('click',() =>{
  body.classList.toggle('dark')
})