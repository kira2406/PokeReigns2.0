import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

import Layout from '../components/Layout/Layout';
import { Container } from '@mui/material';
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Landing from "../pages/Landing/Landing";
import PropTypes from "prop-types";

const isAuthenticated = () => {
    return localStorage.getItem("userToken") !== null;
};

const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/" replace />;
};

const PublicRoute = ({ element }) => {
    return isAuthenticated() ? <Navigate to="/home" replace /> : element;
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
                path: "/home",
                element: <ProtectedRoute element={<Home />} />,
            },
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
    element: PropTypes.element.isRequired,
};

PublicRoute.propTypes = {
    element: PropTypes.element.isRequired,
};

export default AppRouter