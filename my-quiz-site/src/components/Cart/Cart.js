import React from 'react';

const Cart = ({quiz}) => {
    console.log(quiz)
    return (
        <div>
            <h2>{quiz.name}</h2>
            <img src={quiz.logo} alt="" />
            <h2>{quiz.total}</h2>
        </div>
    );
};

export default Cart;