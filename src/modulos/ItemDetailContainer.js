import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetails";
import {data} from "./utils/data";
import promise from "./utils/promises";


function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();
  const {id} = useParams();


  useEffect(() => {

    promise(data.find(item => item.id == id))
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))

  }, []);

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div className=" d-flex justify-content-center">
        <div>
            <p>Cargando...</p>
        </div>
      </div>
  );
};

export default ItemDetailContainer;