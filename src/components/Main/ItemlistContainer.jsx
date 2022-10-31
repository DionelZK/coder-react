import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../Mock/productsMock';
import ItemList from './ItemList';
import './Main.css';
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

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

  return (
    <div className="item-list-container">
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
