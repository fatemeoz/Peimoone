import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import "../styles/CustomStyles.css";

function Login(props) {
    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        if (cookies['auth-token']){
            props.history.push('/posts');
        }
      }, []);

    const submit = (event) => {
        event.preventDefault();
        console.log(event.target.elements.formBasicEmail.value);
        const username = event.target.elements.formBasicEmail.value;
        const password = event.target.elements.formBasicPassword.value;
        axios.post(`${process.env.REACT_APP_SERVER}/users/login`, {username: username, password: password}).then((res) => {
            console.log('success')
            if (res.data.token) {
                setCookie('auth-token', res.data.token);
                props.history.push('/posts');
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <Container
            fluid={true}
            style={{
                padding: "20px 20px 100px 20px",
            }}
        >
            <Row>
                <Col xs={12} md={6} className="centeredCol">
                    <Form onSubmit={submit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
