import $ from 'jquery';
import React from "react";
import './ProfilePanel.css'





function ProfilePanel() {

    // Temporary input variables
    var tempFNameText = "Manal";
    var tempLNameText = "Patel";
    var tempEmailText = "manal1410@gmail.com";
    var tempBDayText = "09-22-2010";
    var tempPswdText = "**************";
    var tempPhone = "No phone number on account"
    var tempProm = "Enabled"
    var tempAddress = "No billing address on account"

    // Menu Transition
    $(document).ready(function(){
        $(".payment-info").hide();
        $(".settings").hide();
        $(".edit-profile-info").hide();
        $(".edit-billing").hide();
        $(".profile-info").show();
        $(".pa-info").css("background", "#b1a37a");
        $(".set").css("background", "#b1a37a");
        $(".pf-info").css("background", "#ac944e");

        $(".pf-info").click(function(){
            $(".payment-info").hide();
            $(".settings").hide();
            $(".edit-profile-info").hide();
            $(".edit-billing").hide();
            $(".profile-info").show();
            $(".pa-info").css("background", "#b1a37a");
            $(".set").css("background", "#b1a37a");
            $(".pf-info").css("background", "#ac944e");
        });
    
        $(".pa-info").click(function(){
            $(".payment-info").show();
            $(".settings").hide();
            $(".profile-info").hide();
            $(".edit-billing").hide();
            $(".edit-profile-info").hide();
            $(".pa-info").css("background", "#ac944e");
            $(".set").css("background", "#b1a37a");
            $(".pf-info").css("background", "#b1a37a");
        });

        $(".set").click(function(){
            $(".payment-info").hide();
            $(".settings").show();
            $(".profile-info").hide();
            $(".edit-billing").hide();
            $(".edit-profile-info").hide();
            $(".pa-info").css("background", "#b1a37a");
            $(".set").css("background", "#ac944e");
            $(".pf-info").css("background", "#b1a37a");
        });

        $("#edit-profile-btn").click(function(e){
            e.preventDefault();
            $(".payment-info").hide();
            $(".settings").hide();
            $(".profile-info").hide();
            $(".edit-profile-info").show();
            $(".pa-info").css("background", "#b1a37a");
            $(".set").css("background", "#b1a37a");
            $(".pf-info").css("background", "#ac944e");
        });

        $("#edit-bill-btn").click(function(e){
            e.preventDefault();
            $(".payment-info").hide();
            $(".settings").hide();
            $(".profile-info").hide();
            $(".edit-billing").show();
            $(".pa-info").css("background", "#ac944e");
            $(".set").css("background", "#b1a37a");
            $(".pf-info").css("background", "#b1a37a");
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

                    <input type="checkbox" id="promsbox" name="proms" checked="checked"></input>
                    <label for="proms"> Subscribe to the email list for promotions</label>
                    <button id="confirm-profile-btn"> Confirm Changes </button>
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

                    <button id ="edit-profile-btn"> Edit Profile </button>
                </form>
            </div>

            <div class ="payment-info">

                <div class = "billing-info">
                    <label for="billing-add">Billing Address: </label>
                    <button id = "edit-bill-btn"> Edit Billing Address</button>
                    <p>{tempAddress}</p> 
                </div>

                <div class = "card-info">
                    <label for="pay-card">Current Cards: </label>
                    <button id = "add-card-btn"> Add New Card</button>

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


            <div class ="edit-billing">
                
                <form>

                    <label for="fname">First name: </label><br/>
                    <input type="text" id="fnamefield" name="fname" placeholder={tempFNameText}/><br/>
                    <label for="lnametxt">Last name: </label><br/>
                    <input type="text" id="lnamefield" name="lname" placeholder={tempLNameText}/><br/>

                    <label for="address">Address: </label><br/>
                    <input type="text" id="addfield" name="address"/><br/>

                    <label for="city">City: </label><br/>
                    <input type="text" id="cityfield" name="city"/><br/>

                    <select>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select><br/>

                    <label for="zipcode">Zipcode: </label><br/>
                    <input type="number" id="zipcode" name="zipcode"/><br/>


                    <button id="confirm-bill-btn"> Confirm Changes </button>
                </form>

            </div>





            
            <div class="settings">
                <p>Check this box to confirm that you would like to delete your account!</p><br></br>
                <form>
                    <label for="proms"> I would like to delete my ticket booking account</label>
                    <input type="checkbox" id="proms" name="proms"/><br></br>
                    <br></br>
                    <button id = "delete-btn"> Delete Account</button>
                </form>
            </div>

        </div>
    );
}

export default ProfilePanel