// 'https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=Pizza'



const input = document.querySelector('input')
const button = document.querySelector('button')


const getData = async (item) => {
  let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`

  const res = await fetch(url)
  const data = await res.json()
  console.log(data.hits)
}

button.addEventListener('click', (e) => {
  getData(input.value)
})








