import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext from '../context/Authcontext';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../../stores/AuthSlice';
import LoginHeader from './loginHeader';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const ifLoggedIn= useSelector(state=>state.auth.loggedIn);
// const ctx=useContext(AuthContext);
//  const logOutHandler=()=>{
//   debugger
//   //  ctx.logout();
//    dispatch(AuthAction.IsLoggedout())
//    navigate("/signup");
//  }

  return (<div>
       {ifLoggedIn && <LoginHeader/>}

    <Navbar>
      <Container  >
      
        <Nav  style={{margin:'0 auto' }}>
       { !ifLoggedIn&&  <Link to="/signup" style={{textDecoration:'none' ,padding:'0 10px'}}  >
            Signup
          </Link> }
        { !ifLoggedIn && <Link to="/Login"  style={{textDecoration:'none',padding:'0 10px'}} >
            Login
          </Link>}
         
        </Nav>
      </Container>
    </Navbar>
    </div>

 

  )
}
export default Header;