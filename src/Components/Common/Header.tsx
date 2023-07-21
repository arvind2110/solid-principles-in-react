import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return(
        <Row>
            <Col>
                <Navbar bg="light" data-bs-theme="light">
                    <Container>
                        <Navbar.Brand as={Link} to="/">S.O.L.I.D</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/srp">SRP</Nav.Link>
                            <Nav.Link as={Link} to="/ocp">OCP</Nav.Link>
                            <Nav.Link as={Link} to="/lsp">LSP</Nav.Link>
                            <Nav.Link as={Link} to="/isp">ISP</Nav.Link>
                            <Nav.Link as={Link} to="/dip">DIP</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    );
};

export default Header;