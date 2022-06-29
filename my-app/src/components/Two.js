import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";

const Two = ()=>{
  const [product,setproduct] = useState('')
  // const state = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const handlesubmit=() =>{
    const action = {
      type:"ADD_PRODUCT",
      payload:product
    }
   dispatch(action)
  }

  return(
    <div>
      <input type= 'text' onChange={(e)=>{setproduct(e.target.value)}} ></input>
      <button onClick={handlesubmit}>ADD</button>
    </div>
  );
}

export default Two;