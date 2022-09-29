import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MoviePoster from './Components/Movieposter';
import NavigationBar from './Components/NavigationBar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NavigationBar />
    <MoviePoster name="Jurassic Park" image="jurassicpark.png"/>
  </React.StrictMode>
  //Component Goes Here
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
