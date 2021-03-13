import React from 'react';
import { useSpring } from 'react-spring';

function Ex2UseSpring(props) {

    let propsUseSpring = useSpring(
        {
            color: [131, 111, 255],  // Màu sắc sau khi Animation sẽ được hiện 

        }
    )

    return (
        <div>
            useSpring2
        </div>
    );
}

export default Ex2UseSpring;