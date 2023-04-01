import './App.css';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Hello } from './pages/Hello';

const basepath = process.env.REACT_APP_BASEPATH;

const router = createBrowserRouter([
  {
    path: "/hello",
    element: <Hello />,
  },
  {
    path: "/",
    element: <Home />,
  }
], {
  basename: basepath,
});


function App() {
  // console.log(process.env.REACT_APP_BASEPATH)
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
