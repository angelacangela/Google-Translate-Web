import { combineReducers } from 'redux';
import translation from "./googletranslatedesktop.reducer"

const rootReducer = combineReducers({
    translation
})

export default rootReducer;
