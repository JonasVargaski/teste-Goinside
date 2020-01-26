import styled from 'styled-components';

export const Container = styled.header`
  grid-area: 'header';
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ef9e07;
  border-bottom: 1px solid #ccc;
`;

export const BoxSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;

  > strong {
    color: #fff;
    font-weight: bold;
    font-size: 28px;
  }

  > span {
    color: #fbfbfb;
    font-size: 16px;
  }
`;
