import { Link, useNavigate } from "react-router-dom";
import React,{} from "react";

const Home=()=>{
   const navigate= useNavigate();

   const contactHandler=()=>{
      navigate("/contact")
   }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                  <p>Welcome to Expense traker</p>
                </div>
                <div className="col-6 text-end">
                     <p  style={{background:'#E1C16EA',
                     borderRadius:'20px',padding:' 0 10px'}}>your profile is incomplete <span >
                    <button onClick={contactHandler} style={{textDecoration:'none',}}>Complete now</button>
                    </span>
                    </p>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default Home;