import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import AuthContext from '../context/Authcontext';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../../stores/AuthSlice';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const ifLoggedIn= useSelector(state=>state.auth.loggedIn);
// const ctx=useContext(AuthContext);
 const logOutHandler=()=>{
  debugger
  //  ctx.logout();
   dispatch(AuthAction.IsLoggedout())
   navigate("/signup")
 }

  return (
    <Navbar>
      <Container  >
        <Nav  style={{margin:'0 auto' }}>
       { !ifLoggedIn&&  <Link to="/signup" style={{textDecoration:'none' ,padding:'0 10px'}}  >
            Signup
          </Link> }
        { !ifLoggedIn && <Link to="/Login"  style={{textDecoration:'none',padding:'0 10px'}} >
            Login
          </Link>}
          { ifLoggedIn && 
          <div className='float-end  text-end' style={{margin:'0 auto'}}>
              <button onClick={logOutHandler} style={{background:'rgb(160,82,45)',color:'white',border:'0',borderRadius:'5px'}} >logout</button>
           </div>
        }
        </Nav>
      </Container>
    </Navbar>


  )
}
export default Header;