import './App.css';
import Navbar from './modulos/Navbar.js';
import ItemListContainer from './modulos/ItemListContainer';
import ItemDetailContainer from './modulos/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>

  <Navbar  />
   <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
  </Routes>
    
    </BrowserRouter>
  );
}

export default App;
