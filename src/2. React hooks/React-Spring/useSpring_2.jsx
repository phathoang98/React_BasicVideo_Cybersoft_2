import React from 'react';
import { useSpring, animated } from 'react-spring';

function Ex2UseSpring(props) {

    let propsUseSpring = useSpring(
        {
            color: [131, 111, 255],  // Màu sắc sau khi Animation sẽ được hiện, màu đích đến
            from: {
                color: [238, 99, 99] // Màu sắc bắt đầu 
            },

            config: {
                duration: 2000, // tổng thời gian xảy ra chuyển động 
                delay: 0 // sau bao lâu sẽ bắt đầu xảy ra chuyển động 
            }
        }
    )

    // Tăng Font chứ , tăng Độ dài 

    let propAnimation = useSpring({
        from: {
            width: "0%",
            height: '0',
            fontSize: '10px'
        },

        to: async (next, cancel) => {
            await next({ width: '100%', height: '100%', fontSize: '50px' })
            await next({ width: '50%', height: '50%', fontSize: '10px' })
            await next({ width: '100%', height: '100%', fontSize: '50px' })
        },
        config: {
            duration: 5000
        }
    })


    return (
        <div>
            <animated.h4 style={{
                color: propsUseSpring.color.interpolate((r, g, b) => { return `rgb(${r},${g},${b})` })
            }}>
                useSpring2
            </animated.h4>

            <animated.div style={propAnimation} >
                <span className="bg-dark text-white">
                    cyberlearn
                </span>
            </animated.div>


        </div>


    );
}

export default Ex2UseSpring;