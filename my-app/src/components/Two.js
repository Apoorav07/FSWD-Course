import { useSelector } from "react-redux";


const Two = ()=>{
  const state = useSelector(state => state)
  console.log(state)
  return(
    <div>
      <h2>I am component Two</h2>
    </div>
  );
}

export default Two;