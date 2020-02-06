import { handleActions } from "redux-actions";
import {
  GET_TRANSLATION_REQUEST,
  GET_TRANSLATION_SUCCESS,
  GET_TRANSLATION_FAIL
} from "../actions/types";

export default handleActions({
  [GET_TRANSLATION_REQUEST]: (state) => ({
    ...state,
    inflight: true
  }),
  [GET_TRANSLATION_SUCCESS]: (state, { payload }) => ({
    ...state,
    translation: payload[0][0][0],
    inflight: false
  }),
  [GET_TRANSLATION_FAIL]: (state) => ({
    ...state,
    inflight: false,
    lastRequestWasError: true
  }),
},
{
  inflight: false,
  lastRequestWasError: false,
  translation: ""
});
