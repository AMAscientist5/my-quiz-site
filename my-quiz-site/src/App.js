
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statictics from './components/Statictics/Statictics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statictics></Statictics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/cart/:cartId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.cartId}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    },
    {
      path: '*',
      element: <h2>404. This Route Not Found</h2>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
