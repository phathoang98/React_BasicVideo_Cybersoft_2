import { combineReducers } from "redux";
import FakeBookReducer from "./reducers/reduxAppReducer";
import GameBauCuaReducer from "./reducers/GameBauCuaReducer";


const rootReducer = combineReducers({
    FakeBookReducer,
    GameBauCuaReducer
})

export default rootReducer