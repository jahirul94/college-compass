import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/Admission/AdmissionForm";

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
      }
    ]
  },
]);

export default router;