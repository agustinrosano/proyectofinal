import { CartContext } from "./CartContext";
import { useContext } from "react";



const Cart = () => {

 
   const test = useContext (CartContext);
   console.log( test)


 return (


    <>
       <h1 classNameName="d-flex justify-content-center m-5">You cart</h1>

       <div className="containerDetail2">      
            

            <div className="cardDetail2">

                <div className="flex-item">
                {            
                test.cartList.map (item =>
                <>
                <h2>{item.brand}</h2>
                <img className="cart2" src={item.image} alt="" />
                <span className="name2">  <span className="precio3">Modelo:</span> {item.nombre} <span className="precio3">/ Cantidad:</span> {item.quantity} <span className="precio3">/ Precio x Unidad =</span> {item.precio} pesos  <span className="precio3"> Subtotal: </span> {item.quantity * item.precio}</span>           
                
                <buttom className="btn btn-outline-primary btn-lg" onClick={() => test.removeItem(item.id)}>Quitar producto</buttom>
                <div><hr/></div>
                </>
                
                )
            
                }</div>
                <div className="flex-item">

        
        <hr />
        
        </div>
        </div>
                
        <div className="flex-item"><h1>Total Compra = {test.calcTotalCompra()} pesos . </h1> </div>
        <div className="flex-item"><buttom className="btn btn-secondary btn-lg"> Realizar Compra</buttom></div>
        <div classNameName="flex-item"><button classNameName="btn btn-outline-danger btn-lg" onClick={test.clear}>Quitar todos</button></div>
        
        </div>
        

       
    </>
    )
}

export default Cart;