import * as constants from '../constants';

const initialState = {
  loading: false,

  movies: {
    list: [],
    limit: 0,
    total: 0,
    skip: 0,
  },

  searchMovies: [],

  movie: {},
};

export const app = (state = initialState, {type, payload, key, value}) => {
  switch (type) {
    case constants.SET_LOADING: {
      return {...state, [key]: value};
    }

    case constants.REQUEST_GET_ALL_MOVIES: {
      return {
        ...state,
        movies: {
          list: [...state.movies.list, ...payload.results],
        },
      };
    }

    case constants.REQUEST_GET_MOVIE_WITH_ID: {
      return {
        ...state,
        movie: payload,
      };
    }

    case constants.REQUEST_GET_SEARCH_MOVIES: {
      return {
        ...state,
        searchMovies: payload.results,
      };
    }

    default:
      return state;
  }
};
