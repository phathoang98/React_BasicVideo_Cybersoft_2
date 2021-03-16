import React from 'react';
import DanhSachCuoc from './danhSachCuoc';
import DanhSachXucXac from './danhSachXucXac';
import DiemCuoc from './diemCuoc';
import "./assets/gameBauCua.css"

function GameBauCua(props) {
    return (
        <div id="gameBauCua" className="container-fluid">
            <DiemCuoc />

            <div className="row">
                <div className="col-7 pl-5">
                    <DanhSachCuoc />
                </div>

                <div className="col-5">
                    <DanhSachXucXac />
                </div>
            </div>

        </div>
    );
}

export default GameBauCua;