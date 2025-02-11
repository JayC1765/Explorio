import * as types from '../constants/actionTypes';

// export const logInActionCreator = (username, password) => ({
//   type: types.LOG_IN,
//   payload: [username, password]
// });

export const updateUsernameActionCreator = (username) => ({
  type: types.UPDATE_USERNAME,
  payload: username
});

export const signUpActionCreator = (username, password) => ({
  type: types.SIGN_UP,
  payload: [username, password]
});

export const getAllLocationsActionCreator = (userObj) => ({
  type: types.GET_ALL_LOCATIONS,
  payload: userObj,
});

export const addFriendActionCreator = (username) => ({
  type: types.ADD_FRIEND,
  payload: username
});

export const updateLocationActionCreator = (username) => ({
  type: types.UPDATE_LOCATION,
  payload: username
});