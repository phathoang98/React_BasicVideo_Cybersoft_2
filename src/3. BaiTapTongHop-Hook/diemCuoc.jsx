import React from 'react';
import { useSelector } from "react-redux"

function DiemCuoc(props) {

    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem)

    return (
        <div>
            <h3 className="text-center display-4" style={{ color: '#2EFE2E' }}>
                Game Bầu Cua
            </h3>

            <div className="text-center mt-4">
                <span style={{ fontSize: '20px', borderRadius: '5%' }}
                    className="p-3 text-white bg-danger">
                    Tiền thưởng :
                    <span className="text-warning ml-2">{tongDiem.toLocaleString()}$</span>
                </span>
            </div>

            <div className="text-center m-4">
                <button style={{ fontSize: '15px', borderRadius: '5%' }}
                    className="p-3 text-white bg-success">
                    Chơi lại
                </button>
            </div>
        </div>
    );
}

export default DiemCuoc;