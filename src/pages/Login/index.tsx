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

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }

    if (!token) {
      const data = window.location.hash
        .substring(1)
        .split("&")
        .map((item) => {
          const info = item.split("=");
          return info[1];
        });

      setToken(data[0]);
    }
  }, [token, navigate]);

  return (
    <Container>
      <Logo src={logoImg} alt="Spotifood" />
      <span>Faça login para encontrar as melhores playlists</span>
      <LoginButton
        href={`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login
      </LoginButton>
    </Container>
  );
};

export default Login;
