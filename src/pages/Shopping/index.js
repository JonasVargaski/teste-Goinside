import React, { useState, useEffect, useMemo } from 'react';
import useContextStore from '../../store';
import { formatPrice } from '../../utils/format';

import Select from '../../components/Select';
import Spinner from '../../components/Spinner';
import { Container, ProductList, Total } from './styles';

export default function Shopping() {
  const {
    store: { products, cart },
    dispatch,
  } = useContextStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('https://api.adsim.co/crm/api/v1/refrigerante/listar')
      .then(res => res.json())
      .then(data => {
        const productsData = data.map(product => ({
          ...product,
          descricao: `${product.sabor} ${product.quantidade}`,
          quantidade: 0,
        }));
        dispatch({ type: 'SET_PRODUCTS', payload: productsData });
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [dispatch]);

  const listProducts = useMemo(() => {
    return cart.map(item => ({
      ...item,
      totalFormatado: formatPrice(item.quantidade * item.valor),
      precoFormatado: formatPrice(item.valor),
    }));
  }, [cart]);

  const total = useMemo(() => {
    return formatPrice(
      cart.reduce((sum, item) => sum + item.quantidade * item.valor, 0)
    );
  }, [cart]);

  const availableProducts = useMemo(() => {
    return products.filter(
      product => !cart.some(item => item.id === product.id)
    );
  }, [cart, products]);

  function handleAddProduct(product) {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: { ...product, quantidade: 1 },
    });
  }

  function handleChangeProduct(idOld, newProduct) {
    dispatch({
      type: 'UPDATE_PRODUCT_CART',
      payload: { idOld, newProduct },
    });
  }

  function handleChangeAmount(id, value) {
    const amount = value.replace(/[^0-9]/g, '');

    dispatch({
      type: 'UPDATE_AMOUNT_PRODUCT_CART',
      payload: { id, amount: amount < 0 ? 1 : amount },
    });
  }

  function hanleRemoveProduct(id) {
    dispatch({
      type: 'REMOVE_ITEM_TO_CART',
      payload: id,
    });
  }

  return (
    <Container>
      <Spinner
        show={loading}
        background="#rgba(0,0,0,0.5)"
        label="Carregando produtos..."
      />
      <ProductList>
        <thead>
          <tr>
            <td>Refrigerante</td>
            <td>Marca</td>
            <td>Quantidade</td>
            <td>Unitário</td>
            <td>Total</td>
            <td />
          </tr>
        </thead>

        <tbody>
          {listProducts.map(product => (
            <tr key={product.id}>
              <td>
                <Select
                  options={availableProducts}
                  value={product}
                  attribute="descricao"
                  onChange={item => handleChangeProduct(product.id, item)}
                />
              </td>
              <td>
                <span>{product.marca}</span>
              </td>
              <td>
                <input
                  type="number"
                  onBlur={e => {
                    if (e.target.value < 1) {
                      handleChangeAmount(product.id, '1');
                    }
                  }}
                  value={product.quantidade}
                  onChange={e => handleChangeAmount(product.id, e.target.value)}
                />
              </td>
              <td tabIndex="-1">
                <strong>{product.precoFormatado}</strong>
              </td>
              <td tabIndex="-1">
                <strong>{product.totalFormatado}</strong>
              </td>
              <td>
                <button
                  onClick={() => hanleRemoveProduct(product.id)}
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td>
              <Select
                placeholder="Selecione ..."
                options={availableProducts}
                attribute="descricao"
                onChange={item => handleAddProduct(item)}
              />
            </td>
          </tr>
        </tbody>
      </ProductList>

      <Total>
        Total: <strong>{total}</strong>
      </Total>
    </Container>
  );
}
