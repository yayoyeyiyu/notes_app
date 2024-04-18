import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNotes } from '../store/slices/notes.slice';
import { setUser } from '../store/slices/user.slice';

const NavBar = () => {
    // Define the navigate function using the useNavigate hook
    const navigate = useNavigate();

    // Initialize the useDispatch hook
    const dispatch = useDispatch();

    // Define the logout function
    const logout = () => {
        // Redirect to the login page
        navigate("/login");
        // Clear the token from local storage
        localStorage.setItem("token", "");
        // Clear user information from Redux state
        dispatch(setUser({}));
        // Clear notes from Redux state
        dispatch(setNotes([]));
    }
    
    return (
        // Render the navigation bar component
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Notes</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link onClick={logout}>Log out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
