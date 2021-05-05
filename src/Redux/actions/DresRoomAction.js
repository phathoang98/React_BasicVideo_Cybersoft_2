

// ----- Chọn Loại Phụ Kiện

import { CHOOSEN_CATEGORY, CHOOSEN_PRODUCT } from "../types/DressingRoomType"

export const actChoosenCategory = (typeProduct) => ({
    type: CHOOSEN_CATEGORY,
    typeProduct
})

export const actChoosenProduct = (product) => ({
    type: CHOOSEN_PRODUCT,
    payload: {
        type: product.type,
        img: product.imgSrc_png
    }
})

