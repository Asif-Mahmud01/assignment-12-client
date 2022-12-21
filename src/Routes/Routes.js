import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main"
import Appointment from "../Pages/Appointment/Appointment";
import AvailableAppointment from "../Pages/Appointment/AvailableAppointment";
import Blog from "../Pages/Appointment/Blog";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Payment from "../Pages/Dashboard/Payment";
import Home from "../Pages/home/Home"
import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DisplayError";
import Error from "../Pages/Shared/Footer/Error";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";;

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: '/categories',
                element: <Appointment></Appointment>
            },
            {
                path: '/categories/Horror',
                element: <AvailableAppointment></AvailableAppointment>,
                loader: () => fetch('https://book-mart-server-1.vercel.app/categories/Horror')
            },
            {
                path: '/categories/Comedy',
                element: <AvailableAppointment></AvailableAppointment>,
                loader: () => fetch('https://book-mart-server-1.vercel.app/categories/Comedy')
            },
            {
                path: '/categories/Thriller',
                element: <AvailableAppointment></AvailableAppointment>,
                loader: () => fetch('https://book-mart-server-1.vercel.app/categories/Thriller')
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/*',
                element: <Error></Error>
            }

        ]
    },


    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manageDoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://book-mart-server-1.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default routes;


// REACT_APP_apiKey=AIzaSyBcaYoJzubZzHttbgBckUr6TviU97-5daA
// REACT_APP_authDomain=doctors-portal-835fb.firebaseapp.com
// REACT_APP_projectId=doctors-portal-835fb
// REACT_APP_storageBucket=doctors-portal-835fb.appspot.com
// REACT_APP_messagingSenderId=951731200636
// REACT_APP_appId=1:951731200636:web:675f58f5542d4f85e65ff9
// REACT_APP_measurementId=G-Q0NVKETYZH
// REACT_APP_imgbb_key=2308d6a28ba994af3a828b2df2298f72
// REACT_APP_STRIPE_PK=pk_test_51M7MeIJHbuyRCuFnVTCGRGFSNV2c50AytQDpuKbTXUxR0wiAvZC4Spr8rSCdxgrjvpklaP71xJvLfYiyVUtVpNui002eETGLLD