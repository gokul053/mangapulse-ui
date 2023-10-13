import { Outlet } from "react-router-dom";
import { Accordion, Container, Nav, Navbar } from "react-bootstrap";

const HeaderPage = () => {
    return (
        <>
            <Accordion defaultActiveKey={0}>
                <Navbar bg="light" className="mb-4">
                    <Container>
                        <Navbar.Brand className="brandLogo">MANGAPULSE</Navbar.Brand>
                        <Nav variant="underline" defaultActiveKey="1" className="me-auto">
                            <Nav.Link eventKey="1" >Shows</Nav.Link>
                            <Nav.Link eventKey="2" >Manga</Nav.Link>
                            <Nav.Link eventKey="3" >News</Nav.Link> 
                            <Nav.Link eventKey="4" >Games</Nav.Link>
                            <Nav.Link eventKey="5" >Premium</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link>Login</Nav.Link>
                            <Nav.Link>Queue</Nav.Link>
                            <Nav.Link>Search</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Accordion>
            <Outlet />
        </>
    );
}

export default HeaderPage;