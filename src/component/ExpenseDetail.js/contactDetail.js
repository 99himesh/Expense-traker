import React,{useEffect, useRef, useState} from "react";



const ContactDetails = () => {
    const enteredNameRef=useRef();
    const enteredPhotoRef=useRef();
    const [cancel ,setCancel ]=useState(false);
 
   
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

  
  };

 const cancelHandler=()=>{
    setCancel(true);
 }
 



    return (
        <div className="container-fluid py-5">
            <div className="row">
                <div className=" col-4">
                    <h6 >winners never quite,Quitters never win</h6>
                </div>
                <div className="col-4"></div>
                <div className="col-4 text-start">
                    <p  >Your profile is 64% completed.A complete profile has higher chance of loading a job complete now</p>

                </div>
                <hr />
            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-8 ">
                    <div>
                        <h4 className="text-start" style={{ display: 'inline-block' }}>Contact Details </h4>
                        <button onClick={cancelHandler}  className="float-end">cancel</button>
                    </div>
                    <div>
                        <form className="py-5">
                            <label style={{ fontWeight: "bold", padding: '0 20px' }} >Full Name</label>
                            <input ref={enteredNameRef} className="px-2 py-0"></input>
                            <label style={{ fontWeight: "bold", padding: '0 20px' }} >Profile photo URL</label>
                            <input ref={enteredPhotoRef} className="px-2 py-0"></input>
                        </form>
                    </div>
                    <div>
                        <button onClick={updateDetails} >Update</button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default ContactDetails;
