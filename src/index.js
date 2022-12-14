import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "routes/root";
import ErrorPage from './error-page';
import Home from 'routes/home';
import Menu from 'routes/menu';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/menu",
        element:<Menu/>
      },
    ],
  },
]);

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
