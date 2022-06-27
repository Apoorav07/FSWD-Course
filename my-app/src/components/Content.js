

import { useState } from 'react'
const Content = () => {
  const [items,setitems] = useState([])
  const [value,setvalue] = useState('')

  const handlesubmit=()=>{
    setitems(prev => [prev,value])
    
      
}
  const handleinput =(e)=>{
    setvalue(e.target.value)
  }
  
  return(
    <>
    
     <h2>Todo</h2>
     
      <input  onChange={handleinput} type="text" ></input>
      <button onClick={handlesubmit} type="submit" >ADD</button>
     
     <ul>
      {items.map( item => <li>{item}</li>)}
      
     </ul>
     
    </>
   );
}

export default Content;


