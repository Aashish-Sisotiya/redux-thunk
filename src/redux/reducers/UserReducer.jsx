import ActionTypes from "../constants/UserConstants";
export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_REQUEST:
      return { loading: true, users: [] };
    case ActionTypes.GET_USER_SUCCESS:
      return { loading: false, users: action.payload };
    case ActionTypes.GET_USER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
