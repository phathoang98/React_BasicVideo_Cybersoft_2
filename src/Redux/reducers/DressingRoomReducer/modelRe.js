
/**
 *  ----------------- State MODEL
 */

import { CHOOSEN_PRODUCT } from "../../types/DressingRoomType";

let initialState = {
    topclothes: '',
    botclothes: '',
    shoes: '',
    handbags: '',
    necklaces: '',
    hairstyle: '',
    background: '',
}

const ModelReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHOOSEN_PRODUCT:

            /**
             *  action.payload.type = "topclothes"
             *  => state["topclothes"] = action.payload.img;
             *  => state.topclothes = action.payload.img;
             * 
             *  action.payload.type = "shoes"
             *  => state["shoes"] = action.payload.img;
             */

            state[action.payload.type] = action.payload.img;
            return { ...state } // -> vì state đầu vào là Object 

        default:
            return state;
    }
}

export default ModelReducer