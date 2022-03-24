import {
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  SET_USER,
} from "./actionTypes";

const init = { loading: true, users: [], error: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case SET_USER:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
