import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthAction } from "../../stores/AuthSlice";


const LoginHeader=()=>{
    const ifLoggedIn= useSelector(state=>state.auth.loggedIn); 
    const navigate=useNavigate();
  const dispatch=useDispatch();
    const logOutHandler=()=>{
         dispatch(AuthAction.IsLoggedout())
         navigate("/signup");
       }
         return (<div className="container-fluid bg-dark mb-5 py-2">
            <h2 style={{display:'inline-block',color:'white'}}>WELCOME TO EXPENSE TRACKER</h2>
            { ifLoggedIn && 
          <div className='float-end  text-end' style={{margin:'0 auto',display:'inline-block'}}>
              <Button onClick={logOutHandler}  >logout</Button>
           </div>
        } 
         </div>)
}
export default LoginHeader;
