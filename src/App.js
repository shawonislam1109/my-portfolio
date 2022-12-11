import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainHome from './component/MainHome/MainHome';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainHome></MainHome>
  }
])

function App() {
  return (
    <div >
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
