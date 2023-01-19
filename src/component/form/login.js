import React,{useRef,useState} from "react";
import { useNavigate ,Navigate} from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebase"




 const LoginPage=()=>{
  const [error,setError]=useState(false);

   const navigate=useNavigate();
   const enteredemailref=useRef();
   const enteredpasswordref=useRef();
   
   const loginHandler= (event)=>{
    event.preventDefault();
    const enterdemail=enteredemailref.current.value;
    const enteredpassword=enteredpasswordref.current.value;

    if(!enterdemail.includes('@') || enteredpassword.length<6){
      setError(true);
      return ;
    }
    setError(false);
   signInWithEmailAndPassword(auth,enterdemail,enteredpassword).
   then(async(res)=>{
     const user=res.user;
   
      navigate('/');
    
   }).catch((err)=>{
   alert(err.message)
   })
 
}
 
 
 const signuphandler=()=>{
   navigate("/signup");
 }



     return (<div> 
      <div className="container  bg-light text-center" style={{padding:'100px 0'}}>
        <div className="row  " style={{width:'25%' ,margin:'0 auto' ,background:'white'}}>
             <h4 style={{padding:'20px 0'}}>Login</h4>
             {error && <p>please fill all field</p>}
             <form onSubmit={loginHandler}>
             <div >
                <input ref={enteredemailref} className="my-3 px-3 py-2" style={{background:'black' ,  color:'white',borderRadius:'20px',border:'0'}} type="email" placeholder="Email"></input>
             </div>
             <div>
                <input ref={enteredpasswordref} className="my-3 px-3 py-2"  style={{background:'black' ,borderRadius:'20px',color:'white',border:'0'}}type="password" placeholder="Password"></input>
             </div>
             <div>
                <button   className="bg-primary  p-1" style={{width:'80%', margin:'0 auto', border:'0',borderRadius:'20px'}}>Login</button>
                <p  className="py-1" style={{color:'blue', textDecoration:'underline'}}>Forget Password</p>
             </div>
            </form>
        </div>
     <div>
        <button onClick={signuphandler} style={{background:'skyblue',border:'0',padding:'10px 30px',margin:'20px 0'}}>Dont have an account? sign up</button>
     </div>
     </div>
     </div>);
 
}
export default LoginPage;