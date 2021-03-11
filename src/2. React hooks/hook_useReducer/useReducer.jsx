import React, { useReducer } from 'react';

const initialCart = [
    { id: 1, name: 'Iphone', price: 1000, quantity: 1 }
]

const cartReducer = (state, action) => {

    return [...state]
}

function UseReducer(props) {

    let [cart, dispatch] = useReducer(cartReducer, initialCart)

    return (
        <div>

        </div>
    );
}

export default UseReducer;