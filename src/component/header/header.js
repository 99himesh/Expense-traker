import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/Authcontext';
const Header = () => {
  const navigate=useNavigate();
const ctx=useContext(AuthContext);
 const logOutHandler=()=>{
  debugger
   ctx.logout();
   navigate("/signup")
 }

  return (
    <Navbar>
      <Container  >
        <Nav  style={{margin:'0 auto' }}>
       { !ctx.isLoggedIn &&  <Link to="/signup" style={{textDecoration:'none' ,padding:'0 10px'}}  >
            Signup
          </Link> }
        { !ctx.isLoggedIn && <Link to="/Login"  style={{textDecoration:'none',padding:'0 10px'}} >
            Login
          </Link>}
          { ctx.isLoggedIn && 
            <button onClick={logOutHandler}>logout</button>
        }
        </Nav>
      </Container>
    </Navbar>


  )
}
export default Header;