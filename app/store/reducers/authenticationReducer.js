import {initialState} from '../initialState';
export const emailPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};
