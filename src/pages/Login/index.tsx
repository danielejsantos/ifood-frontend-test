import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AUTHORIZE_URL,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
} from "../../config";

import { Container, Logo, LoginButton } from "./styles";

import logoImg from "../../assets/images/logo.png";

import { setItem, getItem } from "../../services/storage";
import { API_SPOTIFY } from "../../services/apis";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(() => {
    const accessToken = getItem();

    if (accessToken) {
      API_SPOTIFY.defaults.headers.authorization = `Bearer ${accessToken}`;
      return accessToken;
    }

    return null;
  });

  useEffect(() => {
    if (token) {
      navigate("/home");
    }

    if (!token && window.location.hash) {
      const data = window.location.hash
        .substring(1)
        .split("&")
        .map((item) => {
          const info = item.split("=");
          return info[1];
        });

      if (!data) return;

      setToken(data[0]);
      setItem(data[0]);
    }
  }, [token, navigate]);

  return (
    <Container>
      <Logo src={logoImg} alt="Spotifood" />
      <span>
        Entre com sua conta do Spotify para encontrar as melhores playlists
      </span>
      <LoginButton
        href={`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login
      </LoginButton>
    </Container>
  );
};

export default Login;
