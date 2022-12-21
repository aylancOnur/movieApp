import * as constants from '../constants';

const initialState = {
  loading: false,

  searchLoading: false,

  movies: [],

  searchMovies: [],

  movie: {},
};

export const app = (state = initialState, {type, payload, key, value}) => {
  switch (type) {
    case constants.SET_LOADING: {
      return {...state, [key]: value};
    }

    case constants.SET_SEARCH_LOADING: {
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

    case constants.REQUEST_GET_SEARCH_MOVIES: {
      if (payload.isPagination) {
        return {
          ...state,
          searchMovies: [...state.searchMovies, ...payload.data.results],
        };
      } else {
        return {
          ...state,
          searchMovies: payload.data.results,
        };
      }
    }

    case constants.REQUEST_CLEAR_SEARCH_MOVIES: {
      return {
        ...state,
        searchMovies: [],
      };
    }

    case constants.PULL_TO_REFRESH: {
      return {
        ...state,
        movies: [],
      };
    }

    default:
      return state;
  }
};
