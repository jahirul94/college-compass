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
        element : <AdmissionForm></AdmissionForm>
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
        element : <DisplayDetails></DisplayDetails>
      }
    ]
  },
]);

export default router;