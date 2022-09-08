import React, {useState, useEffect} from "react";
import promise from "./utils/promises";
import {data} from "./utils/data";
import Item from "./Item";


export default function ItemList () {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    promise(data)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  },[])

  return (
    <>
      {products.map(item =>
       ( 
        <Item 
          name={item.name}
          stock={item.stock} 
          imgPath={item.img}
          price={item.price}
          description={item.description}
        
        />
        ))
        }
    </>
  );
}