




const input = document.querySelector('input')
const button = document.querySelector('button')
const parent = document.querySelector('.grid')


const getData = async (item) => {
  let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`

  const res = await fetch(url)
  const data = await res.json()
  const recipies = data.hits
  recipies.forEach(item => {
         const { recipe } = item
       const {image, label , source ,calories } = recipe
       const template = `
           <img class="card__image" src="${image}" />
           <div class="card__data">
               <div class="card__info">
                   <h2>${label}</h2>
                   <p>from ${source}</p>
               </div>
               <h3 class="card__price">${calories.toFixed(2)}</h3>
               <button class="card__add">+</button>
           </div>`

           const newcard = document.createElement('article')
           newcard.setAttribute('class','card')
           newcard.setAttribute('style','margin-bottom:50px')
           newcard.innerHTML=template
           parent.appendChild(newcard)
  })
}

button.addEventListener('click',(e)=>{
  getData(input.value)
})