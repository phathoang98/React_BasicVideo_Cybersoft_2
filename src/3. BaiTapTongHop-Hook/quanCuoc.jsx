import React from 'react';
import { useDispatch } from "react-redux";

function QuanCuoc(props) {

    /**
     *  ---- Gửi DỮ LIỆU LÊN Reducer bằng "useDispatch" giống với mapDispatch ở Class Component
     */
    const dispatch = useDispatch()

    const { quanCuoc } = props;

    return (
        <div>
            <img src={quanCuoc.hinhAnh} alt="bau"
                style={{ width: 180 }} />

            <div className="bg-success mt-2 pb-2 text-center"
                style={{ borderRadius: '10px', width: 180 }}>

                <button onClick={() => dispatch({
                    type: 'DAT_CUOC_BAU_CUA',
                    quanCuoc, // gửi thông tin của quân cược được click 
                    tangGiam: true
                })}
                    className="btn btn-danger mr-3">
                    <i className="fas fa-plus"></i>
                </button>

                <span className="mt-2" style={{ color: 'yellow', fontSize: 25 }}>
                    {quanCuoc.diemCuoc}
                </span>

                <button onClick={() => dispatch({
                    type: 'DAT_CUOC_BAU_CUA',
                    quanCuoc, // gửi thông tin của quân cược được click 
                    tangGiam: false
                })}
                    className="btn btn-danger ml-3">
                    <i className="fas fa-minus"></i>
                </button>
            </div>
        </div>


    );
}

export default QuanCuoc;