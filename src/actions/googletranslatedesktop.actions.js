import { createAction } from "redux-actions";
import {
  GET_TRANSLATION_REQUEST,
  GET_TRANSLATION_SUCCESS,
  GET_TRANSLATION_FAIL
} from "./types";
import { fetchTranslation } from "./api"

const getTranslationRequest = createAction(GET_TRANSLATION_REQUEST);
const getTranslationSuccess = createAction(GET_TRANSLATION_SUCCESS);
const getTranslationFail = createAction(GET_TRANSLATION_FAIL);

export const getTranslation = (options) => {
  return async function(dispatch) {
    dispatch(getTranslationRequest());
    try {
      let response = await fetchTranslation(options);
      let responseJson = await response.json();
      if(response.status < 300 && response.status >= 200) {
        dispatch(getTranslationSuccess(responseJson));
      } else {
        await Promise.reject(responseJson);
      }
    } catch(err) {
      dispatch(getTranslationFail(err))
    }
  }
}
