import $ from 'jquery';
import React from "react";
import './ProfilePanel.css'





function ProfilePanel() {

    // Temporary input variables
    var tempFNameText = "Manal";
    var tempLNameText = "Patel";
    var tempEmailText = "manal1410@gmail.com";
    var tempBDayText = "09-22-2010";
    var tempPswdText = "genericPD123";
    var tempPhone = "No phone number on account"
    var tempProm = "Enabled"
    var tempAddress = "No billing address on account"

    // Menu Transition
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

    // Credit Card carousel
    document.querySelectorAll(".carousel").forEach(carousel => {
        const items = carousel.querySelectorAll(".carousel_card");
        const buttonsHtml = Array.from(items, () => {
            return `<span class = "carousel_btn"></span>`;
        });

        console.log(buttonsHtml);

        carousel.insertAdjacentHTML("beforeend", `
            '<div class = "carousel_nav">
                ${buttonsHtml.join("")}
            </div>
        `);

        const buttons = carousel.querySelectorAll(".carousel_btn");
        
        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                items.forEach(item => item.classList.remove("carousel_card--selected"));
                buttons.forEach(button => button.classList.remove("carousel_btn--selected"));
            });
        });
    });
    
    // HTML code
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

                    <label for = "birthdate"> Birthday: * </label><br/>
                    <label for = "birthdate-info"/> {tempBDayText} <br/>

                    <label for="password">Current Password: *</label><br/>
                    <input type="password" id="currpswd" name="pswd"/><br/>
                    <label for="pswdtxt">New Password: *</label><br/>
                    <input type="password" id="newpswd" name="pswd"/><br/>

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

                    <label for="phone">Phone Number: </label>
                    <label id = "phoneDB"/> {tempPhone}<br/>
                    
                    <label for="prom">Promotions: </label>
                    <label id = "promDB"/> {tempProm}<br/>

                    <button class="edit-profile-btn"> Edit Profile </button>
                </form>
            </div>

            <div class ="payment-info">

                <div class = "billing-info">

                    <label for="billing-add">Billing Address: </label>
                    <button class = "edit-bill-btn"> Edit Billing Address</button>
                    <p>{tempAddress}</p> 


                </div>

                <div class = "card-info">
                    <label for="pay-card">Current Cards: </label>
                    <button> Add New Card</button>
                    <div class = "carousel">
                        <div class = "carousel_card carousel_card--selected"> 
                            Visa ****4569
                            04/25
                        </div>

                        <div class = "carousel_nav">
                            <span class = "carousel_btn carousel_btn--selected"></span>
                            <span class = "carousel_btn"></span>
                        </div>
                    </div>

     

                









                </div>
               
             
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