import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'


export default function Item(props) {
  return (
  <>
<div className='card w-25 m-5 d-xl-inline-flex' >
  <img src={props.imgPath} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text">precio : {props.price}</p><p className="card-text">Stock : {props.stock}</p>
    <Link to={`/item/${props.id}`} ><p className='btn btn-primary'>Detalles</p></Link>
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