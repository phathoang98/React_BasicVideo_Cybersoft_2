import { combineReducers } from "redux";
import FakeBookReducer from "./reducers/reduxAppReducer";
import GameBauCuaReducer from "./reducers/GameBauCuaReducer";
import CategoryReducer from './reducers/DressingRoomReducer/categoriesRe'
import ProductListReducer from './reducers/DressingRoomReducer/productListRe'
import ChoosenCategoryReducer from './reducers/DressingRoomReducer/choosenCateRe'
import ModelReducer from './reducers/DressingRoomReducer/modelRe'


const rootReducer = combineReducers({

    // ------ App Fakebook
    FakeBookReducer,

    // ----- Game Bầu Cua
    GameBauCuaReducer,

    // ---- Dressing Room

    CategoryReducer,
    ProductListReducer,
    ChoosenCategoryReducer,
    ModelReducer

})

export default rootReducer