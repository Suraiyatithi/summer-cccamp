import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Home/Login/Signup";
import Login from "../Pages/Home/Login/Login";
import Instructor from "../Pages/Instructor/Instructor";
import Allclass from "../Pages/AllClass.jsx/Allclass";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/instructor',
          element:<Instructor></Instructor>
        },
        {
          path:'/allclass',
          element:<Allclass></Allclass>
        }
      ]
    },
     
  ]);