import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';






function NavBar () {
  return (

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Bicicletas Pepito</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
       <Nav.Link href="#home">Quienes somos</Nav.Link>
        <Nav.Link href="#link">Historia</Nav.Link>
          <NavDropdown title="Comprar" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">MTB</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Ciudad</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Downhill</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Registro</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>


  );

}

export default NavBar;