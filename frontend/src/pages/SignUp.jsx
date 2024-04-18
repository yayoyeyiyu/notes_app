import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserThunk } from '../store/slices/user.slice';

const SignUp = () => {

    const { register, handleSubmit } = useForm(); // Initialize useForm hook
    const dispatch = useDispatch(); // Initialize useDispatch hook
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle form submission
    const submit = (data) => {
        dispatch(createUserThunk(data, () => navigate("/login"))); // Dispatch createUserThunk action with form data and redirect to login page after successful signup
    }

    return (
        <div className="center" onSubmit={handleSubmit(submit)}>
            <Form>
                <h1>Sign up</h1>
                <Card style={{ width: 500 }}>
                    <Card.Body>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                {...register("email")} // Register email input field with useForm hook
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control {...register("firstName")} /> 
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control {...register("lastName")} /> 
                                </Form.Group>
                            </Col>
                        </Row>


                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                {...register("password")}
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
                    Already have an account? <Link to="/login">Log in</Link>
                </Form.Text>
            </Form>
        </div>
    );
};

export default SignUp;
