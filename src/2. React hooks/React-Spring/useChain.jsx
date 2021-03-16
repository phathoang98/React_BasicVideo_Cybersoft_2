import React, { useRef, useState } from 'react'
import { useSpring, useTransition, useChain, animated } from 'react-spring';

function UseChain() {

    // ----- State chính của giao diện 

    let [arrContent, setArrContent] = useState([
        { id: 1, title: 'FrontEndOnline', content: 'cyberlearn' },
        { id: 2, title: 'FrontEndOffline', content: 'cybersoft' },
        { id: 3, title: 'FrontEndTuXa', content: 'cybersoft' }
    ]);

    // --------- Tạo 1 useSpring animation	  

    let springRef = useRef();

    const propsAnim = useSpring(
        {
            // Trạng thái đích đến 
            opacity: 1,
            width: '100%',
            height: '100%',

            // Trạng thái ban đầu 
            from: {
                opacity: 0,
                width: '0%',
                height: '0%'
            },
            config: {
                duration: 500
            },
            ref: springRef
        })

    // ------- Tạo 1 useTransition

    let transitionRef = useRef();

    const transitions = useTransition(arrContent, item => item.id, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)', opacity: 1, width: '100%', height: '100%' },
        leave: { transform: 'translate3d(0,-40px,0)', opacity: 0, width: '100%', height: '0%' },


        config: {
            duration: 500
        },

        ref: transitionRef
    })

    // ------------- KẾT HỢP 2 useSpring = "useChain"

    useChain([springRef, transitionRef, [0, 0.5]])


    /**
     *  ---- RENDER GIAO DIỆN TỔNG
     */

    return (
        <div className="container">
            <animated.div style={propsAnim} >

                {transitions.map(({ item, key, props }) => (
                    <animated.div key={key} style={props} className="bg-dark text-white p-3 mt-2 mb-2"  >

                        <div className="text-right">
                            <button
                                className="btn btn-danger"
                                onClick={() =>
                                    setArrContent([...arrContent.filter(article => article.id !== item.id)])}>
                                X
                            </button>
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </animated.div>
                ))}
            </animated.div>
        </div>
    )

}

export default UseChain