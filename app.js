const a = document.querySelectorAll('input') [0]
const b = document.querySelectorAll('input') [1]
const add=document.querySelector('#add')
const multiply=document.querySelector('#multiply')
const resultbox=document.querySelector('.result')


const sum= () => {
  const result=parseInt(a.value)+parseInt(b.value)
  resultbox.innerHTML=result
}
add.addEventListener('click',sum)


const into= () => {
  const result=parseInt(a.value)*parseInt(b.value)
  resultbox.innerHTML=result
}
multiply.addEventListener('click',into)
