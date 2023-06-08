import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import AddClasses from "../Pages/Instructors/AddClasses";
import MyClasses from "../Pages/Instructors/MyClasses";
import ManageUsers from "../Pages/Admin/ManageUsers";
import ManageClasses from "../Pages/Admin/ManageClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
                children: [
                    {
                        path: 'addclasses',
                        element: <AddClasses></AddClasses>
                    },
                    {
                        path: 'myclasses',
                        element: <MyClasses></MyClasses>
                    },
                    {
                        path: 'manage-users',
                        element: <ManageUsers></ManageUsers>
                    },
                    {
                        path: 'manage-classes',
                        element: <ManageClasses></ManageClasses>
                    },
                ]
            },
        ]
    },


]);