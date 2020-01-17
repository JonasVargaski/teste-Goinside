import React from 'react';
import useContextStore from '../../store';
import { Container } from './styles';

export default function Cart() {
  const {
    store: { cart },
  } = useContextStore();

  return <Container>Carrinho {JSON.stringify(cart)}</Container>;
}
