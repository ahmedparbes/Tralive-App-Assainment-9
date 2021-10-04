import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="header-bar">
                <Navbar.Brand href=""><span className="logo">Education Blog</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <ul className="header-style">
                            <li><NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: "none"
                                }}
                            >
                                Home
                            </NavLink></li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none"

                                    }}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none"
                                    }}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    activeStyle={{

                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none"
                                    }}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/jobs"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red",
                                        textDecoration: "none"
                                    }}
                                >
                                    Jobs
                                </NavLink>
                            </li>

                        </ul>





                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;