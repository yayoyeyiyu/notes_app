import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { genericRequestThunk } from '../store/slices/app.slice';
import axios from '../utils/axios';

const Login = () => {

    const { register, handleSubmit } = useForm(); // Initialize useForm hook
    const dispatch = useDispatch(); // Initialize useDispatch hook
    const navigate = useNavigate(""); // Initialize useNavigate hook

    // Function to handle form submission
    const submit = data => {
        // Dispatch genericRequestThunk with async function to handle login request
        dispatch(genericRequestThunk(async () => {
            const res = await axios().post('/users/login', data); // Send login request
            localStorage.setItem("token", res.data.token); // Store token in local storage
            navigate("/"); // Redirect to home page after successful login
        }, "", "Invalid credentials")); // Error message for invalid credentials
    }

    return (
        <div className="center" onSubmit={handleSubmit(submit)}>
            <Form>
                <h1>Login</h1>
                <Card style={{ width: 500 }}>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                {...register("email")} // Register email input field with useForm hook
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                {...register("password")} // Register password input field with useForm hook
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Card.Body>
                </Card>
                <Form.Text className="text-muted">
                    Doesn't have an account? <Link to="/signup">Sign up</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;
