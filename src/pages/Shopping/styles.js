import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fbfbfb;
  border-radius: 5px;
  max-width: 1000px;
  margin: 20px auto;
  padding: 10px;
  position: relative;
`;

export const ProductList = styled.table`
  user-select: none;
  thead > tr {
    height: 25px;
    td {
      padding: 0 8px;
      font-weight: bold;
      color: #666;
      &:nth-child(1) {
        width: 190px;
      }
    }
  }

  tbody > tr > td {
    background: #fff;
    height: 30px;
    color: #495057;
    font-size: 14px;
    text-align: center;
    border: 1px solid rgba(0, 40, 100, 0.12);
    border-radius: 4px;
    input {
      width: 95px;
      height: 100%;
      border: none;
      outline: none;
      text-align: center;
      &:focus {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.6);
        transition: box-shadow 0.15s ease-in-out;
      }
    }
    span,
    strong {
      display: block;
      padding: 0 12px;
    }
    button {
      background: transparent;
      border: none;
      height: 100%;
      padding: 0 12px;
      font-weight: bold;
      color: #e80000;
      cursor: pointer;
    }
    &:nth-child(1) {
      border: none;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;

  strong {
    margin-left: 6px;
    font-size: 17px;
  }
`;
