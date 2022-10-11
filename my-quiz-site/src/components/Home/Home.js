import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutSite from '../AboutSite/AboutSite';
import Cart from '../Cart/Cart';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const quiz = useLoaderData();

    const handleBtn = (id) => {
        console.log(id)
        <Quiz></Quiz>
    }

    return (
        <div>
            <AboutSite></AboutSite>
        <div className='d-lg-flex gap-lg-4 p-5'>
        {
            quiz.data.map(quiz => <Cart 
                key={quiz.id}
                quiz={quiz} 
                handleBtn={handleBtn} 
                ></Cart> )
        }
        </div>
        </div>
    );
};

export default Home;