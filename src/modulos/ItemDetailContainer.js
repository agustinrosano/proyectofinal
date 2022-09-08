import {useEffect, useState} from "react";
import ItemDetail from "./ItemDetails";
import {data} from "./utils/data";
import promise from "./utils/promises";


function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();

  useEffect(() => {
    promise(data[0])
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, []);

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div>
        <div></div>
        <p>Cargando</p>
      </div>
  );
};

export default ItemDetailContainer;