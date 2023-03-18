import React,{ useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import AddExpenses from "../add Expenses/Addexpenses";
// import AuthContext from "../context/Authcontext";



const ContactDetails = () => {
    const enteredNameRef=useRef();
    const enteredPhotoRef=useRef();
    const [verify ,setVerify ]=useState(false);
    const [update,setUpdae]=useState();
    const navigate=useNavigate();

    

    const getData=async()=>{
        try {
            const response = await fetch(
              "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDOBKsBkoQ9LTBCmp3LobdP7sg6C7JCzRM",
              {
                method: "POST",
                body: JSON.stringify({
                   idToken:localStorage.getItem("token"),
                 
                }),
                header: {
                  "content-Type": "application/json",
                },
              });
              const transformedResponse = await response.json();
              debugger
              console.log(response);
              console.log(transformedResponse);
              if (response.ok) {
                 if(transformedResponse.users[0].emailVerified){
                    setVerify(true);
                 }else{
                    setVerify(false);
                 }
              } else {
                  let errorMessage = 'Authentication Failed!';
                  if (transformedResponse.error.message) {
                      errorMessage = transformedResponse.error.message;
                  }
                  throw new Error(errorMessage);
              }
          } catch (err) {
              alert(err.message);
          }
      
        
    }

   useEffect(()=>{
    
    getData();
    
   })
   
   
    useEffect(()=>{
        enteredNameRef.current.value=localStorage.getItem("dn");
     })


 const updateDetails= async()=>{
    
   const enteredName=enteredNameRef.current.value;
   const enteredPhoto=enteredPhotoRef.current.value;


    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDOBKsBkoQ9LTBCmp3LobdP7sg6C7JCzRM",
        {
          method: "POST",
          body: JSON.stringify({
             idToken:localStorage.getItem("token"),
             returnSecureToken:true,
             displayName:enteredName,
             photoUrl:enteredPhoto
          }),
          header: {
            "content-Type": "application/json",
          },
        });
        const transformedResponse = await response.json();
        if (response.ok) {

         setUpdae("Update successfully");

        }
       
         else {
            let errorMessage = 'Authentication Failed!';
            if (transformedResponse.error.message) {
                errorMessage = transformedResponse.error.message;
            }
            throw new Error(errorMessage);
        }
        
    } catch (err) {
        alert(err.message);
    }

  
  };


 
 const verifyEmail=async()=>{
    
    try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDOBKsBkoQ9LTBCmp3LobdP7sg6C7JCzRM",
          {
            method: "POST",
            body: JSON.stringify({
               idToken:localStorage.getItem("token"),
               requestType:"VERIFY_EMAIL"
            }),
            header: {
              "content-Type": "application/json",
            },
          });
          
          const transformedResponse = await response.json();
          debugger
          console.log(response);
          console.log(transformedResponse);    
          if (response.ok) {
         
          } else {
              let errorMessage = 'Authentication Failed!';
              if (transformedResponse.error.message) {
                  errorMessage = transformedResponse.error.message;
              }
              throw new Error(errorMessage);
          }
      } catch (err) {
          alert(err.message);
      }
 }
 const AddExpenses=()=>{
    navigate("/addexpenses")
 }


    return (
        <div className="container-fluid ">
            <div className="row">
                <div className=" col-4">
                    <h6 >winners never quite,Quitters never win</h6>
                </div>
                <div className="col-4"></div>
                <div className="col-4 text-start " >
                    <p style={{background:' rgb(196, 164, 132)',padding:'4px',borderRadius:'10px'}} >Your profile is <strong>64%</strong> completed.A complete profile has higher chance of loading a job <span style={{color:'blue'}}>complete now</span></p>
                  
                </div>
                <hr />
            </div>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-10 ">
                    <div>
                        <h5 className="text-start" style={{ display: 'inline-block' }}>Contact Details </h5>
                       
                    </div>
                    <div>
                        <form className="py-5">
                            
                            <label style={{ fontWeight: "bold", padding: '0 20px' }} >Full Name:</label>
                            <input style={{ width:'30%'}} ref={enteredNameRef} className="px-1 py-0"></input>
                            <label style={{ fontWeight: "bold", padding: '0 20px' }} >Profile photo URL:</label>
                            <input  style={{ width:'30%'}} ref={enteredPhotoRef} className="px-1 py-0"></input>
                        </form>
                    </div>
                    <div className="ms-5 text-center" style={{color:'green'}}>{update}</div>
                    <div>
                        <button onClick={updateDetails} style={{background:'rgb(160,82,45)',color:'white',border:'0',borderRadius:'5px'}} >Update</button>
                       { !verify && <button style={{background:'rgb(160,82,45)',color:'white',border:'0',borderRadius:'5px'}}  onClick={verifyEmail} className="mx-5">verify</button>}
                       <button style={{background:'rgb(160,82,45)',color:'white',border:'0',borderRadius:'5px'}}  className="float-end" onClick={AddExpenses} >Add Expenses</button>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default ContactDetails;
