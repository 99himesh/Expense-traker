import React,{useRef} from "react";
const AddExpenses=()=>{
    const moneyinputRef=useRef();
    const descriptioninputRef=useRef();
    const categaryinputRef=useRef();
    
    const submitExpenseHandler=(event)=>{
        event.preventDefault();
        const enteredMoney=moneyinputRef.current.value;
        const enteredDescription=descriptioninputRef.current.value;
        const enteredCategary=categaryinputRef.current.value;

        localStorage.setItem("money",enteredMoney);
        localStorage.setItem("description",enteredDescription);
        localStorage.setItem("categary",enteredCategary);
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
            <div className="row py-5">
           <div> 
           <p>Spent Money :- {localStorage.getItem("money")}</p>
           <p> Description :-{localStorage.getItem("description")}</p>
           <p> categary:- {localStorage.getItem("categary")}</p>
          </div>
          <div>
            <button   >Delete</button>
            <button  className="mx-3" >Edit</button>
          </div>
            </div>
        </div>
     )

}
export default AddExpenses;