import { useContext } from 'react';
import shoppingContext from './context';

export default function useContextStore() {
  return useContext(shoppingContext);
}
