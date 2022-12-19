import * as constants from '../constants';

const initialState = {
  loading: false,

  movies: [],

  movie: {},
};

export const app = (state = initialState, {type, payload, key, value}) => {
  switch (type) {
    case constants.SET_APP: {
      return {...state, [key]: value};
    }
    case constants.REQUEST_GET_ALL_MOVIES: {
      return {
        ...state,
        movies: [...state.movies, ...payload.results],
      };
    }

    case constants.REQUEST_GET_MOVIE_WITH_ID: {
      return {
        ...state,
        movie: payload,
      };
    }

    default:
      return state;
  }
};
