import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f3f4;

  width: 100vw;
  height: 100vh;

  span {
    color: #3e3e3e;
    font-weight: bold;
    font-size: 18px;
    padding: 30px;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 200px;
`;

export const LoginButton = styled.a`
  width: 100px;
  background-color: #ea1d2c;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  border-radius: 16px;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: #bb1723;
    transition: 0.4s;
  }
`;
