import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: 180px 1fr;
  height: 100%;
`;

export const Content = styled.main`
  grid-area: content;
  height: 100%;
  overflow: auto;
`;
