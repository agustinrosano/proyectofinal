import ItemCount from "./ItemCount";
import React from "react";
import { Link } from "react-router-dom";



function ItemDetail(props) {

  return (
    <div className='d-inline-flex m-5 w-25 justify-content-xxl-center '>
        <div className='justify-content-xxl-center '>
           <div className=" cart ">
             <div className='productCard'>
               <img className=' w-50' src={props.item.img} alt="dalee pipi" />
               <h3 className='productName'>{props.item.name}</h3>
               <p className='productDescription'>{props.item.description}</p>
               <p className='productPrice'>{props.price}</p>
               <p className=''>Stock : {props.item.stock} </p>

             
     


              <ItemCount stock={props.item.stock} initial={props.item.initial}  />
              

             
             </div>
           </div>
         </div>
     </div> 
  )
};

export default ItemDetail;