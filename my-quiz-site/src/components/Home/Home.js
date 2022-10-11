import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutSite from '../AboutSite/AboutSite';
import Cart from '../Cart/Cart';


const Home = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <AboutSite></AboutSite>
        {
            quiz.data.map(quiz => <Cart key={quiz.id} quiz={quiz}></Cart> )
        }
        </div>
    );
};

export default Home;