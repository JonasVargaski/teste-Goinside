import React, { useReducer, useEffect } from 'react';
import ShoppingContext from './context';
import storage from '../utils/storage';

const INITIAL_STATE = {
  products: storage.get('products', []),
  cart: storage.get('cart', []),
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      const products = action.payload;
      return { ...state, products };
    }
    case 'ADD_ITEM_TO_CART': {
      const product = action.payload;
      return { ...state, cart: [...state.cart, product] };
    }
    case 'REMOVE_ITEM_TO_CART': {
      const id = action.payload;
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== id)],
      };
    }
    case 'UPDATE_AMOUNT_PRODUCT_CART': {
      const { id, amount } = action.payload;

      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === id) {
            return { ...item, quantidade: amount };
          }
          return item;
        }),
      };
    }
    case 'UPDATE_PRODUCT_CART': {
      const { idOld, newProduct } = action.payload;
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === idOld) {
            return {
              ...newProduct,
              quantidade: item.quantidade,
            };
          }
          return item;
        }),
      };
    }
    default:
      throw new Error();
  }
}

export default function Shopping({ children }) {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    Object.keys(store).forEach(key => {
      storage.set(key, store[key]);
    });
  }, [store]);

  return (
    <ShoppingContext.Provider value={{ store, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
}
