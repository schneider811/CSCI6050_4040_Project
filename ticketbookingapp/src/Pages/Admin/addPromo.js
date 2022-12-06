import React from "react";
import Axios from 'axios'
import '../../Components/Panel.css'
import '../../Components/AdminPanel.css'



var promoCode;
var promoStart;
var promoEnd;
var percentage;

class AddPromo extends React.Component {
    render() {
        return (
            <div class = "promo">
                
                   
                <form class = "admin">
                    <label for="prom"> Promotion Code:</label><br/>
                    <input type="text" id="prom-name" name="prom-name"
                    onChange = {(e) => {
                        promoCode = e.target.value;
                    }}/><br/>

                    <label for="discount">Discount Rate:</label><br/>
                    <input type="number" id="discount" name="discount"
                    onChange = {(e) => {
                        percentage = e.target.value;
                    }}/><br/>

                    <label for="prom-start">Promotion Start Date:</label> <br/>
                    <input type="date" id="prom-start" name="prom-start"
                    onChange = {(e) => {
                        promoStart = e.target.value;
                    }}/><br/>

                    <label for="prom-end">Promotion End Date:</label> <br/>
                    <input type="date" id="prom-end" name="prom-end"
                    onChange = {(e) => {
                        promoEnd = e.target.value;
                    }}/><br/>

                    <button id = "prom-button" onClick={addPromo}> Add Promo</button>
                </form>

            
            </div>
        )
    }
}

async function addPromo() {
    const newPromo = {
        promoCode: promoCode,
        startDate: promoStart,
        endDate: promoEnd,
        percentageOff: percentage,
    }
    
    const newPromoResponse = await Axios.post("http://localhost:3001/addPromo", newPromo);
    
}

export default AddPromo