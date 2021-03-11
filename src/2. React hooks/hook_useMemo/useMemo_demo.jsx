import React, { useState, useMemo } from 'react';
import ChildUseMemo_demo from './childUseMemo_demo';


/**
 * ---- useMemo : giúp KO render lại Component 
 * 
 *       Dùng cho các biến là Object , hoặc Hàm có return về giá trị 
 *          còn hàm KO return về giá trị dùng useCallBack 
 */

const UseMemo_demo = () => {

    let [like, setLike] = useState(1);

    let cart = [
        { id: 1, name: "iphone", price: 1000 },
        { id: 2, name: "htc phone", price: 2000 },
        { id: 3, name: "lg phone", price: 3000 }
    ]

    const cartMemo = useMemo(() => cart, [like])
    // [] : ko bị render lại 
    // [like] : vì chứa giá trị State bên sẽ bị render lại Component Child

    return (
        <div className="m-5">
            <p style={{ fontSize: "40px" }}>Like: ❤ {like}</p>

            <span className="my-3"
                style={{ cursor: "pointer", color: "red", fontSize: 35 }}
                onClick={() => { setLike(like + 1) }}>
                click❤
            </span>

            <ChildUseMemo_demo cart={cartMemo} />

        </div>
    );
};

export default UseMemo_demo;