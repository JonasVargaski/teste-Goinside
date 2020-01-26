import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: 'header';
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #333333;
`;

export const Logo = styled(Link)`
  position: relative;
  margin-bottom: 3px;
  cursor: pointer;
  img {
    display: block;
    height: 32px;
    width: 126px;
  }
  strong {
    color: #fff;
    position: absolute;
    top: 21px;
    right: 3px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    opacity: 0.85;
  }
  div {
    text-align: right;
    margin-right: 10px;
  }
  strong {
    color: #e4e4e4;
    display: block;
    color: #fff;
    line-height: 14px;
  }
  span {
    font-size: 12px;
    color: #efefef;
  }
`;
