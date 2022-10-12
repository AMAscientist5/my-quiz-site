import React from 'react';
import './Quiz.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({quiz}) => {
    const {options, question, correctAnswer} = quiz; // correctAnswer

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

    const rightAnswer = (value) => {
        toast.success(`${value}`, {
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

    const wrongAnswer = (value) => {
        toast.success(`${value}`, {
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

  
    const hanleClick = (event) => {
        const value = event.target.innerText;
        if(value===correctAnswer){
            rightAnswer("answer is Correct")
         
        }else{
            wrongAnswer('answer is wrong')
        }
    }

    return (
        <div className='border p-4 shadow custom-width m-auto mb-5'>
            <h4 className='mb-4  m-auto'> {question}</h4>
             <ol>
             {
                options.map(option => <button onClick={hanleClick} className='border rounded-2 cursor p-2 my-2 m-auto hover'>{option}</button>)
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