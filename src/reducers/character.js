import produce from "immer";

import { CHARACTER, DETAILS, MOVIES } from "../constants" ;

const initialState = {
  character: 0,
  movies: [],
  details: []
}

export default function character(state = initialState, action) {
  switch (action.type) {
    case CHARACTER:
      return produce(state, (draft) => {
        draft.character = action.payload;
        draft.details = [];
      });
    case DETAILS:
      return produce(state, (draft) => {
        const { data, index } = action.payload;
        draft.details[index] = data;
      });
    case MOVIES:
      return produce(state, (draft) => {
        draft.movies = action.payload;
      });
    default:
      return state
  }
}