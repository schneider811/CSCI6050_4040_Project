import React from "react";
import root from "../index";



function navigateTo( Component ) {
    
    root.render(
        <React.StrictMode>
            <Component/>
        </React.StrictMode>
    );
}

export default navigateTo