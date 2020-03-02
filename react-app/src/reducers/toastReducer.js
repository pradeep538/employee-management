import {
  HIDE_SUCCESS_TOAST,
  HIDE_ERROR_TOAST,
  SHOW_SUCCESS_TOAST,
  SHOW_ERROR_TOAST
} from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_TOAST:
      return {
        ...state,
        showSuccessToast: true,
        message: action.payload
      };
    case HIDE_SUCCESS_TOAST:
      return { ...state, showSuccessToast: false, message: "" };
    case SHOW_ERROR_TOAST:
      return {
        ...state,
        showErrorToast: true,
        message: action.payload
      };
    case HIDE_ERROR_TOAST:
      return { ...state, showErrorToast: false, message: "" };
    default:
      return state;
  }
};
