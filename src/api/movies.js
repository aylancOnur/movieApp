import {get} from './service';

export const getAllMovies = async page => {
  try {
    let responseObj = await get(
      `https://api.themoviedb.org/3/movie/popular?api_key=cccc1316adcdfa77492f1b11d081cd91&language=en-US&page=${page}&region=us`,
    );

    return responseObj;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieWithId = async movieId => {
  try {
    let responseObj = await get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cccc1316adcdfa77492f1b11d081cd91&language=en-US`,
    );

    return responseObj;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async (page, query) => {
  try {
    console.log('SEARCH MOVIES =>', page, query);
    let responseObj = await get(
      `https://api.themoviedb.org/3/search/movie?api_key=cccc1316adcdfa77492f1b11d081cd91&language=en-US&query=${query}&page=${page}`,
    );

    return responseObj;
  } catch (error) {
    console.log(error);
  }
};
