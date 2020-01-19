import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import useContextStore from '../../store';

import LogoPNG from '../../assets/logo.png';
import { Container, Cart, Logo } from './styles';

export default function Header() {
  const {
    store: { cart },
  } = useContextStore();

  return (
    <Container>
      <Logo to="/">
        <img src={LogoPNG} alt="logo" />
        <strong>Shop</strong>
      </Logo>

      <Cart to="/">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cart.length} items</span>
        </div>
        <MdShoppingCart size={35} color="#FFF" />
      </Cart>
    </Container>
  );
}
