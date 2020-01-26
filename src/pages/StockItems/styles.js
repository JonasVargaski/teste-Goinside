import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 10px auto;
  padding: 30px;
`;

export const StockList = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 25px;
  max-height: calc(100vh - 260px);

  > img {
    margin: 0 auto;
    display: inline-block;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 20px 10px 5px 10px;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.25);
  }

  img {
    max-height: 160px;
    max-width: 100%;
    vertical-align: middle;
  }

  button {
    padding-top: 10px;
    border: none;
    outline: none;
    color: #999;
    background: transparent;
    cursor: pointer;
    transition: transform 0.25s ease;

    strong {
      font-size: 16px;
      color: #f9af26;
    }

    span {
      display: block;
      padding: 4px;
    }
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 5px;
  border: none;
  outline: none;
  background: transparent;
  color: #666;
  font-weight: bold;
  font-size: 21px;
  cursor: pointer;
`;
