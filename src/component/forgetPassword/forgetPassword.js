 import React,{useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { Navigate ,useNavigate } from "react-router-dom";
const ForgetPassword=()=>{
 const emailinputRef=useRef();
 const navigate=useNavigate();
 const [password,setpassword]=useState();
 

//  const [error,seterror]=useState();
//  if(!emailinputRef.current.value.contains("@")){
//      seterror("please enter right email address")
//     }
    
    
    
    const sendForgetLink= async(event)=>{
        const enteredEmail=emailinputRef.current.value;
        

    event.preventDefault();
   try { const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDOBKsBkoQ9LTBCmp3LobdP7sg6C7JCzRM',{
        method:"post",
        body:JSON.stringify({
            requestType:"PASSWORD_RESET",
            email:enteredEmail,
           idToken:localStorage.getItem("token")
        }),
        header: {
            "content-Type": "application/json",
          },
     })
     const transformedResponse= await response.json();
     if(response.ok){
       setpassword("Email Sent successfully"); 
       navigate("/login");
     }else{
        const errormessage="Authentication failed";
        if(transformedResponse.error.message){
            errormessage=transformedResponse.error.message;
        }
     }
    }catch(err){
        alert(err.message);
    }
 }
    return (<div className="container py-5 text-center">
        <div  className="row py-5 my-5 bg-secondary" style={{width:'30%' ,margin :'0 auto'}}> 
         <h2> EXPENSE TRACKER</h2> 
            <form>
               <label className="py-3">Enter the Email which we have register</label>
               <p>{password}</p>
               <input  ref={emailinputRef} style={{width:'100%'}} className="px-1 d-block my-3" type="email"  placeholder="Email"></input> 
               <button  onClick={sendForgetLink}  style={{margin:'10px 0',background:'red',padding:'5px 20px', color:'white',border:'0',borderRadius:'5px'}} >Send link</button>
            </form>
        </div>
    </div>
    )
}
export default ForgetPassword;