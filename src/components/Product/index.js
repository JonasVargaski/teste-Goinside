import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Product({ product }) {
  return <Container>{product.marca}</Container>;
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  marca: PropTypes.string.isRequired,
  sabor: PropTypes.string.isRequired,
  quantidade: PropTypes.number.isRequired,
  valor: PropTypes.number.isRequired,
  comprado: PropTypes.bool.isRequired,
  curtidas: PropTypes.number.isRequired,
};
