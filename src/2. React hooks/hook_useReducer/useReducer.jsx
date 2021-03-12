import React, { useReducer } from 'react';


/**
 * ---- useReducer : giống như 1 phiên bản nâng cấp của useState , dùng để quản lý các State của giao diện 
 * 
 */


// --- Mảng Sp có sẵn từ ban đầu trong giỏ hàng 

const initialCart = []

// ------------- Reducer

const cartReducer = (state, action) => {

    switch (action.type) {
        case 'addToCart': {

            let cartUpdate = [...state];

            // -- Tìm ra vị trí của item bất kỳ
            let index = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id);

            // -- Nếu vị trí đó đã tồn tại trong giỏ hàng
            if (index !== -1) {
                cartUpdate[index].quantity += 1;
            }

            // --- Còn Nếu chưa có trong giỏ hàng
            else {
                const itemCart = { ...action.item, quantity: 1 };
                cartUpdate.push(itemCart)
            }
            console.log(cartUpdate);

            return cartUpdate
        }
    }



    return [...state]
}


// ---- Mảng Product

let arrProduct = [
    { id: 1, name: 'Iphone', price: 1000 },
    { id: 2, name: 'Note 10 Plus', price: 5000 },
    { id: 3, name: "Huawei P20", price: 2000 }
]


/**
 *  ------ render Tổng 
 */


function UseReducer(props) {


    // ---- Hook Reducer
    
    let [cart, dispatch] = useReducer(cartReducer, initialCart)


    // ----- Hàm THÊM SẢN PHẨM 

    const addToCart = (itemClick) => {
        const action = {
            type: 'addToCart',
            item: itemClick
        }

        dispatch(action)
    }

    return (
        <div className="container">

            <div className="row">
                {
                    arrProduct.map((item, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <div className="card">
                                    <img className="card-img-top" src={'http://picsum.photos/200/200'} alt={index} />
                                    <div className="card-body">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">{item.price}</p>
                                        <button className="btn btn-success"
                                            onClick={() => addToCart(item)}>Add to cart</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <h3 className="text-center my-4">Giỏ hàng</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        cart.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.quantity * product.price}</td>
                                    <td>
                                        <button className="btn btn-danger">x</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div >
    );
}

export default UseReducer;