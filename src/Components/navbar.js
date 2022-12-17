import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to='/'>Shop Management </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/customers">Customers</Nav.Link>
            <Nav.Link to="/products">Products</Nav.Link>
            <Nav.Link to="/orders">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;