import React, { useEffect, useState } from 'react';
import { products } from '../../Mock/productsMock';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './Main.css';
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const traerProducto = () => {
      return new Promise((res, rej) => {
        const producto = products.find((prod) => prod.id === Number(id));

        setTimeout(() => {
          res(producto);
        }, 500);
      });
    };
    traerProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="item-list-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
