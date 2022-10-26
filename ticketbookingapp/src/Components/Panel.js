import $ from 'jquery';
import React from "react";
import Axios from 'axios'
import './Panel.css'

var emailReg;
var firstnameReg;
var lastnameReg;
var passwordReg;
var birthdateReg;

function Panel() {

    $(document).ready(function(){
        $(".bottom-right").hide();
        $(".right").css("background", "#BA1313");
    
        $(".right").click(function(){
            $(".bottom-left").hide();
            $(".bottom-right").show();
            $(".left").css("background", "#BA1313");
            $(".right").css("background", "#7C0C0C");
        });
    
        $(".left").click(function(){
            $(".bottom-left").show();
            $(".bottom-right").hide();
            $(".left").css("background", "#7C0C0C");
            $(".right").css("background", "#BA1313");
        });

        
        $(".submitReg").click(function(e) {
            e.preventDefault();
        });
    
    });

    var testText = "";
    

    // const register = () => {

    //     console.log("Potatos");
    //     const response = await Axios.put(
    //         "http://localhost:3001/register", 
    //         {
    //             email: emailReg,
    //             first_name: firstnameReg,
    //             last_name: lastnameReg,
    //             password: passwordReg,
    //             birthDate: birthdateReg
    //         }
    //     );
    //                 // }, 
    //     // (error) => {
    //     //     console.log("Error: ");
    //     //     console.log(error);


    // };

    return(
        
        <div class = "container">

            <div id = "error"> </div>

            <div class = "left"> Sign Up</div>
            <div class = "right"> Login In</div>

            <div class = "bottom-left">
                
                <form action =  "/" method = "GET" id = "form">
                    <label for="email"> Email: *</label><br/>

                    <input type="text" id="email" name="email"
                        onChange = {(e) => {
                            emailReg = e.target.value;
                        }}
                    />{testText}<br/>

                    <input type="text" id="email" name="email" required/><br/>


                    <label for="fname">First name: *</label><br/>

                    <input type="text" id="fname" name="fname"
                        onChange = {(e) => {
                            firstnameReg = e.target.value;
                        }}
                    /><br/>

                    <label for="lname">Last name: *</label><br/>
                    <input type="text" id="lname" name="lname"
                        onChange = {(e) => {
                            lastnameReg = e.target.value;
                        }}
                    /><br/>

                    <label for="birthday">Birthday: *</label> <br/>
                    <input type="date" id="birthday" name="birthday"
                        onChange = {(e) => {
                            birthdateReg = e.target.value;
                        }}
                    /><br/>

                    <label for="pswd">Password: *</label><br/>
                    <input type="password" id="pswd" name="pswd"
                        onChange = {(e) => {
                            passwordReg = e.target.value;
                        }}
                    /><br/>

                    <input type="checkbox" id="terms" name="terms" required/>
                    <label for="terms"> I agree to the terms and conditions *</label> <br/>

                    <input type="checkbox" id="proms" name="proms"/>
                    <label for="proms"> Subscribe to the email list for promotions</label>

                    <p>* indicates that the field is required when creating an account</p>

                    <button onClick={registerUser} class="submitReg"> Submit </button>

                </form>
                

            </div>

            <div class = "bottom-right">
                
                <form action = "/" method = "GET">
                    <label for="email"> Email: *</label><br/>
                    <input type="text" id="email" name="email" required/><br/>

                    <label for="pswd">Password: *</label><br/>
                    <input type="password" id="pswd" name="pswd" required/><br/>

                    <input type="checkbox" id="terms" name="terms"/>
                    <label for="sign"> Keep me signed in</label> <br/>
                    <p>* indicates that the field is requried when logging in</p>

                    <button type = "submit"> Submit</button>
                </form>


            </div>

            

        </div>

        
    );
}


async function registerUser() {
    const newUser = {
        email: emailReg,
        first_name: firstnameReg,
        last_name: lastnameReg,
        password: passwordReg,
        birthDate: birthdateReg
    }

    const response = await Axios.post("http://localhost:3001/register", newUser);
    const confirm = await Axios.post("http://localhost:3001/email", newUser);


    
}


export default Panel