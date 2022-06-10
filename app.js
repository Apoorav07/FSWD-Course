// 'https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=Pizza'



// const input = document.querySelector('input')
// const button = document.querySelector('button')
// const parent = document.querySelector('div.grid')



// const getData = async (item) => {
//   let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`

//   const res = await fetch(url)
//   const data = await res.json()
//   const recipies = data.hits
//   recipies.forEach(item => {
//     console.log(item)
//     const template =`
//     <img class="card__image" src="https://i.ibb.co/RT0bjJq/food1.png" />
//     <div class="card__data">
//         <div class="card__info">
//             <h2>Nombre Comida</h2>
//             <p>Descripcion de la comida, con ingredientes</p>
//         </div>
//         <h3 class="card__price">$7.50</h3>
//         <button class="card__add">+</button>
//     </div>
// `
//   const newcard = document.createElement('article')
//   newcard.setAttribute('class','card')
//   newcard.setAttribute('style','margin-bottom:20px')
//   newcard.innerHTML = template
//   parent.appendChild(newcard)

//   })

// }

// button.addEventListener('click', (e) => {
//   getData(input.value)
// })




const person =({
  name : 'prem',
  age : 19,
  state : 'rajasthan'
})

const {name , age , state} = person
console.log(name,age,state)

