import React, { useState } from 'react';
import { useTransition, animated } from "react-spring"



function UseTransition(props) {

    // ------- Mảng Chính 

    let [arrItem, setArrayItem] = useState([
        { id: 1, title: 'FrontEnd-Online', content: 'Cyberlearn' },
        // { id: 2, title: 'FrontEnd-FE57', content: 'Cybersoft' },
        // { id: 3, title: 'FrontEnd', content: 'Coding' }  
    ])

    // ----- State lưu trữ các Article mới sẽ đc Add 

    const [article, setArticle] = useState({
        id: '',
        title: '',
        content: ''
    })



    // ----- "useTransition" : tạo các hiệu ứng với Mảng Chính  

    const propsUseTransition = useTransition(arrItem, item => item.id,
        {
            from: { transform: 'translate3d(0,-40px,0)' },
            enter: { transform: 'translate3d(0,0px,0)' },
            leave: { transform: 'translate3d(0,-40px,0)' },

            // --- Thời gian diễn ra Hiệu ứng
            config: {
                duration: 300
            }
        })

    /**
     *  --------------- RENDER GIAO DIỆN CHÍNH 
     */

    let renderItem = () => {

        return propsUseTransition.map(({ props, item, key }, index) => {
            return (
                <animated.div style={props}
                    className="bg-dark text-white p-1 my-2 text-center" key={index}
                >
                    <div className="text-right">
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteItem(item.id)}
                        >X</button>
                    </div>

                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                </animated.div>
            )
        })
    }


    /**
     *  --------- Lấy thông tin nhập vào để tạo Tag mới
     */

    let handleChange = (e) => {
        let { value, name } = e.target;
        setArticle({
            ...article,
            [name]: value
        })
    }

    /**
     *  --------- NÚT ADD ARTICLE 
     */

    let handleSubmit = () => {

        // id: Date.now() => Mỗi lần click mới tạo Id cho thẻ mới, vì id này lấy theo thời gian 
        //  mà thời gian thì sẽ tăng nên => sẽ KO BỊ TRÙNG NHAU
        let item = { ...article, id: Date.now() };

        // setState lại cho Mảng chính --> thêm mảng State article mới vào 
        setArrayItem([...arrItem, item])
    }

    /**
     *  --------- NÚT XÓA ITEM
     */

    const deleteItem = (id) => {
        setArrayItem([...arrItem.filter(item => item.id !== id)])
    }



    return (
        <div className="container">
            <div style={{ width: "600px", marginLeft: "250px" }}>
                {renderItem()}

                <div className="form-group">
                    <h4>Title</h4>
                    <input className="form-control" name="title" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <h4>Content</h4>
                    <input className="form-control" name="content" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <button
                        className="btn btn-success"
                        onClick={handleSubmit}>
                        Add Article
                    </button>
                </div>

            </div>

        </div>
    );
}

export default UseTransition;