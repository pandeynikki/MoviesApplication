import axios from 'axios';

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMovies = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=8b0e8c11475293125c9e9de7c7b01fd8&language=en-US&page=1',
      );
      dispatch({type: FETCH_MOVIES_SUCCESS, movies: response.data.results});
    } catch (error) {
      dispatch({type: FETCH_MOVIES_ERROR, error: error.message});
    }
  };
};
