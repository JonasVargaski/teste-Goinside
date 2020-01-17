import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-areas: 'header' 'main';
  grid-template-columns: 1fr;
  grid-template-rows: 55px 1fr;
  height: 100%;
`;

export const Container = styled.main`
  grid-area: 'main';
  display: flex;
  flex: 1;
`;
