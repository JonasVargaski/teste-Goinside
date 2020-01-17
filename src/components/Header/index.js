import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import useContextStore from '../../store';

import { Container, Cart, Logo } from './styles';

export default function Header() {
  const {
    store: { cart },
  } = useContextStore();

  return (
    <Container>
      <Logo to="/">
        <img
          src="https://goinside.co/wp-content/uploads/sites/5/2018/03/goinside-logo-header.png"
          alt="logo"
        />
        <strong>Shop</strong>
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cart.length} items</span>
        </div>
        <MdShoppingCart size={35} color="#FFF" />
      </Cart>
    </Container>
  );
}
