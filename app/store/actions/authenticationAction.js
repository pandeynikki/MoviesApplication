// action types
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

// action creators
export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  email,
});

export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  password,
});
