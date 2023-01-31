import { createSlice } from "@reduxjs/toolkit";

const initialState={expense:[]};

 const ExpenseSlice=  createSlice({
   name:'AddExpense',
   initialState,
   reducers:{
    addExpense(state,action){
         state.expense=[...state.expense,action.payload.exp];   
    },
    replace(state,action){
     
     state.expense=action.payload.List
    }
   }
})

export const ExpenseAction=ExpenseSlice.actions;
export default ExpenseSlice.reducer;