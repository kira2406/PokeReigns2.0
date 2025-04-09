import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

import Layout from '../components/Layout/Layout';
import { Container } from '@mui/material';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Landing from "../pages/Landing/Landing";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors/authSelector";
import StarterPage from "../pages/StarterPage/StarterPage";
import Dashboard from "../pages/Dashboard/Dashboard";


const ProtectedRoute = ({ element }) => {
    const user = useSelector(selectUser)

    if (!user){
        return <Navigate to="/login" replace />
    }
    return element
};

const PublicRoute = ({ element }) => {
    const isAuthenticated = useSelector(selectUser)
    return isAuthenticated ? <Navigate to="/dashboard" replace /> : element;
};

const router = createBrowserRouter([
    {
        path:"/", element: <PublicRoute element={<Landing />} />
    },
    {
        path:"/login", element: <PublicRoute element={<Login />} />
    },
    {
        path:"/register", element: <PublicRoute element={<Register />} />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/starter",
                element: <ProtectedRoute element={<StarterPage />} />,
            },
            {
                path: "/dashboard",
                element: <ProtectedRoute element={<Dashboard />} />,
            }
        ],
    },
])
const AppRouter = () => {
  return (
    <Container disableGutters={true}>
    <RouterProvider router={router} />
    </Container>
  )
}

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired
};

PublicRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default AppRouter