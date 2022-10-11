import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.name)
    return (
        <div>
            <h1>I am quiz</h1>
            <h2>{quiz.data.name}</h2>
        </div>
    );
};

export default Quiz;