import React from "react";
import NavigationBar from "../../Components/NavigationBar";
import Home from "../Home/Home";


class MainApp extends React.Component {
    constructor( props ) {
        super(props);
    }
    render() {
        return ( 
            <div>
                <NavigationBar></NavigationBar>
                <Home></Home>
            </div>
            
        )
    }
}

export default MainApp