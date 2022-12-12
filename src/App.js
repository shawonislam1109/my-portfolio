import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainHome from './component/MainHome/MainHome';
import Partical from './component/ParticalBackground/Partical';
import AllProduct from './porjectScrrnesort/AllProduct/AllProduct';
import LearningPlatform from './porjectScrrnesort/Lerning platfrom/learningPlatform';
import Resalemarket from './porjectScrrnesort/Resalemarket/Resalemarket';
import Toursim from './porjectScrrnesort/Toursim/Toursim';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainHome></MainHome>
  }
  ,
  {
    path: '/project',
    element: <AllProduct />,
    children: [
      {
        path: '/project/learning',
        element: <LearningPlatform />
      },
      {
        path: '/project/tour',
        element: <Toursim />
      },
      {
        path: '/project/resalemarket',
        element: <Resalemarket />
      }
    ]
  }
])

function App() {

  return (
    <div >
      <RouterProvider router={route}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Partical />
    </div>
  );
}

export default App;
