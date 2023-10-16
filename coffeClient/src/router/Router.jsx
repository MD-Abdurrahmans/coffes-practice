import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../components/updateProduct/UpdateProduct";
import SignUp from "../pages/userForm/Signup/SignUp";
import SignIn from "../pages/userForm/signIn/SignIn";
import Users from "../pages/users/Users";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/error/Error";

  
  const router = createBrowserRouter([

    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<PrivateRoute><Home></Home></PrivateRoute>,
                loader:()=>fetch('https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/coffes')
            },
            {
                path:"/addProduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"/editProduct/:id",
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader:({params})=>fetch(`https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/coffes/${params.id}`)
                
            },
            {
                path:"/users",
                element:<PrivateRoute><Users></Users></PrivateRoute>,
                loader:()=>fetch(`https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/users`)
                
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
                // loader:({params})=>fetch(`https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/coffes/${params.id}`)
                
            },
            {
                path:"/signin",
                element:<SignIn></SignIn>
                // loader:({params})=>fetch(`https://server-rjhax89va-rajs-projects-d77d3858.vercel.app/coffes/${params.id}`)
                
            },
        ]

    }
  ])

  export default router;