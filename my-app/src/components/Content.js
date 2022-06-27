

import { useState,useEffect } from 'react'
const Content = () => {
 


 const [counter,setcounter] = useState(0)

useEffect(()=>{
console.log('Mounted')

},[])



  return(
    
   <div>
    
  <h2>{counter}</h2>
  <button onClick={()=>{setcounter(prev => prev + 1)}} >ClickMe</button>
   </div>

   );
}

export default Content;


