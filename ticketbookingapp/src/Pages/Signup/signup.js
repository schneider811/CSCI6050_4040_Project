import React from "react"
import "../../style.css"
import "./signup.css"
import Panel from "../../Components/Panel";


/*
class SignUp extends React.Component {
    render() {
        return (
            <div>

                <div class = "input-box" id="signup">

                <div class="box-header">
                    <h2> Signup</h2>
                </div>


                <form>
                    <label for="email"> Email: *</label><br/>
                    <input type="text" id="email" name="email"/><br/>
                    <label for="fname">First name: *</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lname">Last name: *</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>

                    <label for="birthday">Birthday: *</label> <br/>
                    <input type="date" id="birthday" name="birthday"/><br/>

                    <label for="pswd">Password: *</label><br/>
                    <input type="password" id="pswd" name="pswd"/><br/>

                    <input type="radio" id="terms" name="terms"/>
                    <label for="terms"> I agree to the terms and conditions *</label> <br/>

                    <input type="radio" id="proms" name="proms"/>
                    <label for="proms"> Subscribe to the email list for promotions</label>

                    <p>* indicates that the field is requried when creating an account</p>

                <form/>

                <button> Submit</button>
                </div>
                <div/>
                <div class = "input-box" id="login">
                    <div class = "box-header">
                        <h2> Login</h2>
                    </div>
                    
                    <form/>
                        <label for="email"> Email: *</label><br/>
                        <input type="text" id="email" name="email"/><br/>

                        <label for="pswd">Password: *</label><br/>
                        <input type="password" id="pswd" name="pswd"/><br/>

                        <input type="radio" id="terms" name="terms"/>
                        <label for="sign"> Keep me signed in</label> <br/>
                        <p>* indicates that the field is requried when logging in</p>
                    <form/>

                    <button> Submit</button>

                <div/>
                </div>

                
            </div>
        );
    }
}
*/

class SignUp extends React.Component {
    render() {
        return (
            <Panel></Panel>
        );
    }
}


export default SignUp