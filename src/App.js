import './App.css';
import Navbar from './modulos/Navbar.js';
import ItemListContainer from './modulos/ItemListContainer';
import ItemDetailContainer from './modulos/ItemDetailContainer';





function App() {
  return (
    <>
    <Navbar  />
      
    <hr/>
    
    <ItemListContainer/>
   { /*<ItemDetailContainer /> */}
    
    </>
  );
}

export default App;
