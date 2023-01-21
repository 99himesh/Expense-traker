import { async } from "@firebase/util";
import React,{useRef,useEffect, useContext, useState} from "react";
import AuthContext from "../context/Authcontext";
const AddExpenses=()=>{
  const ctx=useContext(AuthContext)
  const [expense,setExpense]= useState([])
    const moneyinputRef=useRef();
    const descriptioninputRef=useRef();
    const categaryinputRef=useRef();
  
 const readExpense= async()=>{
    try {
        const response = await fetch(
          "https://api-calls-fa398-default-rtdb.firebaseio.com/addexpense.json",
          {
            method: "GET",

            header: {
              "content-Type": "application/json",
            },
          });
          
          const transformedResponse = await response.json();
          
          if (response.ok) {
            let Arr=[];
            for(var key in transformedResponse) {
              Arr.push(transformedResponse[key]);
          }
         
        const userExpense= Arr.filter((itm)=> ctx.userId===itm.uID ) 
        debugger
        console.log(Arr);
        console.log(userExpense);
        setExpense(userExpense);
            
             
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
        readExpense();
    })
        
    const itemlist =expense.map((itm)=>{
      return (
      <div >
        <div> 
        <p>Spent Money :-{itm.money} </p>
        <p> Description :-{itm.description}</p>
        <p> categary:- {itm.categary}</p>
       </div>
       <div>
         <button   >Delete</button>
         <button  className="mx-3" >Edit</button>
       </div>
    </div>
      )
     })


    
    const submitExpenseHandler=async(event)=>{
        event.preventDefault();
        const enteredMoney=moneyinputRef.current.value;
        const enteredDescription=descriptioninputRef.current.value;
        const enteredCategary=categaryinputRef.current.value;
        try {
            const response = await fetch(
              "https://api-calls-fa398-default-rtdb.firebaseio.com/addexpense.json",
              {
                method: "POST",
                body: JSON.stringify({
                   uID:ctx.userId,
                   money:enteredMoney,
                   categary:enteredCategary,
                   description:enteredDescription
                   
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
   
   
   
   
       
   
       
    } 
    

   



     return (
        <div className="container py-5">
            <div className="row" >
                <form onSubmit={submitExpenseHandler}>
               <input style={{width:'100%'}} ref={moneyinputRef} className="my-3" type="number" placeholder="monet Spent" ></input>
                <input  style={{width:'100%'}}  ref={descriptioninputRef}  className="my-3" type="text" placeholder="description"></input>
                <select style={{width:'100%'}}  ref={categaryinputRef} className="my-3">
                    <option>Food</option>
                    <option>Petrol</option>
                    <option>Salary</option>
                </select>
                <button style={{width:'100%'}} > Add Expense</button>
                </form>
            
                
            </div>
            <div className=" row"> {itemlist}</div>
          
        </div>
     )

}
export default AddExpenses;