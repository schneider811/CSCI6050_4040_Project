import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from '../Components/NavigationBar';
import Home from '../Pages/Home/Home';
import navigateTo from './RenderPage';



function renderSite(accountStatus)
{

    var root = ReactDOM.createRoot(document.getElementById('root'));
    const rootHeader = ReactDOM.createRoot(document.getElementById("rootHeader"));
    rootHeader.render(
    <React.StrictMode>
        <NavigationBar status={accountStatus}/>
    </React.StrictMode>
    )
    navigateTo(Home)
    return root;
}

export default renderSite