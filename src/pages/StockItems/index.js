import React, { useEffect, useState } from 'react';
import useIntersect from '../../utils/useIntersect';
import useAppContext from '../../store';
import api from '../../services/api';

import loadingSVG from '../../assets/loading.svg';
import Modal from '../../components/Modal';
import ItemDetails from '../../components/ItemDetails';
import { Container, StockList, Item, Close } from './styles';

export default function StockItems() {
  const [loading, setLoading] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const {
    store: { searchText, beers, page },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    async function loadBeers() {
      setLoading(true);
      try {
        const response = await api.get(
          `beers?${
            searchText.length ? `beer_name=${searchText}` : ''
          }&page=${page}&per_page=15`
        );

        const data = response.data.map(item => ({
          id: item.id,
          name: item.name,
          tagline: item.tagline,
          image_url: item.image_url,
          description: item.description,
          food_pairing: item.food_pairing,
          ibu: item.ibu,
          abv: item.abv,
          ebc: item.ebc,
        }));

        dispatch({ type: 'ADD_BEERS', payload: data });
      } finally {
        setLoading(false);
      }
    }
    loadBeers();
  }, [dispatch, page, searchText]);

  const [ref, entry] = useIntersect({
    threshold: [0.3],
  });

  useEffect(() => {
    if (entry.isIntersecting) dispatch({ type: 'INCREMENT_PAGE' });
  }, [entry.isIntersecting, dispatch]);

  return (
    <Container>
      <Modal width="700px" show={!!selectedBeer}>
        <Close onClick={() => setSelectedBeer(null)}>X</Close>
        <ItemDetails item={selectedBeer} />
      </Modal>

      <StockList>
        {beers.map(beer => (
          <Item key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <button type="button" onClick={() => setSelectedBeer(beer)}>
              <strong>{beer.name}</strong>
              <span>{beer.tagline}</span>
            </button>
          </Item>
        ))}
        <img
          style={{ visibility: loading ? 'visible' : 'hidden' }}
          src={loadingSVG}
          alt="loader"
          ref={ref}
        />
      </StockList>
    </Container>
  );
}
