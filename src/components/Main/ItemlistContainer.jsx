import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './productsMock';
import ItemList from './ItemList';
import './Main.css';
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  //estado

  // const valor = useParams();
  // console.log(valor.categoryName);

  const { category } = useParams();
  //categoryName -> camisas, remeras, gorras

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res, rej) => {
        const prodFiltrados = products.filter(
          (prod) => prod.category === category
        );
        const prod = category ? prodFiltrados : products;
        setTimeout(() => {
          res(prod);
        }, 500);
      });
    };
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  //console.log(items);
  return (
    <div className="item-list-container">
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
