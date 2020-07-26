import React, { Component } from "react";
import Link from "../components/Link";
import { Navbar, Nav, Spinner, NavDropdown } from "react-bootstrap";

class myNavbar extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="light" className="nav-custom">
                <Navbar.Brand>Ashpaz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">
                            <li className="nav-item nav-link">Home</li>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default myNavbar;
