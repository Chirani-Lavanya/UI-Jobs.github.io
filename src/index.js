import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import SignUp from './Screens/SignUpPage';
import Register from'./Screens/RegisterPage';
import reportWebVitals from './reportWebVitals';
import SideBar from './Components/SideMenu';
import JobPosting from './Screens/JobPostingPage';
import ApplyJob from './Screens/ApplyJob';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApplyJob/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
