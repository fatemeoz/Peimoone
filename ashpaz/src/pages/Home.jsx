import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../CustomStyles.css';

export class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container
                fluid={true}
                style={{
                    padding: "20px 20px 100px 20px"                }}
            >
                <Row>
                    <Col xs={12} md={6} className="centeredCol">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
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
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                />
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
}

export default Home;
