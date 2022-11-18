import $ from 'jquery';
import React from "react";
import Axios from 'axios'
import './Panel.css'
import './AdminPanel.css'



function Panel() {

    $(document).ready(function(){
        $(".bottom-right").hide();
        $(".bottom-middle").hide();
        $(".middle").css("background", "#b1a37a");
        $(".right").css("background", "#b1a37a");
    
        $(".right").click(function(){
            $(".bottom-left").hide();
            $(".bottom-middle").hide();
            $(".bottom-right").show();
            $(".left").css("background", "#b1a37a");
            $(".middle").css("background", "#b1a37a");
            $(".right").css("background", "#ac944e");
        });
    
        $(".left").click(function(){
            $(".bottom-left").show();
            $(".bottom-right").hide();
            $(".bottom-middle").hide();
            $(".left").css("background", "#ac944e");
            $(".right").css("background", "#b1a37a");
            $(".middle").css("background", "#b1a37a");

        });

        $(".middle").click(function(){
            $(".bottom-middle").show();
            $(".bottom-left").hide();
            $(".bottom-right").hide();
            $(".middle").css("background", "#ac944e");
            $(".right").css("background", "#b1a37a");
            $(".left").css("background", "#b1a37a");
        });




        
        
    
    });

    return(
        
        <div class = "container">

            <div id = "error"> </div>

            <div class = "left" id = "left-admin"> Movie Controls</div>
            <div class = "middle" id = "middle-admin"> User Controls</div>
            <div class = "right" id = "left-admin"> Promotion Controls</div>


            <div class = "bottom-left">
                
                <label for="movie-actions"> Control Action:</label>
                <select>
                    <option value = "add">Add</option>
                    <option value = "edit">Edit</option>
                    <option value = "del">Delete</option>
                </select>

                        
                <form class = "admin">

                    <label for="add"> Add New Movie Name:</label>
                    <input type="text" id="add-name" name="add-name"/>
                    <br></br>

                    <label for="info"> Add New Movie Info:</label>
                    <input type="text" id="add-info" name="add-info"/>
                    <br></br>

                    <label for="link"> Add New Movie Trailer:</label>
                    <input type="url" id="add-url" name="add-url"/>
                    <br></br>

                    <label for="del">Delete Movie:</label>
                    <input type="text" id="del-movie" name="del-movie"/>
                    <br></br>

                    <button id = "movie-button"> Execute</button>
                </form>
                
            </div>

            <div class = "bottom-middle">

            </div>







            <div class = "bottom-right">
                
                   
                <form class = "admin">
                    <label for="prom"> Promotion Name:</label><br/>
                    <input type="text" id="prom-name" name="prom-name"/><br/>

                    <label for="discount">Discount Rate:</label><br/>
                    <input type="number" id="discount" name="discount"/><br/>

                    <label for="prom-start">Promotion Start Date:</label> <br/>
                    <input type="date" id="prom-start" name="prom-start"/><br/>

                    <label for="prom-end">Promotion End Date:</label> <br/>
                    <input type="date" id="prom-end" name="prom-end"/><br/>

                    <button id = "prom-button"> Execute</button>
                </form>

            
            </div>


            

        </div>

        
    );
}




export default Panel