import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web'
import animation from './static/48057-loading-with-shapes.json'


function LottieWeb(props) {

    const [show, setShow] = useState(false)

    const _el = useRef(null)

    useEffect(() => {
        // --- Nếu _el có tồn tại 
        if (_el) {
            lottie.loadAnimation({
                container: _el.current,
                renderer: 'svg',
                animationData: animation,
            })
        }
    }, [show])

    const _click = () => {

        setShow(true)

        setTimeout(() => {
            setShow(false);
        }, 3000)
    }

    return (
        <div>

            <p>
                <span
                    style={{
                        fontWeight: 'bold',
                        color: 'purple',
                        cursor: 'pointer',
                    }}
                    onClick={_click}>
                    Click me
                </span>

                {' to see miracle'}
            </p>

            <p>Now go build something great.</p>
            {show && (
                <div id="animation"
                    ref={_el}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                    }}
                />
            )}
        </div>
    )
}

export default LottieWeb;