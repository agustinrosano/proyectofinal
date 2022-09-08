import ItemCount from "./ItemCount";
import React from "react";



function ItemDetail(props) {

  return (
    <div className="cart d-flex justify-content-end">
      <div>
        <div className="container">
          <div>
            <img
              src={props.item.img}
            />
            <h2>{props.item.name}</h2>
          </div>

          <div>
            <div>

              <div>
                <h3>Descripción</h3>
                <div>
                  <p>{props.item.description}</p>
                </div>
              </div>
            </div>

            <div>
              <h3>Precio</h3>
              <p>{props.item.cost}</p>
              <div className="container">
                <ItemCount stock={props.item.stock} min={props.item.initial}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;