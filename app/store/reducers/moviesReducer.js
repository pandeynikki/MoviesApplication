import {
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from '../actions/moviesAction';
import {initialState} from '../initialState';

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
      };
    case FETCH_MOVIES_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};
