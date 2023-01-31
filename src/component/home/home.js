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
                  <h6>Welcome to Expense traker!!!</h6>
                </div>
                <div className="col-3"></div>
                <div className="col-3 text-end ">
                     <p  style={{background:'rgb(196, 164, 132)',
                     borderRadius:'20px',fontSize:'14px',padding:' 0 10px'}}>your profile is incomplete .<span >
                    <button  onClick={contactHandler} style={{textDecoration:'none',margin:'0',padding:'2px 0',fontSize:'14px',border:'0' ,color:'blue',background:'rgb(196, 164, 132)'}}>Complete now</button>
                    </span>
                    </p>
                </div>
                <hr/>
            </div>
        </div>
    )
}
export default Home;