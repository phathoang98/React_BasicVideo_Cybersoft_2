import React from 'react';
import { useDispatch } from 'react-redux';
import { actChoosenProduct } from '../../Redux/actions/DresRoomAction';

function ProductItem(props) {

    let { name, imgSrc_jpg } = props.item

    let dispatch = useDispatch();

    let chooseCloth = (cloth) => {
        dispatch(actChoosenProduct(cloth))
    }


    return (
        <div className="card my-3 p-2">
            <img src={imgSrc_jpg} alt="" />
            <p>{name}</p>
            <button className="btn btn-success"
                onClick={() => { chooseCloth(props.item) }}>
                Thử đồ
            </button>
        </div>
    );
}

export default ProductItem;