import { combineReducers } from "redux";
import FakeBookReducer from "./reducers/reduxAppReducer";

const rootReducer = combineReducers({
    FakeBookReducer
})

export default rootReducer