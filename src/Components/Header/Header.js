import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container className="header-bar">
                <Navbar.Brand href=""><span className="logo"><img src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/xlogo2_footer.png.pagespeed.ic.9Jz8KhWoyy.webp" alt="" /></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <ul className="header-style">
                            <li><NavLink
                                to="/home"
                                activeStyle={activeStyle
                                }
                                className="text-decoration-none"
                            >
                                Home
                            </NavLink></li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeStyle={activeStyle
                                    }
                                    className="text-decoration-none"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    activeStyle={activeStyle
                                    }
                                    className="text-decoration-none"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    activeStyle={activeStyle
                                    }
                                    className="text-decoration-none"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/jobs"
                                    activeStyle={activeStyle
                                    }
                                    className="text-decoration-none"
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