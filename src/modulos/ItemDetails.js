import ItemCount from "./ItemCount";



const ItemDetail = (props) => {
   
  

  return (
    <>
    <div className="card mb-3 m-5" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.item.img} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{props.item.name}</h5>
              <p className='card-text'>{props.item.description}</p>
               <p className='card-text'>{props.item.price}</p>
               <p className='card-text'>Stock : {props.item.stock} </p>
                <ItemCount stock={props.item.stock} initial={props.item.counter}  />
               
            </div>
          </div>
        </div>
      </div>









    {/* <div className='d-inline-flex m-5 w-25 justify-content-xxl-center '>
        <div className='justify-content-xxl-center '>
           <div className=" cart ">
             <div className='productCard'>
               <img className=' w-50' src={props.item.img} alt="dalee pipi" />
               <h3 className='productName'>{props.item.name}</h3>
               <p className='productDescription'>{props.item.description}</p>
               <p className='productPrice'>{props.price}</p>
               <p className=''>Stock : {props.item.stock} </p>
              
              
             
             </div>
           </div>
         </div>
     </div>  */}


     </>  
  )
};

export default ItemDetail;