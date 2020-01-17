import React, { useReducer } from 'react';
import ShoppingContext from './context';

const INITIAL_STATE = {
  products: [],
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      const products = action.payload;
      return { ...state, products };
    }
    case 'ADD_ITEM_TO_CART': {
      const { item } = action.payload;
      return { ...state, cart: [...state.cart, item] };
    }
    case 'REMOVE_ITEM_TO_CART': {
      const { id } = action.payload;
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
