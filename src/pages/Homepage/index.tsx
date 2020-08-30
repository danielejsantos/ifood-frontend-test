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
import { initialState, reducer } from "../../store";
import { API_SPOTIFY, API_MOCKY } from "../../services/apis";
import { FeaturedPlaylistStateProps, FiltersOptionsProps } from "./types";
import { ItemsProps } from "../../components/FeaturedPlaylist/types";

const Homepage: React.FC = () => {
  const [playlists, setPlaylists] = useState<ItemsProps[] | undefined>([]);
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [featuredPlaylist, setFeaturedPlaylist] = useState<
    FeaturedPlaylistStateProps | null | undefined
  >(null);
  const [
    filtersOptions,
    setFilterOptions,
  ] = useState<FiltersOptionsProps | null>(null);

  const [filtersData, setFiltersData] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await API_MOCKY.get("/5a25fade2e0000213aa90776");
      setFilterOptions(data);
    })();
  }, [setFilterOptions]);

  useEffect(() => {
    const getApiSpotify = async () => {
      try {
        const { data } = await API_SPOTIFY.get("/browse/featured-playlists", {
          params: filtersData,
        });
        setFeaturedPlaylist(data);
        const newPlaylists = data.playlists.items.map(
          (playlist: ItemsProps) => {
            return {
              ...playlist,
              isVisible: true,
            };
          }
        );

        setPlaylists(newPlaylists);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/");
          console.warn("AUTH ERROR");
        }
        console.warn(error);
      }
    };

    getApiSpotify();
    const interval = setInterval(() => getApiSpotify(), 30000);

    return () => clearInterval(interval);
  }, [filtersData, navigate]);

  useEffect(() => {
    if (!search) {
      const newPlaylists = featuredPlaylist?.playlists.items.map(
        (playlist: ItemsProps) => {
          return {
            ...playlist,
            isVisible: true,
          };
        }
      );
      setPlaylists(newPlaylists);
    }

    if (search) {
      const newPlaylists = playlists?.map((playlist: ItemsProps) => {
        return {
          ...playlist,
          isVisible: !!playlist.name
            .toLowerCase()
            .includes(search.toLowerCase()),
        };
      });
      setPlaylists(newPlaylists);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredPlaylist, search]);

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Spotifood" />
        <span>
          Nunca foi tão fácil encontrar <strong>playlists</strong>
        </span>
        <SearchWrapper>
          <SearchInput
            placeholder="Buscar por nome"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FilterButton onClick={() => setOpenFilter(!isOpenFilter)}>
            <FilterIcon />
            <span>Filtrar</span>
          </FilterButton>
          {isOpenFilter && (
            <Filters
              filtersData={filtersData}
              setFiltersData={setFiltersData}
              filtersOptions={filtersOptions}
            />
          )}
        </SearchWrapper>
      </Header>

      <FeaturedPlaylist
        playlists={playlists}
        message={featuredPlaylist?.message}
      />
    </Container>
  );
};

export default Homepage;
