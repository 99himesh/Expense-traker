// import logo from './logo.svg';
import React, { useContext } from 'react';
import './App.css';
import Signup from './component/form/signup';
import LoginPage from './component/form/login';
import Header from './component/header/header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/home/home';
import AuthContext from './component/context/Authcontext';
import ContactDetails from './component/ExpenseDetail.js/contactDetail';
import ForgetPassword from './component/forgetPassword/forgetPassword';
import AddExpenses from './component/add Expenses/Addexpenses';
function App() {

 const ctx= useContext(AuthContext);
  return (
    <React.Fragment>
      <Header />
     
      <Routes>
        {ctx.isLoggedIn && <Route path="/contact" element={<ContactDetails/>}></Route>}
       { ctx.isLoggedIn && <Route exact path='/' element={<Home/>}></Route>}
       {  !ctx.isLoggedIn && <Route exact path="/signup" element={<Signup/>}></Route>}
        <Route path='*'  element={<Navigate to="signup" replace />} ></Route>
        { !ctx.isLoggedIn &&<Route path="/Login"  element={<LoginPage />}></Route>}
       { ctx.isLoggedIn && <Route path="/forget"  element={<ForgetPassword />}></Route>}
        { ctx.isLoggedIn && <Route path="/addexpenses"  element={<AddExpenses />}></Route>
}
      </Routes>




    </React.Fragment>)
}

export default App;
