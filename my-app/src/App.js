import {useState} from 'react';
import Details from './components/Detail';
import Products from './components/Products';
import {Routes,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
const App =()=> {

  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/product/:name' element={<Details/>} />
      </Routes>
    </div>
    
    
  );
}

export default App;
