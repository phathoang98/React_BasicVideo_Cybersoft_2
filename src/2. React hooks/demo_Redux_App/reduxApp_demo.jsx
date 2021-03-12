
/**
 *  ----- Sử dụng "useDispatch" và "useSelector" của React-redux  
 * 
 *      giống với dùng {connect} sau đó mapDispatch và mapStateToProps
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


/**
 *  -- Các bước thực hiện bài tập :
 *      1. Xây dựng giao diện (tìm image random avatar)
 *      2. Xác định nguồn dữ liệu thay đổi , tổ chức lưu trữ State
 *      3. Xử lý chức năng
 */

function ReduxApp_demo(props) {

    /**
     *  --- Dùng:  "useSelector" thay cho mapStateToProp của Class Component 
     *          ĐỂ LẤY DỮ LIỆU VỀ
     */

    let comments = useSelector(state => state.FakeBookReducer.comments)

    /**
     * ---- Lấy thông tin người dùng nhập vào
     */

    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    })

    console.log("User Comment: ", userComment);

    const handleChange = (e) => {
        let { value, name } = e.target;

        setUserComment({
            // Vì là hook nên phải có dòng code bên dưới mới có thể show hết tất cả các thuộc tính trong State
            // Và lấy được hết tất cả giá trị input nhập vào

            ...userComment, // Bắt buộc phải có 
            [name]: value
        })
    }

    const handleComment = (e) => {

        // Chặn browser reload

        e.preventDefault()

    }


    return (
        <div className="container p-5">
            <h3 className="mb-3">Fakebook App</h3>

            <div className="card text-left">
                <div className="card-header">
                    {
                        comments.map((comment, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-1">
                                        <img src={comment.avatar} alt="" />
                                    </div>

                                    <div className="col-11">
                                        <h6 className="text-danger">{comment.name}</h6>
                                        <p>{comment.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <form className="card-body" onSubmit={handleComment}>
                    <div className="form-group">
                        <h5 className="card-title">Name</h5>
                        <input className="form-control" name="name" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <h5 className="card-title">Content</h5>
                        <input className="form-control" name="Content" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-success">Send</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default ReduxApp_demo;