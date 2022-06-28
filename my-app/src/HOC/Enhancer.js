const Enhancer=(Component) =>{
  return ()=>(
    <div>
      <h3>Enhanced component </h3>
      <Component/>
    </div>
  )
}

export default Enhancer;