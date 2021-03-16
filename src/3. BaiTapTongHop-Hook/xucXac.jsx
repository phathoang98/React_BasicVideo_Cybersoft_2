import React, { Fragment } from 'react';

function XucXac(props) {

    let { xucXacItem } = props;

    return (
        // ---- Biến img 2d --> 3d cho các xúc xắc 
        <Fragment>
            <div className="scene">
                <div className="cube">
                    <img className="cube__face front" style={{ width: "100%" }}
                        src={xucXacItem.hinhAnh} alt="bau" />

                    <img className="cube__face back" style={{ width: "100%" }}
                        src="./img/GameBauCua/bau.png" alt="bau" />

                    <img className="cube__face right" style={{ width: "100%" }}
                        src="./img/GameBauCua/ga.png" alt="bau" />

                    <img className="cube__face left" style={{ width: "100%" }}
                        src="./img/GameBauCua/ca.png" alt="bau" />

                    <img className="cube__face top" style={{ width: "100%" }}
                        src="./img/GameBauCua/tom.png" alt="bau" />

                    <img className="cube__face bottom" style={{ width: "100%" }}
                        src="./img/GameBauCua/nai.png" alt="bau" />

                </div>
            </div>
        </Fragment>

    );
}

export default XucXac;