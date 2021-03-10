import React, { useState } from 'react';

function UseState_Demo(props) {

    /**
     *  -- Khởi tạo State ở FUNCTION COMPONENT : 
     *      ( KO còn Contrucstor và từ khóa This như Class Component )
     * 
     *  -- Function Component luồng code chạy khác với Class Component :
     * 
     *      + "Class Component" khi render sẽ chỉ chạy 1 số Lifecycle 
     *      +  Còn với "Function Component" : KO có Lifecycle 
     *        -->  khi render sẽ chạy lại hết Component (nhược điểm ảnh hưởng đến Performance)
     *      + Nhưng ko thể so sánh hiệu năng code chạy giữa Hook và Class Component 
     *          hiệu năng tốt tùy vào cách code 
     */

    // Biến let với mảng bên dưới gọi là : "tuple"

    let [state, setState] = useState({

        like: 0
    })


    /**
     * -------- Set lại State ở trên
     */

    const handleLike = () => {

        // Lấy like tăng lên 1 và setState

        setState({
            like: state.like + 1
        })

    }


    return (

        <div className="container m-5">
            <div className="card text-left">
                <img className="card-img-top" style={{ width: 250, height: 250 }}
                    src="http://picsum.photos/200/200" alt="img" />

                <div className="card-body">
                    <h4 className="card-title">Picture</h4>
                    <p className="card-text" style={{ color: 'red' }}>{state.like} ❤</p>
                </div>
            </div>

            <button className="btn btn-danger" onClick={handleLike}>Like</button>

        </div>
    );
}

export default UseState_Demo;