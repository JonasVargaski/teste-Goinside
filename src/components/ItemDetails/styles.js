import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;

  img {
    max-height: 380px;
    margin-right: 20px;

    @media (max-width: 520px) {
      max-height: 270px;
      margin-right: 15px;
    }
  }
`;

export const Details = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: column;
    margin: 15px 0px;

    > strong {
      font-size: 28px;
      color: #f9af26;
    }
    > span {
      padding: 8px 0;
      font-size: 16px;
      color: #888;
    }
  }
  p {
    margin: 25px 0;
    color: #555;
  }

  ul {
    b {
      font-size: 15px;
      color: #333;
    }

    li {
      margin-left: 24px;
      color: #555;
      font-size: 14px;
    }
  }
`;

export const Properties = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    margin-right: 15px;
    strong {
      margin-right: 6px;
    }
    span {
      color: #555;
    }
  }
`;
