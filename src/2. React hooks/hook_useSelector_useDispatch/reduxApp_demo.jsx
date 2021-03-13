
/**
 *  ----- Sử dụng "useDispatch" và "useSelector" của React-redux  
 * 
 *      giống với dùng {connect} sau đó mapDispatch và mapStateToProps
 */

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addCommentAction } from '../../Redux/actions/reduxAppAction';


/**
 *  -- Các bước thực hiện bài tập :
 *      1. Xây dựng giao diện (tìm image random avatar)
 *      2. Xác định nguồn dữ liệu thay đổi , tổ chức lưu trữ State
 *      3. Xử lý chức năng
 */

function ReduxApp_demo(props) {

    /**
     *  "useSelector" thay cho mapStateToProp của Class Component 
     *       => ĐỂ LẤY DỮ LIỆU VỀ
     */

    let comments = useSelector(state => state.FakeBookReducer.comments)

    /**
     *  "useDispatch" thay cho mapDispatchToProps của Class Component
     *      => Để Gửi giá trị lên reducer
     */

    let dispatch = useDispatch();



    /**
     * ------- Lấy thông tin người dùng nhập vào
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

            ...userComment, // Vì là Function Component(hook) nên phải có dòng code này , class Component thì KO cần 
            // Nếu KO có: khi nhập vào ô input giá trị mới , sẽ bị mất giá trị cũ vừa nhập trước đó , KO lưu vào State

            [name]: value
        })
    }

    /**
     *  -------- Nút Submit : đưa thông tin người dùng đã nhập lên reducer 
     */


    const handleComment = (e) => {

        // Chặn browser reload
        e.preventDefault();

        let usComment = { ...userComment, avatar: `https://i.pravatar.cc/60?u=${userComment.name}` }

        // let action = {
        //     type: 'ADD_COMMENT',
        //     userComment: usComment
        // }

        dispatch(addCommentAction(usComment)) // action đc gửi qua cho Reducer xử lý 

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
                        <input className="form-control" name="content" onChange={handleChange} />
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