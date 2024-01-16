import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Components/MainLayOut/MainLayOut";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration.jsx/Registration";
import AuthProvider from "./AuthProvider";
import About from "./Components/Home/About/About";
import CheckOut from "./Components/Home/Services/CheckOut";
import AddProduct from "./Components/AddProduct/AddProduct";
import Details from "./Components/Home/Services/Details";
import Bookings from "./Components/Home/Services/Bookings";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Title from "./Components/Dashboard/Title";
import ManageProduct from "./Components/Dashboard/ManageProduct";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Update from "./Components/Dashboard/Update";
import AddCategory from "./Components/Dashboard/AddCategory";
import ManageCategory from "./Components/Dashboard/ManageCategory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader:()=> fetch('http://localhost:5000/addProducts')
      },
      {
        path:'/addProducts',
        element:<AddProduct></AddProduct>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path:'/details/:id',
        element:<Details></Details>,
        loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/checkOut/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ],
    
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Title>Dashboard Home</Title>
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>
      },
      
      {
        path: "/dashboard/manageProduct",
        element: <ManageProduct></ManageProduct>,
        // loader: () => fetch('http://localhost:5000/addProducts')
      },
      {
        path: "/dashboard/manageCategory",
        element: <ManageCategory></ManageCategory>
      },
      {
        path: "/dashboard/updateProduct/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/addProducts/${params.id}`)
      },
      {
        path:'/dashboard/addCategory',
        element:<AddCategory></AddCategory>
      }
   ]
  },
]);

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div  className="max-w-7xl mx-auto">
    <QueryClientProvider client={client}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
    
    </div>
  </React.StrictMode>
);
