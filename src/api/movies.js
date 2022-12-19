import endpoints from './endpoints';
import {get} from './service';

export const getAllMovies = async page => {
  console.log('PAGE NUMBER =>', page);
  let responseObj = await get(
    `https://api.themoviedb.org/3/movie/popular?api_key=cccc1316adcdfa77492f1b11d081cd91&language=en-US&page=${page}&region=us`,
  );

  return responseObj;
};

export const getMovieWithId = async movieId => {
  let responseObj = await get(`${endpoints.movies}/${movieId}`);

  return responseObj;
};
