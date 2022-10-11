import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';



const Quizs = () => {
    const quiz = useLoaderData();
    const {questions, name, } = quiz.data; //total, id, logo
    console.log(questions)
    return (
        <div>
        
            <h2 className='my-4'>{name}</h2>
            {
              questions.map(quiz => <Quiz
              key={quiz.id}
              quiz={quiz}
              ></Quiz> )  
            }
        </div>
    );
};

export default Quizs;