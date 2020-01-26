import React from 'react';
import PropTypes from 'prop-types';

import { Container, Details, Properties } from './styles';

export default function ItemDetails({ item }) {
  return (
    <Container>
      <img src={item.image_url} alt="beer" />
      <Details>
        <header>
          <strong>{item.name}</strong>
          <span>{item.tagline}</span>
        </header>

        <Properties>
          <div>
            <strong>IBU</strong>
            <span>{item.ibu}</span>
          </div>
          <div>
            <strong>ABV</strong>
            <span>{item.abv}%</span>
          </div>
          <div>
            <strong>EBC</strong>
            <span>{item.ebc}</span>
          </div>
        </Properties>

        <p>{item.description}</p>

        <ul>
          <b>Best Served With</b>
          {item.food_pairing.map(description => (
            <li key={description}>{description}</li>
          ))}
        </ul>
      </Details>
    </Container>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    tagline: PropTypes.string,
    ibu: PropTypes.number,
    abv: PropTypes.number,
    ebc: PropTypes.number,
    description: PropTypes.string,
    food_pairing: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
