import React from "react";

import {
  Container,
  TitleWrapper,
  PlaylistWrapper,
  Card,
  PlaylistImage,
  Name,
  Description,
} from "./styles";

import { ItemsProps } from "./types";

interface FeaturedPlaylistProps {
  playlists: ItemsProps[] | undefined;
  message: string | undefined;
}

const FeaturedPlaylist: React.FC<FeaturedPlaylistProps> = ({
  playlists,
  message,
}) => (
  <>
    <Container>
      <TitleWrapper>
        <span>{message}</span>
      </TitleWrapper>
      <PlaylistWrapper>
        {playlists?.map((playlist) => (
          <div key={Math.random()}>
            {playlist.isVisible && (
              <Card>
                <PlaylistImage
                  src={playlist.images[0].url}
                  alt="Spotify Playlist"
                />
                <Name>{playlist.name}</Name>
                <Description>{playlist.description}</Description>
              </Card>
            )}
          </div>
        ))}
      </PlaylistWrapper>
    </Container>
  </>
);

export default FeaturedPlaylist;
