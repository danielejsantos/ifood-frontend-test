import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
import { getItem } from "../../services/storage";
import { initialState, reducer } from "../../store";

const Homepage: React.FC = () => {
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [filtersData, setFiltersData] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getItem()) {
      navigate("/");
    }
  }, [navigate]);

  console.log(filtersData);

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
          {isOpenFilter && (
            <Filters
              filtersData={filtersData}
              setFiltersData={setFiltersData}
            />
          )}
        </SearchWrapper>
      </Header>

      <FeaturedPlaylist />
    </Container>
  );
};

export default Homepage;
