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
import Update from './components/Pages/Update/Update.jsx';
import PrivateRoute from './components/Private/PrivateRoute.jsx';
import FindTutor from './components/Pages/FindTutor/FindTutor.jsx';
import TutorDetails from './components/Pages/TutorDetails/TutorDetails.jsx';
import MyBookedTutor from './components/Pages/MyBookedTutor/MyBookedTutor.jsx';
import TutorsCategory from './components/Pages/TutorsCategory/TutorsCategory.jsx';
import axios from 'axios';

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
        element:<PrivateRoute>
          <AddTutorials></AddTutorials>
        </PrivateRoute>
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/tutors/${params.id}`)

      },
      {
        path:'/findTutors',
        element:<FindTutor></FindTutor>,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const search = url.searchParams.get("search") || "";
          return axios.get(`http://localhost:5000/tutors?search=${search}`,{withCredentials:true});
        }   

      },
      {
        path:'/findTutors/category/:category',
        element:<TutorsCategory></TutorsCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tutors/category/${params.category}`)
        
      },
      {
        path:'/myBookedTutors',
        element:<PrivateRoute>
          <MyBookedTutor></MyBookedTutor>
        </PrivateRoute>,
        

      },
      {
        path:'/tutorDetails/:id',
        element:<PrivateRoute>
          <TutorDetails></TutorDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/tutors/${params.id}`)
       

      },
      {
        path:'/myTutorials',
        element:<PrivateRoute>
          <MyTutorials></MyTutorials>
        </PrivateRoute>,
        
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
