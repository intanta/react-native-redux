import C from '../constants';

const initialState = {
  loggedIn: false,
  name: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.LOGIN_SUCCESS:
      const { name } = action.data;
      return {
        loggedIn: true,
        name
      };
    case C.LOGOUT:
      return initialState;
    default:
      return state;
  }
};