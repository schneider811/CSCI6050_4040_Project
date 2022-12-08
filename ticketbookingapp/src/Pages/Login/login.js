import React from "react";
import Axios from 'axios';
import "../../Components/Panel.css"

var emailLog;
var passwordLog;


class LogIn extends React.Component {
    render() {
        return (
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
        )
    }
}

async function loginUser() {
    const loggingUser = {
        email: emailLog,
        password: passwordLog
    }
    
    const loginResponse = await Axios.post("http://localhost:3001/login", loggingUser);
    
    
}

export default LogIn