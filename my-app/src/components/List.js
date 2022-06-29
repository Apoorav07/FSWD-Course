import { useDispatch, useSelector } from "react-redux";
import Additem from "./Additem";


const List = () => {
  const items = useSelector(state=>state)
  const dispatch = useDispatch()

const handledelete =(id)=>{
  console.log(id)

  const action = {
    type: "DELETE_ITEM",
    payload:id
  }
  dispatch(action)
}


  
  return ( 
    <div>
      <Additem/>
     <ul>
      {items.map(item=><li>{item.text} <button onClick={()=>{handledelete(item.id)}}>DELETE</button></li>)}
     </ul>
    </div>
   );
}
 
export default List ;