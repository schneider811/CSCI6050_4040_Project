import React from "react";
import ReactDOM from 'react-dom/client';
import NavigationBar from "../Components/NavigationBar";


function navigateTo( Component ) {
   let root = ReactDOM.hydrateRoot(document.getElementById('root'));
    root.render(
        
        <React.StrictMode>
            <NavigationBar status={2}></NavigationBar>
            <Component/>
        </React.StrictMode>
    );
}

export default navigateTo