import React from "react";
import "./Payment.css"


class PaymentProcess extends React.Component {
    render() {
        return  (
            <div class = "input-box" id="checkout-process">

                <div class="pay-header">
                    <h2> Billing Address</h2>
                </div>

                <div class = "add-pay">
                    <form>
                        <label for="email"> Address: *</label><br/>
                        <input type="text" id="email" name="email"/><br/>
                        <label for="fname">First name: *</label><br/>
                        <input type="text" id="fname" name="fname"/><br/>
                        <label for="lname">Last name: *</label><br/>
                        <input type="text" id="lname" name="lname"/><br/>

                        <label for="birthday">State: *</label> <br/>
                        <input type="text" id="lname" name="lname"/><br/>

                        <label for="birthday">City: *</label> <br/>
                        <input type="text" id="lname" name="lname"/><br/>

                        <label for="birthday">Zip Code: *</label> <br/>
                        <input type="text" id="lname" name="lname"/><br/>

                    </form>
                </div>
                


                <div class="pay-header">
                    <h2> Card Information</h2>
                </div>

                <div class = "credit-pay">
                    <form>
                        <label for="fname">Full name on Card: *</label><br/>
                        <input type="text" id="fname" name="fname"/><br/>
                        <label for="email"> Card Number: *</label><br/>
                        <input type="text" id="email" name="email"/><br/>
                        <label for="fname">Exp Date: *</label><br/>
                        <input type="text" id="fname" name="fname"/><br/>
                        <label for="lname">CVC Code *</label><br/>
                        <input type="text" id="lname" name="lname"/><br/>

                        <label for="birthday">Zip Code: *</label> <br/>
                        <input type="text" id="lname" name="lname"/><br/>


                    </form>
                </div>
                <button id = "pay-btn"> Submit</button>
            </div>
            

            
        );
    }
}

export default PaymentProcess



/**
 * <div class = "input-box" id="signup">

                <div class="box-header">
                    <h2> Signup</h2>
                </div>


                <form/>
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
 */