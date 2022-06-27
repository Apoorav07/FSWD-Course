

import { useState } from 'react'
const Content = () => {
  const [items,setitems] = useState([])
  const [value,setvalue] = useState('')

  const handlesubmit=()=>{
    setitems(prev => [...prev,value])
    setvalue('')
      
}
  const handleinput =(e)=>{
    setvalue(e.target.value)
  }
  
 const handledelete =(item)=>{ 
    console.log(item)
    setitems(prev => prev.filter(i => i !== item))
 }

  return(
    <>
    
     <h2>Todo</h2>
     
      <input value={value} onChange={handleinput} type="text" ></input>
      <button onClick={handlesubmit} type="submit" >ADD</button>
     
     <ul>
      {items.map( item => <li>{item} <button onClick={()=>{handledelete(item)}}>Delete</button> </li>)}
      
     </ul>
     
    </>
   );
}

export default Content;


