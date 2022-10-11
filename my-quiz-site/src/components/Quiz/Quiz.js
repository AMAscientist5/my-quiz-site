import React from 'react';
import './Quiz.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({quiz}) => {
    console.log(quiz)
    const {options, question, correctAnswer} = quiz; //id, correctAnswer

    const notify = () => {
        toast.success(`${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <div className='border p-4 shadow custom-width m-auto mb-5'>
            <h4 className='mb-4  m-auto'> {question}</h4>
             <ol>
             {
                options.map(option => <p className='border rounded-2 cursor p-2 my-2 m-auto hover'>{option}</p>)
             }
             <div>
             <EyeIcon onClick={notify} className="icon-size"/>
             </div>
             <ToastContainer />
             </ol>
        </div>
    );
};

export default Quiz;