import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signup from "../Pages/Home/Login/Signup";
import Login from "../Pages/Home/Login/Login";
import Instructor from "../Pages/Instructor/Instructor";
import Allclass from "../Pages/AllClass.jsx/Allclass";
import Dashboard from "../Layout/Dashboard";
import MyselectClass from "../Pages/Dashboard/UserDeshboard/MyselectClass";
import Enrolledclass from "../Pages/Dashboard/UserDeshboard/Enrolledclass";
import PaymentHistory from "../Pages/Dashboard/UserDeshboard/PaymentHistory";
import MyClass from "../Pages/Dashboard/Instructor/MyClass";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import ManageUser from "../Pages/Dashboard/AdminDeshboard/ManageUser";
import ManageClass from "../Pages/Dashboard/AdminDeshboard/ManageClass";
import Payment from "../Pages/Dashboard/UserDeshboard/Payment";
import Error from "../Pages/Error";
import OfferPage from "../Pages/Offer/Offer";
import BlogPage from "../Pages/Blog/Blog";
import UserHome from "../Share/Userhome";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
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
        },{
          path:'/offer',
          element:<OfferPage></OfferPage>
        },
        {
          path:'/blog',
          element:<BlogPage></BlogPage>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'myselected',
          element:<MyselectClass></MyselectClass>,
        },
            {path:'payment/:id',
            element:<Payment></Payment>
            ,  loader: ({params}) => fetch(`https://summer-camp-server-suraiyatithi.vercel.app/carts/${params.id}`)
            },
  
        {
          path:'myenroll',
          element:<Enrolledclass></Enrolledclass>
        },
     
        {
          path:'paymenthistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'myclass',
          element:<MyClass></MyClass>
        },
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path:'manageuser',
          element:<ManageUser></ManageUser>
        },
        {
          path:'manageclass',
          element:<ManageClass></ManageClass>
        },
        {
          path:'userhome',
          element:<UserHome></UserHome>
        }
      ]
    }
     
  ]);