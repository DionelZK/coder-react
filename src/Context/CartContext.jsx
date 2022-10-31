import React, { createContext, useState, useEffect } from 'react';
import { json } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
export const cartContext = createContext();

export const Data = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('products') || '[]')
  );
  const cartQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    const newProduct = { ...product, quantity: 1 };
    setCart([...cart, newProduct]);
  };

  function getItemQuantity(id) {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    setCart((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCart((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.quantity === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCart((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }

  function finalPrice(items) {
    return items.reduce((total, item) => item.price * item.quantity + total, 0);
  }

  function buy() {
    toast.success('Su compra a sido realizada con exito', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setCart([]);
    localStorage.setItem('products', JSON.stringify([]));
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        finalPrice,
        buy,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
