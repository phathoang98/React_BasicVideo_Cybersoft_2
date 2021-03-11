import React, { useState, useCallback } from 'react';
import ChildUseCallBack_demo from './childUseCallBack_demo';

function UseCallback_demo(props) {

    let [like, setLike] = useState(1);

    const renderNotify = () => {
        return `Bạn đã thả ${like} ❤ `
    }

    /**
     * ------ Sử dụng useCallBack : có 2 tham số 
     * 
     *     1. renderNotify: "Function" 
     *     2. [] : giá trị để xét xem có giá trị nào ảnh hưởng làm function bị render lại hay ko 
     *            - nếu là "mảng rỗng" sẽ ko bị render lại 
     *            - [like] : mảng có giá trị ảnh hưởng đến function nên sẽ render lại 
     */

    let callBackRenderNotify = useCallback(renderNotify, [])


    return (
        <div className="m-5 display-4">
            Like: ❤ {like}
            <br />
            <span
                style={{ cursor: "pointer", color: "red", fontSize: 35 }}
                onClick={() => { setLike(like + 1) }}>
                click❤
            </span>
            <br />

            {/* Khi ấn onClick để setLike ở trên --> Cả component đều sẽ bị render lại hết
                 - thẻ <ChildUseCallBack_demo /> nếu KO muốn bị render lại 
                    --> dùng "memo" (Giống với Pure Component ở Class)
            */}
            <ChildUseCallBack_demo renderNotify={callBackRenderNotify} />
        </div>
    );
}

export default UseCallback_demo;