
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({stock=0,initial=1}) => {


const [counter, setCounter] =  useState (0);

useEffect(() => {
    setCounter(initial);
},[initial]);

const incremento = () => {
    
    if (counter < stock) {
        setCounter(counter + 1);
    }
};

const decremento = ( ) => {
    if (counter > initial){
        setCounter(counter - 1);
    }
};

const addCart = () => {

   

    alert ("se agregaro correctamente al carrito " + counter + " gracias" )
    
  
   
};



return(
    <>
    
        

        <div className="d-flex">
            <button onClick={incremento} type="button" className="btn btn-outline-primary">+</button>
            <button  className="btn btn-outline-secondary" >{counter}</button>
            <button onClick={decremento} type="button" className="btn btn-outline-primary">-</button>
        </div>
       {     
        counter
        
        ? <button onClick={ addCart } type="button" className="btn btn-primary "> Add to Cart </button>
        :  <Link to='/cart'><button type="button" class="btn btn-dark">Check Out</button></Link>
    }
       

    </>
    )
}

export default ItemCount

