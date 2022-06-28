import Enhancer from "../HOC/Enhancer";

const Description = () =>{
  return(
  <div>
    <h1>This is a heading</h1>
    <div>A theory is a rational type of abstract thinking about a phenomenon, or the results of such thinking. The process of contemplative and rational thinking is often associated with such processes as observational study or research. Theories may be scientific, belong to a non-scientific discipline, or no discipline at all. Depending on the context, a theory's assertions might, for example, include generalized explanations of how nature works. The word has its roots in ancient Greek, but in modern use it has taken on several related meanings.</div>
  </div>
  );
}

export default Enhancer(Description);