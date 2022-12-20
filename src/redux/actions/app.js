import * as constants from '../constants';

import * as movies from '../../api/movies';

export const requestAllMovies = page => async (dispatch, getState) => {
  dispatch({type: constants.SET_LOADING, key: 'loading', value: true});

  const {data, success} = await movies.getAllMovies(page);

  // console.log('ACTION page number =>', page);

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_MOVIES,
      payload: data,
    });
  } else {
  }

  setTimeout(() => {
    dispatch({type: constants.SET_LOADING, key: 'loading', value: false});
  }, 2000);
};

export const requestMovietWithId = movieId => async (dispatch, getState) => {
  const {data, success} = await movies.getMovieWithId(movieId);

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_MOVIE_WITH_ID,
      payload: data,
    });
  } else {
  }
};

export const requestSearchMovies =
  (page, query) => async (dispatch, getState) => {
    const {data, success} = await movies.getSearchMovies(page, query);

    if (success) {
      dispatch({
        type: constants.REQUEST_GET_SEARCH_MOVIES,
        payload: data,
      });
    } else {
    }
  };
