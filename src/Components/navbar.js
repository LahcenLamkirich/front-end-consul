import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
<Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="/" style={{color: "white"}}>Shop Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/customers" style={{color: "white"}}>Customer</Nav.Link>
            <Nav.Link href="/products" style={{color: "white"}}>Products</Nav.Link>
            <Nav.Link href="/orders" style={{color: "white"}}>Orders</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;