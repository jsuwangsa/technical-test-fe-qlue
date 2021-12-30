// import * as action from '../actions'

const initialState = {
  loading: false,
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "login/get-start":
      return {
        ...state,
        loading: true,
      };
    case "login/get-success":
      return {
        ...state,
        data: payload.login,
        loading: false,
        error: "",
      };
    case "login/get-failed":
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}

export default userReducer;
