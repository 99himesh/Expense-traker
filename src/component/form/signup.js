import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React,{useState,useRef} from "react";
import {Navigate, useNavigate} from 'react-router-dom'
import LoginPage from "./login";
import {auth} from "../firebase/firebase"
const Signup = () => {
    const [isLogin,setisLogin]=useState(false);
    const [error,setError]=useState(false);
    const [created,setCreated]=useState(false);
    const emailinputref=useRef("");
    const passwordinputref=useRef("");
    const confirmpasswordref=useRef("");
    const navigate=useNavigate();
     
  const submitHandler= async(event)=>{
    event.preventDefault();
    setCreated(false);
    const enterdemail=emailinputref.current.value;
    const enteredpassword=passwordinputref.current.value;
    const enteredconfirmpassword=confirmpasswordref.current.value;

    if(!enterdemail.includes('@') || enteredpassword!=enteredconfirmpassword || enteredpassword.length<6){
      setError(true);
      return ;
    }
    setError(false);
   createUserWithEmailAndPassword(auth,enterdemail,enteredpassword,enteredconfirmpassword).
   then(async(res)=>{
     const user=res.user;
     await updateProfile(user,{
        displayName:enterdemail
     });
      navigate('/');
    
   }).catch((err)=>{
   alert(err.message)
   })
 
}

const logInHandler=()=>{
   navigate('/login')
}
    return (<div>
        <div className="container-fluid  bg-light text-center" style={{ padding: '100px 0' }}>
            <div className="row  bg-light" style={{ width: '25%', border: '1px solid black', margin: '0 auto' }}>
                <h4 className="py-3">Sign up</h4>
                 {error && <p style={{color:'red'}}>Signup Failed</p>}
                 {!error && <p style={{color:'green'}}>SuccessFull Signup</p>}

                <form onSubmit={submitHandler}>
                    <div>
                        <input className="p-2" ref={emailinputref} type="text" placeholder="Email" style={{ width: '90%', borderRadius: '5px', border: '0', margin: '10px' }} ></input>
                    </div>
                    <div>
                        <input className="p-2" ref={passwordinputref} type="password" placeholder="password" style={{ width: '90%', borderRadius: '5px', border: '0', margin: '10px ' }}  ></input>
                    </div>
                    <div>
                        <input className="p-2" ref={confirmpasswordref} type="passsword" placeholder="confirm password" style={{ width: '90%', borderRadius: '5px', border: '0', margin: '10px ' }} ></input>
                    </div>
                    <div>
                        <button className="bg-primary my-4 p-1" style={{ borderRadius: '20px', border: '0', color: 'white', width: '90%' }}>Sign up</button>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={logInHandler} className="my-3 py-2" style={{ width: '25%', background: 'blue', border: '0', background: '#ADD8E6' }}>Have an account? Login</button>
            </div>
        </div>
    </div>)



}

export default Signup;