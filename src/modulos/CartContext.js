import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

const [CartList,setCartList] = useState ([]);

const addItem = (item) => {
    setCartList(item)
}

    return (

        <CartContext.Provider value = {{CartList, addItem}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;