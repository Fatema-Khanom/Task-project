import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllUser from "../pages/AllUser";
import UserDetails from "../pages/UserDetails";
import Products from "../pages/Products";


    export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      //errorElement:<ErrorPage></ErrorPage>,
      children: [
       {
        path: "/",
        element: <AllUser></AllUser>,
       },
       {
        path: "/user-details/:id",
        element: <UserDetails />,
       },

       {
        path: "/products",
        element: <Products />,
       }
       
       
       
       
      
     
       
      ],
      },
     
  ]);