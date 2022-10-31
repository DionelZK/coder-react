import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
function Cartwidget() {
  const { cartQuantity } = useContext(cartContext);
  return (
    <div>
      <FontAwesomeIcon
        className="cart-svg"
        icon={faCartShopping}
      ></FontAwesomeIcon>
      {cartQuantity === 0 ? (
        <></>
      ) : (
        <div className="item-quantity">{cartQuantity}</div>
      )}
    </div>
  );
}

export default Cartwidget;
