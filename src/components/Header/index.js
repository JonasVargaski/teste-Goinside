import React from 'react';
import useAppContext from '../../store';

import Search from '../Search';
import { Container, BoxSearch } from './styles';

export default function Header() {
  const { dispatch } = useAppContext();

  function handleSearch(text) {
    dispatch({ type: 'SET_SEARCH_TEXT', payload: text });
  }

  return (
    <Container>
      <BoxSearch>
        <strong>Bank of Beers</strong>
        <span>Find your favourite beer here</span>
        <Search
          debounce={1000}
          onChange={handleSearch}
          placeholder="Search for beer name"
        />
      </BoxSearch>
    </Container>
  );
}
