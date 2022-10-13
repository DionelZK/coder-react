import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const Card = ({ prod }) => {
  return (
    <div className="card">
      <img src={prod.img} alt={prod.name} />
      <div className="div-p">
        <p>{prod.name}</p>
        <p>${prod.price}</p>
        <Link to={`/item/${prod.id}`}>Ver Detalle</Link>
      </div>
    </div>
  );
};

export default Card;
