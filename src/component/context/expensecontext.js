import React, { createContext } from "react";

const ExpenseContext=createContext(
    {
      expense:[],
      addExpense:()=>{},
      deleteExpense:()=>{},
      editExpense:()=>{}

    }
)
export default ExpenseContext;