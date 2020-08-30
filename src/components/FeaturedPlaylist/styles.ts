import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  span {
    color: #3e3e3e;
    font-size: 18px;
    font-weight: bold;

    @media (min-width: 700px) {
      font-size: 22px;
    }
  }
`;

export const PlaylistWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  max-width: 270px;
  height: 370px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 6px;
  background-color: #f5f3f4;
`;

export const PlaylistImage = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 3px;
`;

export const Name = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

export const Description = styled.span``;
