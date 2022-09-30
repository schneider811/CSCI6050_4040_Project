import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
const rootHeader = ReactDOM.createRoot(document.getElementById("rootHeader"));
rootHeader.render(
  <React.StrictMode>
    <NavigationBar/>
  </React.StrictMode>
)
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default root