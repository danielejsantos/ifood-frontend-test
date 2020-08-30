import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;

  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  padding-bottom: 15px;
  border-bottom: 1px solid #fff;
  background-color: #f5f3f4;

  span {
    color: #3e3e3e;
    font-weight: bold;
    font-size: 26px;
    max-width: 260px;
    text-align: center;

    strong {
      color: #ea1d2c;
    }
  }

  @media (min-width: 500px) {
    span {
      max-width: 400px;
    }
  }

  @media (min-width: 700px) {
    span {
      max-width: 600px;
      font-size: 32px;
    }
  }
`;

export const Logo = styled.img`
  max-width: 160px;
  margin-bottom: 15px;

  @media (min-width: 700px) {
    max-width: 200px;
  }
`;

export const SearchWrapper = styled.div`
  width: 260px;
  margin-top: 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    max-width: 400px;
  }
`;

export const SearchInput = styled.input`
  width: 260px;
  background-color: #fff;
  padding: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 16px 16px;

  :focus {
    outline: 0;
  }

  @media (min-width: 500px) {
    width: 400px;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  margin-top: 5px;
  margin-bottom: 5px;

  > svg {
    color: #3e3e3e;
  }

  span {
    font-size: 15px;
    padding-left: 5px;
  }

  :hover {
    cursor: pointer;
  }
`;
