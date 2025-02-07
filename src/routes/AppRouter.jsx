import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllUser from "../pages/AllUser";


    export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      //errorElement:<ErrorPage></ErrorPage>,
      children: [
       {
        path: "/",
        element: <AllUser></AllUser>,
       }
       
       
       
       
      
     
       
      ],
      },
     
  ]);