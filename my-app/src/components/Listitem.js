const Listitem =({chore})=>{
  
  return(<li>
    <div>
     {chore}
    </div>
    <button style ={{background:'crimson',color : 'white'}}>DELETE</button>
  </li>);
}

export default Listitem;