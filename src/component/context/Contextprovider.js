import React,{useState} from "react";
import AuthContext from "./Authcontext";
 
 const AuthContextProvider=(props)=>{
    let initialtoken=localStorage.getItem('token');
    const[token,setToken]=useState(initialtoken);
  
    const userISLoggedIn=!!token;
  
    const loginHandler=(token)=>{
      setToken(token);
      localStorage.setItem('token',token)
    }
    const logoutHandler=  ()=>{
      setToken(null);
      localStorage.removeItem('token');
    }
  
    const contextValue={
      token:token,
      isLoggedIn:userISLoggedIn,
      login:loginHandler,
      logout:logoutHandler
    }
  
      return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
  }
   export default AuthContextProvider;
  