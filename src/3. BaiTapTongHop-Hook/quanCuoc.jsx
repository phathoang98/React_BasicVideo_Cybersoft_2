import React from 'react';
import { useDispatch } from "react-redux";
import { useSpring, animated } from 'react-spring';

function QuanCuoc(props) {

    /**
     *  ---- Gửi DỮ LIỆU LÊN Reducer bằng "useDispatch" giống với mapDispatch ở Class Component
     */
    const dispatch = useDispatch()


    /**
     *  ------- Animation cho NÚT TĂNG - GIẢM
     * 
     *     * Tạo 2 const bên dưới vì phải đặt tên khác nhau ở props , nếu dùng chung tên khi click 1 nút , nút còn
     *          lại cũng sẽ bị ảnh hưởng 
     */

    // NÚT TĂNG 

    const [propsUseSpringIncrease, setIncrease] = useSpring(() => {
        return {

            // Trạng thái đích đến
            to: { scale: 1 },

            // Trạng thái ban đầu
            from: { scale: 0.8 },

            // Dùng để Reset lại 2 giá trị Animation ban đầu ở trên khi thực hiện xong hành động click
            reset: true
        }
    })

    // Cho NÚT GIẢM 

    const [propsUseSpringDecrease, setDecrease] = useSpring(() => {
        return {

            // Trạng thái đích đến
            to: { scale: 1 },

            // Trạng thái ban đầu
            from: { scale: 0.8 },

            reset: true
        }
    })


    const { quanCuoc } = props;

    return (
        <div>
            <img src={quanCuoc.hinhAnh} alt="bau"
                style={{ width: 200, height: 190 }} />

            <div className="bg-success mt-2 p-2 text-center"
                style={{ borderRadius: '10px', width: 200 }}>

                <animated.button style={{
                    transform: propsUseSpringIncrease.scale.interpolate(
                        scale => `scale(${scale})`
                    )
                }}
                    onClick={() => {

                        dispatch({
                            type: 'DAT_CUOC_BAU_CUA',
                            quanCuoc, // gửi thông tin của quân cược được click
                            tangGiam: true
                        })

                        // --- Khi click zoom to zoom nhỏ (giống toggle) tùy ý chỉnh kích thước

                        setIncrease({ scale: 0.8 }) // Hết hành động click nhỏ xuống

                        setIncrease({ scale: 1 }) // khi Click vào scale to lên 

                    }

                    }
                    className="btn btn-danger mr-3">
                    <i className="fas fa-plus"></i>
                </animated.button>

                <span className="mt-2" style={{ color: 'yellow', fontSize: 25 }}>
                    {quanCuoc.diemCuoc}
                </span>

                <animated.button style={{
                    transform: propsUseSpringDecrease.scale.interpolate(
                        scale => `scale(${scale})`
                    )
                }}
                    onClick={() => {
                        dispatch({
                            type: 'DAT_CUOC_BAU_CUA',
                            quanCuoc, // gửi thông tin của quân cược được click 
                            tangGiam: false
                        })

                        setDecrease({ scale: 0.8 })
                        setDecrease({ scale: 1 })

                    }}

                    className="btn btn-danger ml-3">
                    <i className="fas fa-minus"></i>
                </animated.button>
            </div>
        </div >


    );
}

export default QuanCuoc;