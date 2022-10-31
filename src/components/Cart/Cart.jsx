import { useContext } from 'react';
import { cartContext } from '../../Context/CartContext';
import './cart.css';
const Cart = () => {
  const { cart, increaseCartQuantity, decreaseCartQuantity, finalPrice, buy } =
    useContext(cartContext);

  const total = finalPrice(cart);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p className="title">Carrito</p>
      {cart.length > 0 ? (
        <div className="cart-container">
          {cart.map((product) => {
            return (
              <div key={product.id} className="cart-card">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      minWidth: '150px',
                      maxWidth: '150px',
                      maxHeight: '150px',
                    }}
                  />
                  <p
                    style={{
                      color: 'black',
                      width: '200px',
                      textAlign: 'center',
                      justifyItems: 'center',
                    }}
                  >
                    {product.name}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <button
                    className="add"
                    onClick={() => increaseCartQuantity(product.id)}
                    style={{ margin: '5px', fontSize: '15px' }}
                  >
                    +
                  </button>
                  <p style={{ fontSize: '20px', color: '#3C3744' }}>
                    {product.quantity}
                  </p>
                  <button
                    className="remove"
                    onClick={() => decreaseCartQuantity(product.id)}
                    style={{
                      margin: '5px',
                      fontSize: '15px',
                      textAlign: 'center',
                    }}
                  >
                    -
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p>${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Tu carrito esta vacio</p>
        </div>
      )}
      {cart.length === 0 ? (
        <></>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                margin: '1.5rem',
                fontSize: '20px',
              }}
            >
              Precio final:${total}
            </p>
          </div>
          <button className="buy" onClick={() => buy()}>
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
