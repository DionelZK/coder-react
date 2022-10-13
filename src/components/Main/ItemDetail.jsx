import React from 'react';
import './Main.css';
const ItemDetail = ({ item }) => {
  return (
    <div className="container-detail">
      <img src={item.img} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem,
          consequatur accusamus dicta incidunt sapiente cum ipsa, ducimus
        </p>
        <button className="btn">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
