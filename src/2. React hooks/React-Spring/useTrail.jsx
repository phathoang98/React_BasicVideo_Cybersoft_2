import React, { useState } from 'react';
import { useTrail, animated } from "react-spring"


const items = [
    { title: 'FrontEnd-Online', content: 'Cyberlearn' },
    { title: 'FrontEnd-FE57', content: 'Cybersoft' },
    { title: 'FrontEnd', content: 'Coding' }
]


function UseTrail(props) {


    let [status, setState] = useState(true);

    const [propsUseTrail, set] = useTrail(items.length, () => {

        return {

            // ---- Trạng thái đích đến cuối cùng Khi Animation
            opacity: status ? 1 : 0,
            x: status ? 0 : 20,
            height: status ? 80 : 0,
            color: 'red',

            // ---- Trạng thái Ban đầu 
            from: {
                opacity: 0,
                x: 20,
                height: 0,
                color: 'green'
            },
            config: {
                duration: 1000
            }
        }
    })

    set({
        // ------ Trạng thái đích đến

        opacity: status ? 1 : 0,
        x: status ? 0 : 20,
        height: status ? 80 : 0,
        color: 'red',

        // --- Trạng thái Ban đầu của Nút setColor 

        from: {
            opacity: 0,
            x: 20,
            height: 0,
            color: 'green'
        },
        config: {
            duration: 500
        }
    })

    return (
        <div className="container mt-5">
            <button
                onClick={() => setState(!status)}
                className="btn btn-dark mr-3">
                setStatus
            </button>

            <button
                onClick={() => set({ color: 'pink' })}
                className="btn btn-primary">
                setColor
            </button>

            {
                propsUseTrail.map((propsUseSprings, index) => {
                    return (
                        <animated.h1 key={index} style={propsUseSprings}>
                            {items[index].title}
                        </animated.h1>
                    )
                })
            }

        </div>
    );
}

export default UseTrail;