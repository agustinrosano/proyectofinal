import React, {useState, useEffect} from "react";
import promise from "./utils/promises";
import {data} from "./utils/data";
import Item from "./Item";
import { useParams } from "react-router-dom";


export default function ItemList () {

  const [products, setProducts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    if (id){
      promise(data.filter(item => item.categoryId == parseInt(id)))
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    } else {
      promise(data)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }
  },[id])

  return (
    <>
      {products.map(item =>
       ( 
        <Item 
          name={item.name}
          id={item.id}
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