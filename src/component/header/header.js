import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/Authcontext';
const Header = () => {
const ctx=useContext(AuthContext);


  return (
    <Navbar>
      <Container  >
        <Nav  style={{margin:'0 auto' }}>
          { ctx.isLoggedIn && <Link to="/signup" style={{textDecoration:'none' ,padding:'0 10px'}}  >
            Signup
          </Link> }
          { ctx.isLoggedIn && <Link to="/Login"  style={{textDecoration:'none',padding:'0 10px'}} >
            Login
          </Link>}
        </Nav>
      </Container>
    </Navbar>


  )
}
export default Header;