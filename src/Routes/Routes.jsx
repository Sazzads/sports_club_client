import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import AddClasses from "../Pages/Instructors/AddClasses";
import MyClasses from "../Pages/Instructors/MyClasses";
import ManageUsers from "../Pages/Admin/ManageUsers";
import ManageClasses from "../Pages/Admin/ManageClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoutes from "./StudentRoutes";
import MyEnorlledClasses from "../Pages/Student/MyEnorlledClasses";
import MySelectedClasses from "../Pages/Student/MySelectedClasses";
import AllClasses from "../Pages/Home/AllClasses/AllClasses";
import AllInstructors from "../Pages/Home/AllInstructors/AllInstructors";

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
                element: <AllClasses></AllClasses>
            },
            {
                path: '/instructors',
                element: <AllInstructors></AllInstructors>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
                children: [
                    {
                        path: 'addclasses',
                        element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
                    },
                    {
                        path: 'myclasses',
                        element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
                    },
                    {
                        path: 'manage-users',
                        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
                    },
                    {
                        path: 'manage-classes',
                        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
                    },
                    {
                        path:'my-enrolled-classes',
                        element:<StudentRoutes><MyEnorlledClasses></MyEnorlledClasses> </StudentRoutes>
                    },
                    {
                        path:'my-selected-classes',
                        element:<StudentRoutes><MySelectedClasses></MySelectedClasses> </StudentRoutes>
                    },
                ]
            },
        ]
    },


]);