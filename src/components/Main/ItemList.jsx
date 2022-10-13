import React from 'react';
import Card from './Card';
import './Main.css';
const ItemList = ({ items }) => {
  return (
    <div className="container">
      {items.map((prod) => {
        return <Card prod={prod} key={prod.id} />;
      })}
      ;
    </div>
  );
};

export default ItemList;
