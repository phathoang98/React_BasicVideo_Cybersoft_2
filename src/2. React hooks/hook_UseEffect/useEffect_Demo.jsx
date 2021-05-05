
import React, { useState, useEffect } from 'react';
import ChildUseEffect_Demo from './childUseEffect_Demo';

/**
 * ------ useEffect : là Hàm chạy sau khi giao diện render , dùng để thay cho 1 số Lifecycle giống ở Class component 
 *      thay cho componentDidUpdate và componentDidMount trong mọi trường hợp
 */

function UseEffect_Demo(props) {

    // Tạo State : có thể tạo nhiều state , (KO giống Class Component)

    let [number, setNumber] = useState(1);



    /**
     *  ------- Cách viết thay cho ComponentDidMount 
     */

    useEffect(() => {
        console.log("didMount");
    }, []) // [] : là mảng rỗng , chỉ chạy 1 lần duy nhất sau khi render  

    /**
      *  ----- Cách viết thay cho ComponentDidUpdate 
      */

    useEffect(() => {
        console.log("didUpdate");

        return () => { // sẽ chạy khi ta muốn 1 component nào đó mất đi trên giao diên

            console.log("willUnmount"); // 
        }


    }, [number]) // number: là giá trị nếu bị thay đổi thì useEffect này sẽ chạy 
    // Nếu trường hợp trong Component có 1 State khác bị thay đổi , thì hàm sẽ KO CHẠY , KO BỊ ẢNH HƯỞNG 



    console.log("render");

    /**
     *  ----- Tạo Hàm ở Function Component phải có "từ khóa Khai Báo Biến" 
     */

    const handleIncrease = () => {

        let newNumber = number + 1

        setNumber(newNumber)
    }

    return (
        <div>

            <div className="card text-white bg-light m-5" style={{ width: 200 }}>
                <img style={{ width: 200, height: 250 }} className="card-img-top" src="https://media-cdn.laodong.vn/Storage/NewsPortal/2019/11/19/766929/Lisa-Plo_Rdyz.jpg" alt="123" />
                <div className="card-body">
                    <h4 className="text-danger">♥ {number}</h4>

                </div>
            </div>

            <button className="btn btn-success ml-5" onClick={handleIncrease}>+</button>


            {number === 1 ? <ChildUseEffect_Demo /> : ""}
        </div>
    );
}

export default UseEffect_Demo;