import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;
