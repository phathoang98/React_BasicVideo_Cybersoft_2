import React from 'react';
import XucXac from './xucXac';
import { useSelector, useDispatch } from "react-redux";

function DanhSachXucXac(props) {

    // --- Gửi Yêu Cầu lên REDUCER

    const dispatch = useDispatch();

    // ---- Lấy State từ Reducer VỀ 
    const mangXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac)

    /**
     * --- Sau khi lấy State về , KO THỂ RENDER bằng vòng lặp map như trước đây,
     *      vì các item KO giống nhau các col và chỉ lấy 3 phần tử, nên sẽ render bằng cách bên dưới
     */

    return (
        <div style={{ marginLeft: "15%" }}>

            <div className="bg-white" style={{ width: 350, height: 350, borderRadius: "80%", paddingLeft: 50 }}>
                <h6 className="pt-4" style={{ marginLeft: '65px' }}>Đĩa xốc xúc xắc</h6>

                <div className="row" style={{ marginTop: -20 }}>
                    <div className="col-4 text-right" style={{ marginLeft: 55 }}>
                        <XucXac xucXacItem={mangXucXac[0]} />
                    </div>
                </div>

                <div className="row" style={{ marginTop: -40 }}>

                    <div className="col-4 text-right">
                        <XucXac xucXacItem={mangXucXac[1]} />
                    </div>

                    <div className="col-4 text-right" >
                        <XucXac xucXacItem={mangXucXac[2]} />
                    </div>

                </div>

            </div>

            <div style={{ marginLeft: '28%', marginTop: '5%' }}>
                <button onClick={() => dispatch({
                    type: 'PLAY_GAME_BAU_CUA'
                })}
                    className="btn btn-success p2" style={{ fontSize: '25px' }}>
                    Xốc
                </button>
            </div>

        </div>
    );
}

export default DanhSachXucXac;