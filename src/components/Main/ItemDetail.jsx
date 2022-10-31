import './Main.css';
import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
const ItemDetail = ({ item }) => {
  const {
    cart,
    addToCart,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
  } = useContext(cartContext);
  const quantity = getItemQuantity(item.id);
  return (
    <div className="container-detail">
      <img src={item.img} alt={item.title} />
      <div>
        <h2>{item.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem,
          consequatur accusamus dicta incidunt sapiente cum ipsa, ducimus
        </p>

        {quantity === 0 ? (
          <button className="btn" onClick={() => addToCart(item)}>
            Agregar al carrito
          </button>
        ) : (
          <div className="add-item">
            <button
              className="add"
              onClick={() => increaseCartQuantity(item.id)}
            >
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
              onClick={() => decreaseCartQuantity(item.id)}
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
