
import React, { useRef, useEffect, useState } from "react";

import axios from '../axios/axios';
import { useDispatch, useSelector } from "react-redux";
import { ExpenseAction } from "../../stores/ExpenseSlice";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
const AddExpenses = () => {
  const [color,setcolor]=useState(false);
  const expenseLists=useSelector(state=>state.expense.expense)
  const dispatch= useDispatch();
  const userid=useSelector(state=>state.auth.userId)
  const moneyinputRef = useRef();
  const descriptioninputRef = useRef();
  const categaryinputRef = useRef();
 
  const readExpense = async () => {
    const response = await axios.get(`/${userid.userId}.json`)
    const allExpenseArr = [];
    for (let key in response.data) {
      allExpenseArr.push({ ...response.data[key], key: key });
    }
    dispatch(ExpenseAction.replace({List:allExpenseArr }))
  }
  useEffect(() => {
    readExpense();
    console.log("rend")
  },[readExpense])
  const deleteExpenseHandler = async (key) => {
    const response = await axios.delete(`/${userid.userId}/${key}.json`);
    console.log(key)
    const newList = expenseLists.filter((itm) => itm.key != key)
    console.log(expenseLists);
    console.log(newList);
     dispatch(ExpenseAction.replace({List:newList }));
  }
  const editExpenseHandler = (key) => {
    const exp=expenseLists.filter((itm) =>{
           return itm.key===key  
          });
    moneyinputRef.current.value=exp[0].money;
    descriptioninputRef.current.value=exp[0].description;
    categaryinputRef.current.value=exp[0].categary;
    console.log(exp[0].key);
    deleteExpenseHandler(exp[0].key);
  }
  const postData = async (expense) => {
    try {
      const response = await axios.post(`/${expense.uID}.json`, expense)
      if (response.statusText === "OK") {
        dispatch(ExpenseAction.addExpense({exp:expense}))
        moneyinputRef.current.value="";
        descriptioninputRef.current.value="";
        console.log("Post Sucess");
      } else {
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
      uID: userid.userId,
      money: enteredMoney,
      categary: enteredCategary,
      description: enteredDescription
    }
    postData(obj);
  }
  const changetheme=()=>{
    setcolor(prev=>!prev);
}
const headers = [
  {
      label: 'Category', key: 'categary'
  },
  {
      label: 'Title', key: 'description'
  },
  {
      label: 'Amount', key: 'money'
  }
]
const csvLink = {
  filename: 'Expenses.csv',
  headers: headers,
  data: expenseLists
}
let amount =0;
  const itemlist = expenseLists.map((itm) => {
     amount=amount+(+itm.money);
    return (
    <div className={color?"bg-secondary":"bg-light"}>
          
      <div key={itm.id} >
        <div className="container-fluid d-flex" style={{border:'1px solid red',padding:'5px ',margin:'10px 0'}} >
          <div className="row " style={{display:'inline-block',position:"relative"}}>
          <p>Spent Money :-{itm.money} </p>
          <p> Description :-{itm.description}</p>
          <p> categary:- {itm.categary}</p>
        </div>
        <div style={{display:'inline-block',position:"absolute",right:'10px'}}>
          <button style={{padding:'5px 12px',background:'black',display:'block',margin:'15px', color:'white',border:'0',borderRadius:'5px'}} onClick={deleteExpenseHandler.bind(null, itm.key)} >Delete</button>
          <button style={{padding:'5px 20px', background:'red',color:'white',border:'0',margin:'10px ',borderRadius:'5px'}} onClick={editExpenseHandler.bind(null, itm.key)} className="mx-3" >Edit</button>
        </div>
        </div>
      </div>
      </div>
    )
  })
  return (
    <div className="container-fluid  py-5 ">
      <div className="row" >
      <div style={{display:'flex',justifyContent:'end'}}>
        {amount>1000  && <Button onClick={changetheme}>Add PreMium</Button>}
        </div>
        <form onSubmit={submitExpenseHandler}>
          <label className="mx-2">Money spent:-</label>
          <input  style={{ width: '18%',border:'1px solid green',}} ref={moneyinputRef} className="my-3" type="number" placeholder="monet Spent" ></input>
        
          <label className="mx-2">Description:-</label>
          <input style={{ width: '18%' }} ref={descriptioninputRef} className="my-3" type="text" placeholder="description"></input>
        
          <label className="mx-2">Categary:-</label>
          <select style={{ width: '18%' }} ref={categaryinputRef} className="my-3">
              <option>Food</option>
              <option>Petrol</option>
              <option>Salary</option>
          </select>
          <button className="mx-2"   style={{ width: '18%',background:'rgb(160,82,45)',color:'white',border:'0',borderRadius:'5px' }} > Add Expense</button>
        </form>
      </div>
      <div className="row py-3"> {itemlist}  </div>
      {expenseLists.length==0 && <h2 className="text-center" style={{color:'red'}}>Please add Expense</h2>}
      <h2>Total Amount:-{amount}</h2>
    
      <div className="d-flex justify-content-center">
                <Button variant="outline-danger">
                    <CSVLink {...csvLink} className="text-decoration-none text-black">Download Expenses</CSVLink>
                </Button>
            </div>
    </div>
  )
}
export default AddExpenses;