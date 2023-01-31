 import React,{useRef} from "react";
import { Navigate ,useNavigate } from "react-router-dom";
const ForgetPassword=()=>{
 const emailinputRef=useRef();
 const navigate=useNavigate();
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
       navigate("/login")
     
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
        <div  className="row py-5" style={{width:'30%' ,margin :'0 auto'}}> 
         <h5> Sharpner </h5> 
            <form>
               <label className="py-3">Enter the Email which we have register</label>
               <input  ref={emailinputRef} style={{width:'100%'}} className="px-1 d-block my-3" type="email"  placeholder="Email"></input> 
               <button  onClick={sendForgetLink}  style={{background:'rgb(160,82,45)',color:'white',border:'0',borderRadius:'5px'}} >Send link</button>
            </form>
        </div>
           


    </div>)
}
export default ForgetPassword;