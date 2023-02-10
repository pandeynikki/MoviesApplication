import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState } from './initialState';
import AppReducer from './reducers';
export const store = createStore(AppReducer,applyMiddleware(thunk));
