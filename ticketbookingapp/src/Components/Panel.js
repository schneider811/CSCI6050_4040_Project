import $ from 'jquery';
import React from "react";
import './Panel.css'




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
    
    });
    
 

    return(
        
        
        <div class = "container">

            <div id = "error"> </div>

            <div class = "left"> Sign Up</div>
            <div class = "right"> Login In</div>

            <div class = "bottom-left">
                
                <form action =  "/" method = "GET" id = "form">
                    <label for="email"> Email: *</label><br/>
                    <input type="text" id="email" name="email" required/><br/>

                    
                    <label for="fname">First name: *</label><br/>
                    <input type="text" id="fname" name="fname" required/><br/>
                    <label for="lname">Last name: *</label><br/>
                    <input type="text" id="lname" name="lname" required/><br/>

                    <label for="birthday">Birthday: *</label> <br/>
                    <input type="date" id="birthday" name="birthday" required/><br/>

                    <label for="pswd">Password: *</label><br/>
                    <input type="password" id="pswd" name="pswd" required/><br/>

                    <input type="checkbox" id="terms" name="terms" required/>
                    <label for="terms"> I agree to the terms and conditions *</label> <br/>

                    <input type="checkbox" id="proms" name="proms"/>
                    <label for="proms"> Subscribe to the email list for promotions</label>

                    <p>* indicates that the field is required when creating an account</p>

                    <button type = "submit"> Submit </button>

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

export default Panel