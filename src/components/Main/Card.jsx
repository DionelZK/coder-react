import React from 'react';
import './Main.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';

const Card = ({ prod }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    addToCart,
  } = useContext(cartContext);
  const quantity = getItemQuantity(prod.id);
  return (
    <div className="card">
      <img src={prod.img} alt={prod.name} />
      <div className="div-p">
        <p>{prod.name}</p>
        <p>${prod.price}</p>
      </div>
      <Link
        to={`/item/${prod.id}`}
        style={{ color: 'black', textDecoration: 'none' }}
      >
        Ver Detalle
      </Link>
      {quantity === 0 ? (
        <button className="btn" onClick={() => addToCart(prod)}>
          Agregar al carrito
        </button>
      ) : (
        <div className="add-item">
          <button className="add" onClick={() => increaseCartQuantity(prod.id)}>
            +
          </button>
          <p style={{ color: '#3C3744' }}>
            <span style={{ color: '#2E1F27', fontSize: '20px' }}>
              {quantity}
            </span>
            en el carrito
          </p>
          <button
            className="remove"
            onClick={() => decreaseCartQuantity(prod.id)}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
