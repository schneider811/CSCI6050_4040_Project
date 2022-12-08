import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from '../Components/NavigationBar';
import Home from '../Pages/Home/Home';
import navigateTo from './RenderPage';



function renderSite(accountStatus)
{

    var root = ReactDOM.hydrateRoot(document.getElementById('root'));
    
    navigateTo(Home)
    return root;
}

export default renderSite