import { CHOOSEN_CATEGORY } from "../../types/DressingRoomType"


let initialState = "topclothes" // giá trị mặc định ban đầu 

const ChoosenCategoryReducer = (state = initialState, action) => {

    switch (action.type) {

        case CHOOSEN_CATEGORY:
            state = action.typeProduct
            return state

        default:
            return state
    }

}

export default ChoosenCategoryReducer