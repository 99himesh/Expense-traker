// import logo from './logo.svg';
import React, { useContext } from 'react';
import './App.css';
import Signup from './component/form/signup';
import LoginPage from './component/form/login';
import Header from './component/header/header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './component/home/home';
// import AuthContext from './component/context/Authcontext';
import ContactDetails from './component/ExpenseDetail.js/contactDetail';
import ForgetPassword from './component/forgetPassword/forgetPassword';
import AddExpenses from './component/add Expenses/Addexpenses';
import { useSelector } from 'react-redux';
function App() {

//  const ctx= useContext(AuthContext);
const ifLoggedIn=useSelector(state=>state.auth.loggedIn);
  return (
    <React.Fragment>
      <Header />
     
      <Routes>
        {ifLoggedIn && <Route path="/contact" element={<ContactDetails/>}></Route>}
       {ifLoggedIn && <Route exact path='/' element={<Home/>}></Route>}
       {  !ifLoggedIn && <Route exact path="/signup" element={<Signup/>}></Route>}
       { !ifLoggedIn && <Route path='*'  element={<Navigate to="signup" replace />} ></Route>}
        { !ifLoggedIn &&<Route path="/Login"  element={<LoginPage />}></Route>}
       { !ifLoggedIn && <Route path="/forget"  element={<ForgetPassword />}></Route>}
        { ifLoggedIn && <Route path="/addexpenses"  element={<AddExpenses />}></Route>
     }
      </Routes>




    </React.Fragment>)
}

export default App;
