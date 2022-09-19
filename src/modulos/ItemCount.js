
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({stock=0,initial=1}) => {


const [counter, setCounter] =  useState (0);

const [nose, setnose] =  useState (1);

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

   
    setnose(nose+1)
    alert ("se agregaro correctamente al carrito " + counter + " gracias" )
    
  
   
};



return(
    <>
    
      
        
        {  
             nose === 1

             ?<div className="d-flex">
            <button onClick={incremento} type="button" className="btn btn-outline-primary">+</button>
            <button  className="btn btn-outline-secondary" >{counter}</button>
            <button onClick={decremento} type="button" className="btn btn-outline-primary">-</button>
            <button onClick={ addCart } type="button" className="btn btn-primary "> Add to Cart </button>
        </div>

             :<Link to='/Cart'><button type="button" class="btn btn-danger">Check Out</button></Link>

           }
        
    </>
    )
}

export default ItemCount

