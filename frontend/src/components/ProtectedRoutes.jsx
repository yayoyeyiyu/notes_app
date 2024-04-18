import { Container } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const ProtectedRoutes = () => {

    // Function to check if a token exists in localStorage
    const getToken = () => localStorage.getItem("token");

    // If token exists, render the protected routes, including the NavBar
    if (getToken()) {
        return (
            <>
                <NavBar />
                <Container className="mt-5">
                    <Outlet />
                </Container>
            </>
        )
    } else {
        // If no token exists, redirect to the login page
        return <Navigate to='/login' />
    }
};   

export default ProtectedRoutes;
