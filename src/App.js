// import logo from './logo.svg';
// import AuthContext from './component/context/Authcontext';
import React, { useContext } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Home from './component/home/home';
// import LoginPage from './component/form/login';
// import Signup from './component/form/signup';
// import Header from './component/header/header';
// import ContactDetails from './component/ExpenseDetail.js/contactDetail';
// import ForgetPassword from './component/forgetPassword/forgetPassword';
// import AddExpenses from './component/add Expenses/Addexpenses';

const Home = React.lazy(() => import('./component/home/home'));
const LoginPage = React.lazy(() => import('./component/form/login'));
const Signup = React.lazy(() => import('./component/home/home'));
const Header = React.lazy(() => import('./component/header/header'));
const ContactDetails = React.lazy(() => import('./component/ExpenseDetail.js/contactDetail'));
const ForgetPassword = React.lazy(() => import('./component/forgetPassword/forgetPassword'));
const AddExpenses = React.lazy(() => import('./component/add Expenses/Addexpenses'));



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
