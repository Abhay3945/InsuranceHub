// // src/redux/actions/userActions.js
// export const SET_USER = 'SET_USER';
// export const LOGIN_ERROR = 'LOGIN_ERROR';
// export const LOGOUT_USER = 'LOGOUT_USER';

// // Action to set user data
// export const setUser = (user) => ({
//   type: SET_USER,
//   payload: user,
// });

// // Action to handle login error
// export const loginError = (error) => ({
//   type: LOGIN_ERROR,
//   payload: error,
// });

// // Action to log out user
// export const logoutUser = () => ({
//   type: LOGOUT_USER,
// });

import { loginSuccess, loginFailure } from '../slices/authSlice';

// Mock API call for login
export const loginUser = (credentials) => async (dispatch) => {
  try {
    // Simulate API call
    const response = await fakeApiLogin(credentials);

    if (response.success) {
      // Dispatch login success with the user data (including role)
      dispatch(loginSuccess(response.user));
    } else {
      // Dispatch login failure if credentials are invalid
      dispatch(loginFailure('Invalid credentials'));
    }
  } catch (error) {
    // Dispatch login failure for any other error
    dispatch(loginFailure('An error occurred during login'));
  }
};

// Fake API function
const fakeApiLogin = async ({ email, password }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'admin@domain.com' && password === 'password') {
        resolve({ success: true, user: { role: 'Admin', name: 'Admin User' } });
      } else if (email === 'customer@domain.com' && password === 'password') {
        resolve({ success: true, user: { role: 'Customer', name: 'Customer User' } });
      } else {
        resolve({ success: false });
      }
    }, 1000);
  });
};
