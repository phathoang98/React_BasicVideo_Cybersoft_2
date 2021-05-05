import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from "./style.module.css";

function Model(props) {

    let [state, setState] = useState({

        contain: "img/background/background_998.jpg",
        body: "img/allbody/bodynew.png",
        bikinitop: "img/allbody/bikini_branew.png",
        bikinibottom: "img/allbody/bikini_pantsnew.png",
        model: "img/model/1000new.png",
        feetleft: "img/allbody/feet_high_leftnew.png",
        feetright: "img/allbody/feet_high_rightnew.png"
    })

    let model = useSelector(state => state.ModelReducer)

    return (
        <div className={classes.contain}
            style={{ background: `url(${state.contain})` }}>

            <div className={classes.body}
                style={{ background: `url(${state.body})` }}>
            </div>

            <div className={classes.model}
                style={{ background: `url(${state.model})` }}>
            </div>

            <div className={classes.bikinitop}
                style={{ background: `url(${state.bikinitop})` }}>
            </div>

            <div className={classes.bikinibottom}
                style={{ background: `url(${state.bikinibottom})` }}>
            </div>

            <div className={classes.feetleft}
                style={{ background: `url(${state.feetleft})` }}>
            </div>

            <div className={classes.feetright}
                style={{ background: `url(${state.feetright})` }}>
            </div>


            {/* ---------- Thay đổi QUẦN ÁO ... */}

            <div className={classes.bikinitop}
                style={{
                    backgroundImage: `url(${model.topclothes})`,
                    backgroundSize: 'cover'
                }}>
            </div>

            <div className={classes.bikinibottom}
                style={{
                    backgroundImage: `url(${model.botclothes})`,
                    backgroundSize: 'cover'
                }}>
            </div>

            <div className={classes.feetleft}
                style={{
                    backgroundImage: `url(${model.shoes})`,
                    backgroundSize: 'cover'
                }}>
            </div>

            <div className={classes.feetright}
                style={{
                    backgroundImage: `url(${model.shoes})`,
                    backgroundSize: 'cover'
                }}>
            </div>

        </div>
    );
}

export default Model;