import styled from "styled-components";
import MusicNoteIcon from "@material-ui/icons/MusicNoteRounded";

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
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: bold;

    @media (min-width: 700px) {
      font-size: 22px;
    }
  }
`;

export const StyledMusicNoteIcon = styled(MusicNoteIcon)`
  color: #ea1d2c;
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
  margin-bottom: 5px;
  border-radius: 8px;
`;

export const Name = styled.span`
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  color: #4f4f4f;
  margin-bottom: 3px;
`;

export const Description = styled.span`
  font-size: 14px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #8b8b8b;
`;
