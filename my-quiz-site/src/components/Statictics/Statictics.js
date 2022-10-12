import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizChart from '../QuizChart/QuizChart';

const Statictics = () => {
    const quiz = useLoaderData();
    
    return (
        <div>
            
             <QuizChart 
              quiz={quiz}
             ></QuizChart>   
        </div>
    );
};

export default Statictics;