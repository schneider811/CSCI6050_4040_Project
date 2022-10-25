import $ from 'jquery';
import React from "react";
import './ProfilePanel.css'





function ProfilePanel() {

    var tempFNameText = "Manal";
    var tempLNameText = "Patel";
    var tempEmailText = "manal1410@gmail.com";
    var tempBDayText = "09-22-2010";
    var tempPswdText = "genericPD123";

    $(document).ready(function(){
        $(".payment-info").hide();
        $(".settings").hide();
        $(".edit-profile-info").hide();
        $(".pa-info").css("background", "#BA1313");
        $(".set").css("background", "#BA1313");
        $(".pf-info").css("background", "#7C0C0C");

        $(".pf-info").click(function(){
            $(".payment-info").hide();
            $(".settings").hide();
            $(".edit-profile-info").hide();
            $(".profile-info").show();
            $(".pa-info").css("background", "#BA1313");
            $(".set").css("background", "#BA1313");
            $(".pf-info").css("background", "#7C0C0C");
        });
    
        $(".pa-info").click(function(){
            $(".payment-info").show();
            $(".settings").hide();
            $(".profile-info").hide();
            $(".edit-profile-info").hide();
            $(".pa-info").css("background", "#7C0C0C");
            $(".set").css("background", "#BA1313");
            $(".pf-info").css("background", "#BA1313");
        });

        $(".set").click(function(){
            $(".payment-info").hide();
            $(".settings").show();
            $(".profile-info").hide();
            $(".edit-profile-info").hide();
            $(".pa-info").css("background", "#BA1313");
            $(".set").css("background", "#7C0C0C");
            $(".pf-info").css("background", "#BA1313");
        });

        $(".edit-profile-btn").click(function(e){
            e.preventDefault();
            $(".payment-info").hide();
            $(".settings").hide();
            $(".profile-info").hide();
            $(".edit-profile-info").show();
            $(".pa-info").css("background", "#BA1313");
            $(".set").css("background", "#BA1313");
            $(".pf-info").css("background", "#7C0C0C");
        });
    
    });


    
    return(
        <div class = "container">
            
            <div class = "pf-info"> My Profile</div>
            <div class = "pa-info"> Payment Info</div>
            <div class = "set"> Settings</div>


            <div class ="edit-profile-info">
                
                <form>
                    <label for="email"> Email: *</label><br/>
                    <label for="email-info"/>{tempEmailText}<br/>

                    <label for="fname">First name: *</label><br/>
                    <input type="text" id="fnamefield" name="fname" placeholder={tempFNameText}/><br/>
                    <label for="lnametxt">Last name: *</label><br/>
                    <input type="text" id="lnamefield" name="lname" placeholder={tempLNameText}/><br/>

                    <label for="birthdaytxt">Birthday: *</label> <br/>
                    <input type="date" id="birthdayfield" name="birthday" placeholder={tempBDayText}/><br/>

                    <label for="pswdtxt">Password: *</label><br/>
                    <input type="password" id="pswdfield" name="pswd" placeholder={tempPswdText}/><br/>

                    <input type="checkbox" id="promsbox" name="proms"/>
                    <label for="proms"> Subscribe to the email list for promotions</label>
                    <button> Confirm Changes </button>
                </form>
            </div>

            <div class="profile-info">
                <form>
                <label for="email"> Email: </label>
                    <label for="email-info"/>{tempEmailText}<br/>

                    <label for="fname">First name: </label>
                    <label id="fnameDB" />{tempFNameText}<br/>
                    <label for="lnametxt">Last name: </label>
                    <label id="lnameDB" />{tempLNameText}<br/>

                    <label for="birthdaytxt">Birthday: </label> 
                    <label id="birthdayDB"/>{tempBDayText}<br/>

                    <label for="pswdtxt">Password: </label>
                    <label id="pswdDB"/>{tempPswdText}<br/>

                    <input type="checkbox" id="promsDB" name="proms"/>
                    <label for="proms"> Status of their promo subscriptions</label>
                    <button class="edit-profile-btn"> Edit Profile </button>
                </form>
            </div>

            <div class ="payment-info">
                <form>
                    <label for="email"> Email: *</label><br/>
                    <input type="text" id="email" name="email"/><br/>

                    <label for="pswd">Password: *</label><br/>
                    <input type="password" id="pswd" name="pswd"/><br/>

                    <input type="radio" id="terms" name="terms"/>
                    <label for="sign"> Keep me signed in</label> <br/>
                    <p>* indicates that the field is requried when logging in</p>

                    <button> Add New Card</button>
                </form>
            </div>
            
            <div class="settings">
            <p>Check this box to confirm that you would like to delete your account!</p><br></br>
            <form>
                <label for="proms"> I would like to delete my ticket booking account</label>
                <input type="checkbox" id="proms" name="proms"/><br></br>
                <br></br>
                <button> Delete Account</button>
            </form>
            </div>

        </div>
    );
}

export default ProfilePanel