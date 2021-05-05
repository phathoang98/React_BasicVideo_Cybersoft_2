import React from 'react';
import Categories from '../components/Categories';
import Model from '../components/Model';
import ProductList from '../components/ProductList';

function DressingRoom(props) {

    return (
        <div className="container-fluid">
            <h2>Phòng thử đồ Redux</h2>
            <div className="row">

                <div className="col-7">
                    <Categories />
                    <ProductList />
                </div>

                <div className="col-5">
                    <Model />
                </div>
            </div>
        </div>
    );
}

export default DressingRoom;