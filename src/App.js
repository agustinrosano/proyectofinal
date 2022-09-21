import './App.css';
import Navbar from './modulos/Navbar.js';
import ItemListContainer from './modulos/ItemListContainer';
import ItemDetailContainer from './modulos/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './modulos/Cart';
import CartContextProvider from './modulos/CartContext'



function App() {
  return (
    <CartContext.Provider>
    <BrowserRouter>

  <Navbar  />
   <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}/>
  </Routes>
    
    </BrowserRouter>

    </CartContext.Provider>
  );
}

export default App;
