import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from '../Components/NavigationBar';
import Home from '../Pages/Home/Home';



function renderSite(accountStatus)
{
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
    return root;
}

export default renderSite