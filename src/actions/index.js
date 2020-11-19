import { createAction } from 'redux-actions';

import { CHARACTER, MOVIES, DETAILS } from "../constants";

const storeCharacter = createAction(CHARACTER);
const storeMovies = createAction(MOVIES);
const storeDetails = createAction(DETAILS);

const fetchCharacter = (num) => (dispatch) =>
  fetch(`https://swapi.dev/api/people/${num}/`)
    .then(response => response.json())
    .then(data => {
      dispatch(storeMovies(data.films));
      dispatch(fetchMovies(data.films));
    });

export const fetchMovies = (arr) => (dispatch) => {
  arr.forEach((movie, index) => {
    const url = new URL(movie);
    url.protocol = "https:"

    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(storeDetails({index, data}));
      });
  });
}

// export const showLists = (num) => () => {
//   fetchCharacter(num).then((res) => console.log(res));
// };

export const setCharacter = (num) => (dispatch) => {
  dispatch(storeCharacter(num));
  fetchCharacter(num)(dispatch);
}
