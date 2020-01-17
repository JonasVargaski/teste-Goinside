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
        products.map(product => (
          <Product key={String(product.id)} product={product} />
        ))
      )}
    </Container>
  );
}
