import React, { useReducer } from 'react';
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
      storage.set('products', products);

      return { ...state, products };
    }
    case 'ADD_ITEM_TO_CART': {
      const product = action.payload;
      return { ...state, cart: [...state.cart, product] };
    }
    case 'REMOVE_ITEM_TO_CART': {
      const  id  = action.payload;
      return {
        ...state,
        cart: [...state.cart.filter(item => item.id !== id)],
      };
    }
    default:
      throw new Error();
  }
}

export default function Shopping({ children }) {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ShoppingContext.Provider value={{ store, dispatch }}>
      {children}
    </ShoppingContext.Provider>
  );
}
