import React from 'react';
import { useSprings, animated } from 'react-spring';


function UseSpring_3(props) {

    let arrOpacity = [
        { opacity: 0.2, color: 'red', content: 'FullStack', num: 100 },
        { opacity: 0.3, color: 'green', content: 'BackEnd', num: 200 },
        { opacity: 0.5, color: 'blue', content: 'FrontEnd', num: 300 },
        { opacity: 0.7, color: 'orange', content: 'Cybersoft', num: 400 },
        { opacity: 1, color: 'purple', content: 'Cyberlearn', num: 500 },
    ];

    let propsAnimationUseSprings = useSprings(arrOpacity.length, arrOpacity.map(item => {
        return {

            // --- Trạng thái đích đến(cuối) của Animation

            opacity: item.opacity,
            color: item.color,
            content: item.content,
            number: item.num,

            // --- Trạng thái bắt đầu cho animation

            from: {
                opacity: 0,
                color: 'black',
                number: 0
            },

            // ---- Thời gian thực hiện của Animation

            config: {
                duration: 3000
            }
        }
    }))

    /**
     *  ---- Hàm Render ra Nội dung chính và Animation
     */

    let renderContent = (propsAnim) => {
        let resultAnimComponent = [];

        for (let key in propsAnim) {
            if (key === 'content' || key === "number") {

                resultAnimComponent.push(
                    <animated.h2 style={propsAnim}>
                        {propsAnim[key]}
                    </animated.h2>
                )
            }
        }

        return resultAnimComponent
    }


    return (
        <div>
            {propsAnimationUseSprings.map((propsAnim, index) => {
                return (
                    <div>
                        {renderContent(propsAnim)}
                    </div>

                )
            })}
        </div>
    );
}

export default UseSpring_3;