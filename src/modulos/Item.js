import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


export default function Item(props) {
  return (
    <>
    <div className='d-inline-flex m-5 w-25 '>
       <div className='justify-content-xxl-center '>
          <div className=" cart ">
            <div className='productCard'>
              <img className=' w-50' src={props.imgPath} alt="dalee pipi" />
              <h3 className='productName'>{props.name}</h3>
              <p className='productDescription'>{props.description}</p>
              <Link to={`/item/${props.id}`} ><p>Detalles</p></Link> 
              <p className='productPrice'>{props.price}</p><p>Stock : {props.stock} </p>
              <ItemCount stock={props.stock} initial={props.initial}/>
            </div>
          </div>
        </div>
    </div> 
    </>
  )
}



// export default function Item(props) {
//   return (
//     <>
//     <div className='d-inline-flex m-5 w-25 '>
//        <div className='justify-content-xxl-center '>
//           <div className=" cart ">
//             <div className='productCard'>
//               <img className=' w-50' src={props.item.img} alt="dalee pipi" />
//               <h3 className='productName'>{props.item.name}</h3>
//               <p className='productDescription'>{props.item.description}</p>
//               <p className='productPrice'>{props.price}</p><p>Stock : {props.item.stock} </p>
//               <ItemCount stock={props.stock} initial={props.initial}/>
//             </div>
//           </div>
//         </div>
//     </div> 
//     </>
//   )