import React, { useState, useRef } from 'react';


/**
 *  ---------- useRef:
 * 
 *      + Dùng để dom đến các ô input để lấy các giá trị 
 *      + Dùng để lưu trữ giá trị để mỗi lần setState giá trị vẫn đc giữ nguyên 
 */

function UseRef_demo(props) {

    let inputUserName = useRef(null);
    let inputPassword = useRef(null);

    let userName = useRef('');

    let [userLogin, setUserLogin] = useState({ userName: "" });

    /**
     *  ------- Nút login lấy giá trị 
     */

    const handleLogin = () => {

        console.log("userName: ", userName.current);
        console.log("userLogin: ", userLogin.userName);

        userName.current = "abc";

        setUserLogin({
            userName: userName.current
        })
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center">Login</h1>

            <div className="form-group">
                <h4>User Name</h4>
                <input ref={inputUserName} name="userName" className="form-control" />
            </div>

            <div className="form-group">
                <h4>Password</h4>
                <input ref={inputPassword} name="password" className="form-control" />
            </div>

            <div className="form-group">
                <button className="btn btn-success"
                    onClick={() => handleLogin()}>Login</button>
            </div>

        </div>
    );
}

export default UseRef_demo;