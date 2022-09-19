import { CartContext } from "./CartContext";
import { useContext } from "react";



const Cart = () => {

 
   const test = useContext (CartContext);
   console.log( test)


 return (


    <>
       <h1 className="d-flex justify-content-center m-5">You cart</h1>

       
    </>
    )
}

export default Cart;