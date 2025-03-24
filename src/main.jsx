import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './components/Context/AuthProvider.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Pages/Home/Home.jsx';
import Login from './components/Pages/Login/Login.jsx';
import Register from './components/Pages/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import AddTutorials from './components/Pages/AddTutorials/AddTutorials.jsx';
import MyTutorials from './components/Pages/MyTutorials/MyTutorials.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<h1>Eror</h1>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addTutorials',
        element:<AddTutorials></AddTutorials>
      },
      {
        path:'/myTutorials',
        element:<MyTutorials></MyTutorials>,
        loader: () => fetch('http://localhost:5000/tutors') 
        
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
    </StrictMode>,
)
