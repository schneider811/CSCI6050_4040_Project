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
            
            <div class = "left"> Sign Up</div>
            <div class = "right"> Login In</div>

            <div class = "bottom-left">
                
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

                    <input type="checkbox" id="proms" name="proms"/>
                    <label for="proms"> Subscribe to the email list for promotions</label>

                    <p>* indicates that the field is requried when creating an account</p>

                    <button> Submit </button>

                </form>
                

            </div>

            <div class = "bottom-right">
                
                <form>
                    <label for="email"> Email: *</label><br/>
                    <input type="text" id="email" name="email"/><br/>

                    <label for="pswd">Password: *</label><br/>
                    <input type="password" id="pswd" name="pswd"/><br/>

                    <input type="radio" id="terms" name="terms"/>
                    <label for="sign"> Keep me signed in</label> <br/>
                    <p>* indicates that the field is requried when logging in</p>

                    <button> Submit</button>
                </form>


            </div>

            

        </div>

        
    );
}

export default Panel