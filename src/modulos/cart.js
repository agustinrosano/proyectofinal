import { useContext  } from "react"
import { CartContext } from "./CartContext"


const Cart = () => {
 const test = useContext(CartContext)
 console.log(test)

 return (
    <>
    
    </>
    )
}

export default Cart;