import React from 'react';
import QuanCuoc from "./quanCuoc";
import { useSelector } from "react-redux"

function DanhSachCuoc(props) {

    /**
     *  -------- LẤY STATE TỪ REDUCER BẰNG "useSelector"
     */
    const danhSachCuoc = useSelector(state => state.GameBauCuaReducer.danhSachCuoc);


    /**
     *  ---------- RENDER RA CÁC QuanCuoc
     */

    const renderDanhSachCuoc = () => {

        return danhSachCuoc.map((item, index) => {
            return (
                <div className="col-4 mt-1" key={index}>
                    <QuanCuoc quanCuoc={item} />
                </div>
            )
        })
    }



    return (
        <div className="row">
            {renderDanhSachCuoc()}
        </div>
    );
}

export default DanhSachCuoc;