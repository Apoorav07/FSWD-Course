const initState = [
  {password:"something"},
  {password:"sometggggggghing"},
  {password:"somethggging"}
]




const reducer = (state = initState,action) =>{
   switch (action.type){
    case 'ADD_DATA':
      return [...state,action.payload]
    default:
      return state
   }
}

export default reducer