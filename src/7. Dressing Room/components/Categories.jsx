import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actChoosenCategory } from "../../Redux/actions/DresRoomAction"

function Categories(props) {

    /**
     *  ----------- LẤY CÁC STATE TỪ REDUCER
     */

    // TÊN CÁC NÚT
    let categoryList = useSelector(state => state.CategoryReducer)

    // LẤY LOẠI SẢN PHẨM ĐỂ ĐI SO SÁNH
    let categoryType = useSelector(state => state.ChoosenCategoryReducer)


    /**
     *  -------------- Dispatch Action 
     */
    let dispatch = useDispatch()

    // Gửi Action để Sáng màu Nút sản phẩm đang chọn và SHOW ra các sản phẩm theo loại đc chọn 

    let choosenCategory = (type) => {
        dispatch(actChoosenCategory(type))
    }


    return (
        <div className="btn-group">
            {categoryList.map((item, index) => {
                return (
                    <button key={index}
                        className={categoryType === item.type ? 'btn btn-primary' : "btn btn-secondary"}
                        onClick={() => choosenCategory(item.type)}
                    >
                        {item.showName}
                    </button>
                )
            })
            }
        </div>
    );
}

export default Categories;