import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/Admission/AdmissionForm";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import MyCollege from "../pages/MyCollege/MyCollege";
import DisplayDetails from "../pages/Home/DisplayColleges/DisplayDetails";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../pages/Error/Error";
import User from "../pages/User/User";
import EditUser from "../pages/User/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children :[
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : "/colleges" ,
        element : <Colleges></Colleges>
      },
      {
        path : "/admission" ,
        element : <Admission></Admission>
      },
      {
        path : "/admission/:id" ,
        element : <PrivateRoutes><AdmissionForm></AdmissionForm></PrivateRoutes>
      },
      {
        path :"/login",
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path :'myCollege' ,
        element : <MyCollege></MyCollege>
      },
      {
        path :'/details/:id',
        element : <PrivateRoutes><DisplayDetails></DisplayDetails></PrivateRoutes>
      },
      {
        path : '/displayUser',
        element : <User></User>
      },
      {
        path :"/userDetails",
        element : <EditUser></EditUser>
      }
    ]
  },
  {
    path :"*",
    element : <Error></Error>
  }
]);

export default router;