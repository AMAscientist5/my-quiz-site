import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='font-size mt-5'>
            <details>
                <summary><strong>What is the purpose of react-router?</strong></summary>
                <p className='fs-5'> <strong>React Router</strong> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </details>

            <details>
                <summary><strong>What is a context API How does it work?</strong></summary>
                <p className='fs-5'> <strong>The React Context API</strong> is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </details>

            <details>
                <summary><strong>what is useRef hook and what is for?</strong></summary>
                <p className='fs-5'> <strong>The useRef Hook</strong>  allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </details>
        </div>
    );
};

export default Blog;