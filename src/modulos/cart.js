import { useContext  } from "react"
import { CartContext } from "./CartContext"


const Cart = () => {
 const test = useContext(CartContext)
 console.log(test)

    return (
        <>
        <h1 > I am carrito </h1>
        </>
    )
}

export default Cart;