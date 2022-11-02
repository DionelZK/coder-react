import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './Main.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const collectionProd = collection(db, 'prods');
    const ref = category
      ? query(collectionProd, where('category', '==', category))
      : collectionProd;

    getDocs(ref)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
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
