import { createAction } from 'redux-actions';

import api from "./api";
import { CHARACTER, MOVIES, DETAILS } from "../constants";

const storeCharacter = createAction(CHARACTER);
const storeMovies = createAction(MOVIES);
const storeDetails = createAction(DETAILS);

const fetchMovies = (arr) => (dispatch) => {
  arr.forEach((movie, index) => {
    const url = new URL(movie);
    url.protocol = "https:"

    api.get(url)
      .then(data => {
        dispatch(storeDetails({ index, data }));
      });
  });
};

const fetchCharacter = (num) => (dispatch) => {
  dispatch(storeCharacter(num));

  return api.get(`https://swapi.dev/api/people/${num}/`)
    .then(data => {
      dispatch(storeMovies(data.films));
      dispatch(fetchMovies(data.films));
    });
};

export const setCharacter = fetchCharacter;

