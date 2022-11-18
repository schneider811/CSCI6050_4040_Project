import React from "react";
import ReactDOM from 'react-dom/client';


function navigateTo( Component ) {
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Component/>
        </React.StrictMode>
    );
}

export default navigateTo