import React, { useState, useEffect } from 'react';
import useContextStore from '../../store';
import { Container } from './styles';

import Product from '../../components/Product';

export default function Shopping() {
  const [loading, setLoading] = useState(false);
  const {
    store: { products },
    dispatch,
  } = useContextStore();

  useEffect(() => {
    setLoading(true);

    fetch('https://api.adsim.co/crm/api/v1/refrigerante/listar')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_PRODUCTS', payload: data });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <span>Carregando...</span>
      ) : (
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>marca</td>
              <td>sabor</td>
              <td>quantidade</td>
              <td>valor</td>
              <td>total</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {
            products.map(product => (
              <tr key={product.id} onClick={()=> dispatch({type: 'ADD_ITEM_TO_CART', payload: product})}>
                <td>{product.id}</td>
                <td>{product.marca}</td>
                <td>{product.sabor}</td>
                <td>{product.quantidade}</td>
                <td>{product.valor}</td>
                <td>0,00</td>
                <td>
                  <button onClick={()=> dispatch({type: 'REMOVE_ITEM_TO_CART', payload: product.id})}>Remover</button>
                </td>
             </tr>
           ))
          }
          </tbody>
        </table>
      )}
    </Container>
  );
}
