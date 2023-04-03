import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            {/*création d'un menu déroulant */}
            <NavDropdown title="Car" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Porche</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">BMW</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Audi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Peugeot</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Renault</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Siat</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <HeaderCartButton onClick={props.onShowCart}/>
      </Container>
    </Navbar>
  );
}

export default Header;