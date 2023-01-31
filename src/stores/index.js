import { configureStore } from "@reduxjs/toolkit";
import  Authreducer from "./AuthSlice"
import Expensereducer from "./ExpenseSlice"

const store=configureStore({
    reducer:{
      auth:Authreducer,
      expense:Expensereducer
    }
});
export default store;
