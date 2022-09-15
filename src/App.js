import './App.css';
import Navbar from './modulos/Navbar.js';
import ItemListContainer from './modulos/ItemListContainer';
import ItemDetailContainer from './modulos/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './modulos/Cart';
import CartContextProvider from './modulos/CartContext'



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>

  <Navbar  />
   <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route part='/Cart' element={<Cart/>}/>
  </Routes>
    
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
