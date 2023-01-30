import { useState } from "react";
import AuthContext from "./Authcontext";
import ExpenseContext from "./expensecontext";

const ExpenseProvider = (props) => {
    const [expense,setExpense]=useState([]);
    const addExpense=(exp)=>{
        setExpense([...expense,exp])
    }
    const deleteExpense=()=>{

    }
    const editExpense=()=>{

    }
    const expenseContext={

        expense:expense,
        addExpense: addExpense,
        deleteExpense:deleteExpense,
        editExpense:editExpense
    }

    
    return (
        <ExpenseContext.Provider value={expenseContext}>
            {props.children}
        </ExpenseContext.Provider>
    );
}

export default ExpenseProvider;