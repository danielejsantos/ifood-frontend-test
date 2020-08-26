import React, { useState } from "react";
import FilterIcon from "@material-ui/icons/FilterListRounded";

import {
  Container,
  Header,
  Logo,
  SearchWrapper,
  SearchInput,
  FilterButton,
} from "./styles";

import FeaturedPlaylist from "../../components/FeaturedPlaylist";
import Filters from "../../components/Filters";

import logoImg from "../../assets/images/logo.png";

const Homepage: React.FC = () => {
  const [isOpenFilter, setOpenFilter] = useState(false);

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Spotifood" />
        <span>
          Nunca foi tão fácil encontrar <strong>playlists</strong>
        </span>
        <SearchWrapper>
          <SearchInput placeholder="Buscar por nome" />
          <FilterButton onClick={() => setOpenFilter(!isOpenFilter)}>
            <FilterIcon />
            <span>Filtrar</span>
          </FilterButton>
          {isOpenFilter && <Filters />}
        </SearchWrapper>
      </Header>

      <FeaturedPlaylist />
    </Container>
  );
};

export default Homepage;
