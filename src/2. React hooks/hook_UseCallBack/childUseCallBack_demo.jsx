
/**
 *  ------ Dùng "memo" : giúp chống render lại trang nếu trang ko có giá trị mới truyền vào 
 * 
 *  Vì memo chỉ hỗ trợ so sánh shallow (là so sánh các kiểu dữ liệu cơ sỡ như number, string, Boolean)
 *   Nên khi ta truyền vào là 1 Function không hề thay đổi giá trị , tuy nhiên khi setState (sử dụng hook useState)
 *      thì function đó đc khai báo lại và render lại 
 */

import React, { memo } from 'react';

function ChildUseCallBack_demo(props) {

    let title = "cybersoft";
    let object = {
        id: 1,
        name: "phát"
    }

    console.log("Title: ", title);
    console.log("Object: ", object);

    return (
        <div>
            <small>{props.renderNotify()}</small>
            <textarea></textarea>
            <br />
            <button className="btn btn-success">Gửi</button>
        </div>
    );
}

export default memo(ChildUseCallBack_demo);