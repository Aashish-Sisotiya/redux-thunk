import axios from "axios";
import ActionTypes from "../constants/UserConstants";

export const UserAction = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.GET_USER_REQUEST });
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: ActionTypes.GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_USER_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
