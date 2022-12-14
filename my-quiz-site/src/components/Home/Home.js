import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutSite from '../AboutSite/AboutSite';
import Cart from '../Cart/Cart';



const Home = () => {
    const quiz = useLoaderData();



    return (
        <div>
            <AboutSite></AboutSite>
        <div className='d-lg-flex gap-lg-4 p-5'>
        {
            quiz.data.map(cart => <Cart 
                key={cart.id}
                cart={cart} 
                ></Cart> )
        }
        </div>
        </div>
    );
};

export default Home;