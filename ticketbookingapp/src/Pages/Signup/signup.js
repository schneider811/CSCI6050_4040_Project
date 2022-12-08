import React from "react"
import "../../Components/Panel.css"
import Axios from 'axios';

var emailReg;
var firstnameReg;
var lastnameReg;
var passwordReg;
var birthdateReg;
var phoneReg;


class SignUp extends React.Component {
    render() {
        return (
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

export default SignUp