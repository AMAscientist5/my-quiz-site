import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = ({cart}) => {
    const {id, name, total, logo} = cart;
    return (
        <div className='text-lg-start border m-2 rounded-1'>
            <img className='img-fluid ' src={logo} alt="" />
            <div className='p-2'>
            <h2>{name}</h2>
            <h3 className='fs-6'>{total} </h3>
                <Link to={`/cart/${id}`}><button className='border-0 rounded-2 bg-primary text-white'>Practice Now</button></Link>
            </div>
        </div>
    );
};

export default Cart;