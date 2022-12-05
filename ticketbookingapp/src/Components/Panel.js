import $ from 'jquery';
import React from "react";
import Axios from 'axios';
import './Panel.css';


var emailReg;
var firstnameReg;
var lastnameReg;
var passwordReg;
var birthdateReg;
var phoneReg;

var emailLog;
var passwordLog;

class Panel extends React.Component {
    constructor( props ) {
        super(props);
        
    }
    
    //  $(document).ready(function(){
    //     $(".bottom-right").hide();
    //     $(".right").css("background", "#b1a37a");
    
    //     $(".right").click(function(){
    //         $(".bottom-left").hide();
    //         $(".bottom-right").show();
    //         $(".left").css("background", "#b1a37a");
    //         $(".right").css("background", "#ac944e");
    //     });
    
    //     $(".left").click(function(){
    //         $(".bottom-left").show();
    //         $(".bottom-right").hide();
    //         $(".left").css("background", "#ac944e");
    //         $(".right").css("background", "#b1a37a");
    //     });
    // });

   
    
    render() {
        return(
            
            <div class = "container">

                <div id = "error"> </div>

                <div class = "left"> Sign Up</div>
                <div class = "right"> Login</div>

                <div class = "register">
                    
                    <form id = "form">
                        <label for="email"> Email: *</label><br/>

                        <input required type="text" id="email" name="email"
                            onChange = {(e) => {
                                emailReg = e.target.value;
                            }}
                        /><br/>


                        <label for="fname">First name: *</label><br/>

                        <input required type="text" id="fname" name="fname"
                            onChange = {(e) => {
                                firstnameReg = e.target.value;
                            }}
                        /><br/>

                        <label for="lname">Last name: *</label><br/>
                        <input required type="text" id="lname" name="lname"
                            onChange = {(e) => {
                                lastnameReg = e.target.value;
                            }}
                        /><br/>

                        <label for="phone">Phone: *</label><br/>
                        <input required type="number" id="phoneNum" name="phoneNum"
                            onChange = {(e) => {
                                phoneReg = e.target.value;
                            }}
                        /><br/>

                        <label for="birthday">Birthday: *</label> <br/>
                        <input required type="date" id="birthday" name="birthday"
                            onChange = {(e) => {
                                birthdateReg = e.target.valueAsNumber;
                            }}
                        /><br/>

                        <label for="pswd">Password: *</label><br/>
                        <input required type="password" id="pswd" name="pswd"
                            onChange = {(e) => {
                                passwordReg = e.target.value;
                            }}
                        /><br/>

                        <input required type="checkbox" id="terms" name="terms" />
                        <label for="terms"> I agree to the terms and conditions *</label> <br/>

                        <input type="checkbox" id="proms" name="proms"/>
                        <label for="proms"> Subscribe to the email list for promotions</label>

                        <button onClick={registerUser} class="submitReg"> Submit </button>

                        <p>* indicates that the field is required when creating an account</p>

                        
                    </form>
                    

                </div>

                <div class = "login">
                    
                    <form >
                        <label for="email"> Email: *</label><br/>
                        <input type="text" id="email" name="email" required
                            onChange = {(e) => {
                                emailLog = e.target.value;
                            }}
                        /><br/>

                        <label for="pswd">Password: *</label><br/>
                        <input type="password" id="pswd" name="pswd" required
                            onChange = {(e) => {
                                passwordLog = e.target.value;
                            }}
                        /><br/>

                        <input type="checkbox" id="terms" name="terms"/>
                        <button onClick={loginUser} type = "submit"> Submit</button>
                        <label for="sign"> Keep me signed in</label> <br/>
                        <p>* indicates that the field is requried when logging in</p>

                    
                    </form>


                </div>

                

            </div>

            
        );
    }

}

async function registerUser() {
    const newUser = {
        email: emailReg,
        first_name: firstnameReg,
        last_name: lastnameReg,
        password: passwordReg,
        birthdate: birthdateReg,
        phone: phoneReg
    }

    

    const response = await Axios.post("http://localhost:3001/register", newUser);
    //const confirm = await Axios.post("http://localhost:3001/email", newUser);
    //const loginResponse = await Axios.post("http://localhost:3001/login", prevUser);
    
}

async function loginUser() {
    const loggingUser = {
        email: emailLog,
        password: passwordLog
    }
    
    const loginResponse = await Axios.post("http://localhost:3001/login", loggingUser);
    
    
}




export default Panel