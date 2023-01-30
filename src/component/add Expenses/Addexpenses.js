// import { async } from "@firebase/util";
// import React,{useRef,useEffect, useContext, useState} from "react";
// import AuthContext from "../context/Authcontext";
// import ExpenseContext from "../context/expensecontext";
// const AddExpenses=()=>{
//   const ctx=useContext(AuthContext)
//   // const [expense,setExpense]= useState([])

//   const [keys,setKeys]=useState([]);
//     const moneyinputRef=useRef();
//     const descriptioninputRef=useRef();
//     const categaryinputRef=useRef();
//     const expCtx=useContext(ExpenseContext);
  
//  const readExpense= async()=>{
//     try {
//         const response = await fetch(
//           "https://api-calls-fa398-default-rtdb.firebaseio.com/.json",
//           {
//             method: "GET",

//             header: {
//               "content-Type": "application/json",
//             },
//           });
          
//           const transformedResponse = await response.json();
//           // debugger
//           // console.log(response);
//           // console.log(transformedResponse);
//           if (response.ok) {
//             let Arr=[];
//             for(var key in transformedResponse) {
//               Arr.push(transformedResponse[key]);
//             }
//        debugger
//       console.log(Arr);
//     //    let expenseArr=[];
//     //    Arr.forEach((itm) => {
//     //      const exp= {
//     //       id:itm.id
//     //      }
//     //      console.log(exp);
//     // });
//     for (let value of Object.values(Arr)) {console.log( value) }
//     debugger
//       //  for(var key in Arr) {
//       //   Arr.push(transformedResponse[key]);
//       //  }
//         const userExpense= Arr.filter((itm)=> ctx.userId===itm.uID )
//         const objKeys=Object.keys(transformedResponse);
//         // setExpense(userExpense);
//         setKeys(objKeys);
             
//           } else {
//               let errorMessage = 'Authentication Failed!';
//               if (transformedResponse.error.message) {
//                   errorMessage = transformedResponse.error.message;
//               }
//               throw new Error(errorMessage);
//           }
//       } catch (err) {
//           alert(err.message);
//       }
//  }
//     // useEffect(()=>{
//     //     readExpense();
//     // })
        
//   const deleteExpenseHandler=async(id)=>{
         
//         try{
//           const response= await fetch(`https://api-calls-fa398-default-rtdb.firebaseio.com/addexpense/-${keys}.json`,{
//             method:"DELETE",
//             // header:{
//             //   "content-Type": "application/json",
//             // }
//           })
//           // const transformdataResponse=await response.json();
//           // debugger
//           console.log('id');
//           // console.log(transformdataResponse);
//           // console.log(response);
//           // if(response.ok){

//           // }
//           // }else{
//           //  let errorMessage="Authentication failed";
//           //   if(transformdataResponse.error.message){
//           //     errorMessage=transformdataResponse.error.message;

//           //   }
//           // }
        
//         }catch(err){
//           alert(err.message);

//         }
//   }

//   const editExpenseHandler=()=>{
//     // deleteExpenseHandler();
//     // moneyinputRef.current.value=enteredMoney;
    
//   }

//     const itemlist =expCtx.expense.map((itm)=>{
     
//       return (
//       <div >
//         <div> 
//         <p>Spent Money :-{itm.money} </p>
//         <p> Description :-{itm.description}</p>
//         <p> categary:- {itm.categary}</p>
//        </div>
//        <div>
//          <button onClick={deleteExpenseHandler.bind(null,itm.keys)}    >Delete</button>
//          <button onClick={editExpenseHandler}  className="mx-3" >Edit</button>
//        </div>
//     </div>
//       )
//      })


//      const postData=async(expenselist)=>{
//       debugger
//       console.log(expenselist);
//       console.log(ctx.userId);
//       try {
//         const response = await fetch(
//           `https://api-calls-fa398-default-rtdb.firebaseio.com/${ctx.userId}.json`,
//           {
//             method: "POST",
//             body: JSON.stringify({
//             expenselist
               
//             }),

//             header: {
//               "content-Type": "application/json",
//             },
//           });
//           debugger
          
          
          
//           const transformedResponse = await response.json();  
//           debugger 
//           console.log(keys);
//           console.log(response);
//           console.log(transformedResponse);
//           if (response.ok) {
         
//           } else {
//               let errorMessage = 'Authentication Failed!';
//               if (transformedResponse.error.message) {
//                   errorMessage = transformedResponse.error.message;
//               }
//               throw new Error(errorMessage);
//           }
//       } catch (err) {
//           alert(err.message);
//       }


//      }


    
//     const submitExpenseHandler=async(event)=>{
//         event.preventDefault();
//         const enteredMoney=moneyinputRef.current.value;
//         const enteredDescription=descriptioninputRef.current.value;
//         const enteredCategary=categaryinputRef.current.value;
//         const id=enteredMoney+enteredDescription;
//         const obj={
//           money:enteredMoney,
//           categary:enteredCategary,
//           description:enteredDescription
//         }
//         expCtx.addExpense(obj);
//         debugger
//        await postData(expCtx.expense);
       
//     } 
    

   



//      return (
//         <div className="container py-5">
//             <div className="row" >
//                 <form onSubmit={submitExpenseHandler}>
//                <input style={{width:'100%'}} ref={moneyinputRef} className="my-3" type="number" placeholder="monet Spent" ></input>
//                 <input  style={{width:'100%'}}  ref={descriptioninputRef}  className="my-3" type="text" placeholder="description"></input>
//                 <select style={{width:'100%'}}  ref={categaryinputRef} className="my-3">
//                     <option>Food</option>
//                     <option>Petrol</option>
//                     <option>Salary</option>
//                 </select>
//                 <button style={{width:'100%'}} > Add Expense</button>
//                 </form>
            
                
//             </div>
//             <div className=" row"> {itemlist}</div>
          
//         </div>
//      )

// }
// export default AddExpenses;

import React, { useRef, useEffect, useContext, useState } from "react";
import AuthContext from "../context/Authcontext";
import ExpenseContext from "../context/expensecontext";
import axios from '../axios/axios';
const AddExpenses = () => {
  const ctx = useContext(AuthContext)
  const [expenseList, setExpenseList] = useState([])

  const moneyinputRef = useRef();
  const descriptioninputRef = useRef();
  const categaryinputRef = useRef();
  // const enteredMoney = moneyinputRef.current.value;
  // const enteredDescription = descriptioninputRef.current.value;
  // const enteredCategary = categaryinputRef.current.value;
  // const expCtx = useContext(ExpenseContext);

  const readExpense = async () => {
    const response = await axios.get(`/${ctx.userId}.json`)
    // debugger
    // console.log(response.data);
    const allExpenseArr = [];
    for (let key in response.data) {
      allExpenseArr.push({ ...response.data[key], key: key });
    }
    // console.log(allExpenseArr);
    setExpenseList(allExpenseArr);
    // debugger;
  }
  useEffect(() => {
    readExpense();
  }, [expenseList])

  const deleteExpenseHandler = async (key) => {
    debugger
    const response = await axios.delete(`/${ctx.userId}/${key}.json`);
    // console.log(response);
    const newList = expenseList.filter((itm) => itm.key !== key)
    console.log(expenseList);
    console.log(newList);
    setExpenseList(newList);

  }

  const editExpenseHandler = (id) => {
    // moneyinputRef.current.value="12";
    // descriptioninputRef.current.value="b";
    const exp=expenseList.filter((itm) =>{
           return itm.id==id  
          });
    
    moneyinputRef.current.value=exp[0].money;
    descriptioninputRef.current.value=exp[0].description;
    categaryinputRef.current.value=exp[0].categary;

    console.log(exp);
    deleteExpenseHandler(id);
   
  }

  const postData = async (expense) => {
    try {
      const response = await axios.post(`/${expense.uID}.json`, expense)
      // const transformedResponse = await response.json();
      console.log(response);
      // console.log(transformedResponse);
      if (response.statusText === "OK") {
        setExpenseList([...expenseList,expense])
        moneyinputRef.current.value="";
        // categaryinputRef.current.value="";
        descriptioninputRef.current.value="";
        console.log("Post Sucess");
      } else {
        // let errorMessage = 'Authentication Failed!';
        // if (transformedResponse.error.message) {
        //   errorMessage = transformedResponse.error.message;
        // }
        throw new Error("ERR");
      }
    } catch (err) {
      alert(err.message);
    }
  }



  const submitExpenseHandler = async (event) => {
    event.preventDefault();
    const enteredMoney = moneyinputRef.current.value;
    const enteredDescription = descriptioninputRef.current.value;
    const enteredCategary = categaryinputRef.current.value;
  
    const id = enteredMoney + enteredDescription;
    const obj = {
      id: id,
      uID: ctx.userId,
      money: enteredMoney,
      categary: enteredCategary,
      description: enteredDescription
    }
    postData(obj);
  }


  const itemlist = expenseList.map((itm) => {
    return (
      <div key={itm.id} >
        <div>
          <p>Spent Money :-{itm.money} </p>
          <p> Description :-{itm.description}</p>
          <p> categary:- {itm.categary}</p>
        </div>
        <div>
          <button onClick={deleteExpenseHandler.bind(null, itm.key)} >Delete</button>
          <button onClick={editExpenseHandler.bind(null, itm.id)} className="mx-3" >Edit</button>
        </div>
      </div>
    )
  })




  return (
    <div className="container py-5">
      <div className="row" >
        <form onSubmit={submitExpenseHandler}>
          <input  style={{ width: '100%' }} ref={moneyinputRef} className="my-3" type="number" placeholder="monet Spent" ></input>
          <input style={{ width: '100%' }} ref={descriptioninputRef} className="my-3" type="text" placeholder="description"></input>
          <select style={{ width: '100%' }} ref={categaryinputRef} className="my-3">
              <option>Food</option>
              <option>Petrol</option>
              <option>Salary</option>
          </select>
          <button   style={{ width: '100%' }} > Add Expense</button>
        </form>


      </div>
      <div className=" row"> {itemlist}</div>

    </div>
  )

}
export default AddExpenses;