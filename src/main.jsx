import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Components/About';
import Error from './Components/errorPage/Error';
import Users from './Components/Users/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:'/about', 
        element:<About />,
      } , 
      {
        path : 'users', 
        element  : <Users /> , 
        loader : ()=> fetch('https://jsonplaceholder.typicode.com/users')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
