import React from 'react';
import './Cart.css';
const Cart = ({quiz, handleBtn}) => {
    console.log(quiz)
    return (
        <div className='text-lg-start border m-2 rounded-1'>
            <img className='img-fluid ' src={quiz.logo} alt="" />
            <div className='p-2'>
            <h2 >{quiz.name}</h2>
            <h2 className='fs-6'>{quiz.total}</h2>
            <button onClick={() => handleBtn(quiz.id)} className='border-0 rounded-2 bg-primary text-white'>Practice Now</button>
            </div>
        </div>
    );
};

export default Cart;