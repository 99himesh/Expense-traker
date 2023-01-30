import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './component/context/Contextprovider';
import { BrowserRouter } from 'react-router-dom';
import ExpenseProvider from './component/context/ExpenseProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider>
    <ExpenseProvider>
            <React.StrictMode>
      <BrowserRouter>
            <App />
    </BrowserRouter>
          
      </React.StrictMode>
      </ExpenseProvider>

    </AuthProvider>    
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
