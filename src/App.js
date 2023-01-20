// import logo from './logo.svg';
import React, { useContext } from 'react';
import './App.css';
import Signup from './component/form/signup';
import LoginPage from './component/form/login';
import Header from './component/header/header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/home/home';
import AuthContext from './component/context/Authcontext';
import ContactDetails from './component/ExpenseDetail.js/contactDetail';
function App() {
 const ctx= useContext(AuthContext);
  return (
    <React.Fragment>
      <Header />
     
      <Routes>
        <Route path="/contact" element={<ContactDetails/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/Login"  element={<LoginPage />}></Route>
      </Routes>




    </React.Fragment>)
}

export default App;
