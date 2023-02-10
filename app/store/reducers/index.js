import {combineReducers} from 'redux';
import {emailPasswordReducer} from './authenticationReducer';
import {movieReducer} from './moviesReducer';

const AppReducer = combineReducers({
  emailPasswordReducer,
  movieReducer,
});

export default AppReducer;
