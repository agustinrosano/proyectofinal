import React from 'react'
import ItemCount from './ItemCount'


export default function Item(props) {
  return (
    <>
    <div className='d-inline-flex m-5 w-25 '>
       <div className='justify-content-xxl-center '>
          <div className=" cart ">
            <div className='productCard'>
              <h3 className='productName'>{props.name}</h3>
              <img className=' w-50' src={props.imgPath} alt="dalee pipi" />
              <p className='productDescription'>{props.description}</p>
              <p className='productPrice'>{props.price}</p>
              <ItemCount stock={props.stock} initial={props.initial}/>
            </div>
          </div>
        </div>
    </div> 
    </>
  )
}