import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductList(props) {

    /**
     * ---------- Lấy dữ liệu từ State
     */

    //  Lấy DANH SÁCH CÁC SẢN PHẨM
    let productList = useSelector(state => state.ProductListReducer)

    // Lấy Type của sản phẩm để "LỌC RA CÁC SẢN PHẨM" mà ta click chọn 
    let choosenType = useSelector(state => state.ChoosenCategoryReducer)

    return (
        <div className="row">
            {
                // Lọc sản phẩm theo Type trước 
                productList.filter(item => item.type === choosenType)
                    // Sau đó mới in ra các sản phẩm thỏa đk
                    .map((item, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <ProductItem item={item} />
                            </div>
                        )
                    })
            }
        </div>
    );
}

export default ProductList;