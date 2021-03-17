import React, { Fragment } from 'react';
import { useSpring, animated } from 'react-spring';

function XucXac(props) {

    let { xucXacItem } = props;

    /**
     *  --------- ANIMATION CHO CÁC XÚC XẮC KHI XỐC  
     */

    const [propsDice, set] = useSpring(() => ({

        // --- Trạng thái đích đến 
        to: {
            xyz: [360, 360, 360]
        },

        // -- Trạng thái ban đầu 
        from: {
            xyz: [0, 0, 0]
        },

        // Thời gian diễn ra Animation
        config: {
            duration: 2000
        },

        reset: true
    })
    )

    // ---- set : giúp cho hiệu ứng Animation đc render lại , sau mỗi lần click  
    // ( nếu KO có set: Animation sẽ chỉ hiện ra 1 lần duy nhất khi mới load lại web)

    set({ xyz: [1440, 1440, 1440] })


    /**
     *  ----------- RENDER TỔNG
     */


    return (
        // ---- Biến img 2d --> 3d cho các xúc xắc 
        <Fragment>
            <div className="scene">
                <animated.div className="cube" style={{
                    transform: propsDice.xyz.interpolate(
                        (x, y, z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
                }} >
                    <div className="cube__face front">
                        <img src={xucXacItem.hinhAnh} style={{ width: '100%' }} />
                    </div>

                    <div className="cube__face back">
                        <img src='./img/GameBauCua/cua.png' style={{ width: '100%' }} />
                    </div>

                    <div className="cube__face right">
                        <img src='./img/GameBauCua/tom.png' style={{ width: '100%' }} />
                    </div>

                    <div className="cube__face left">
                        <img src='./img/GameBauCua/ca.png' style={{ width: '100%' }} />
                    </div>

                    <div className="cube__face top">
                        <img src='./img/GameBauCua/ga.png' style={{ width: '100%' }} />
                    </div>

                    <div className="cube__face bottom">
                        <img src='./img/GameBauCua/nai.png' style={{ width: '100%' }} />
                    </div>

                </animated.div>
            </div>
        </Fragment>

    );
}

export default XucXac;