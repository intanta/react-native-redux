import C from '../constants';

const login = userCredentials => dispatch => {
  // emulate async operation
  setTimeout(() => {
    if (userCredentials.username === 'test' && userCredentials.password === 'test') {
      dispatch({
        type: C.LOGIN_SUCCESS,
        data: {
          name: 'Test User'
        }
      })
    } else {
      dispatch({
        type: C.LOGIN_FAILURE
      })
    }
  }, 1000);
};

const logout = () => {
  return {
    type: C.LOGOUT
  }
};

export default { login, logout };