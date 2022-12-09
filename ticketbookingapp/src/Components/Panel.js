import $ from 'jquery';
import React from "react";
import Axios from 'axios';
import './Panel.css';
import SignUp from '../Pages/Signup/signup';
import LogIn from '../Pages/Login/login';

class Panel extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {isSignUp: true};

        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleLogInClick = this.handleLogInClick.bind(this);
    }
    
    handleSignUpClick() {
        this.setState( currentState => ({
            isSignUp: true
        }));
    }

    handleLogInClick() {
        this.setState( currentState => ({
            isSignUp: false
        }));
    }
   
    
    
    render() {
        $(document).ready(function(){
            
            
        
            $(".right").click(function(){
                
                $(".left").css("background", "#b1a37a");
                $(".right").css("background", "#ac944e");
            });
        
            $(".left").click(function(){
                
                $(".left").css("background", "#ac944e");
                $(".right").css("background", "#b1a37a");
            });
        });
        
        return(
            
            <div class = "container">
                
                
                <div id = "error"> </div>

                <div class = "left" onClick={this.handleSignUpClick}> Sign Up</div>
                <div class = "right"onClick={this.handleLogInClick}> Login</div>

                {this.state.isSignUp ? <SignUp/> : <LogIn/>}

                

            </div>

            
        );
    }

}





export default Panel