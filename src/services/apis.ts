import axios from "axios";

export const API_MOCKY = axios.create({
  baseURL: "http://www.mocky.io/v2/5a25fade2e0000213aa90776",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const API_SPOTIFY = axios.create({
  baseURL: "https://api.spotify.com/v1/browse/featured-playlists",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
