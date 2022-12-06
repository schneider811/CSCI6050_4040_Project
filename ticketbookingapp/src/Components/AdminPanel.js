import $ from 'jquery';
import React from "react";
import './Panel.css'
import './AdminPanel.css'
import AddPromo from '../Pages/Admin/addPromo'
import AddMovie from '../Pages/Admin/addMovie'
import ScheduleMovie from '../Pages/Admin/scheduleMovie'


class AdminPanel extends React.Component {
    constructor ( props ) {
        super(props);
        this.state = {adminControlShown: 0};

        this.showAddMovie = this.showAddMovie.bind(this);
        this.showScheduleMovie = this.showScheduleMovie.bind(this);
        this.showAddPromo = this.showAddPromo.bind(this);
    }


    showAddMovie() {
        this.setState(() => ({
            adminControlShown: 0
        }));
    }
    showScheduleMovie() {
        this.setState(() => ({
            adminControlShown: 1
        }));
    }
    showAddPromo() {
        this.setState(() => ({
            adminControlShown: 2
        }));
    }
    
    render() {
        $(document).ready(function(){
            
            
        
            $(".right").click(function(){
                
                $(".left").css("background", "#b1a37a");
                $(".middle").css("background", "#b1a37a");
                $(".right").css("background", "#ac944e");
            });
        
            $(".left").click(function(){
                
                $(".left").css("background", "#ac944e");
                $(".right").css("background", "#b1a37a");
                $(".middle").css("background", "#b1a37a");

            });

            $(".middle").click(function(){
                
                $(".middle").css("background", "#ac944e");
                $(".right").css("background", "#b1a37a");
                $(".left").css("background", "#b1a37a");
            });
        });
            
        const panelValue = this.state.adminControlShown;
        let newPanel;
        if( panelValue === 0 )
        {
            newPanel = <AddMovie></AddMovie>
        }
        else if( panelValue === 1 )
        {
            newPanel = <ScheduleMovie></ScheduleMovie>
        }
        else if( panelValue === 2 )
        {
            newPanel = <AddPromo></AddPromo>
        }

        return(
            
            <div class = "container">

                <div id = "error"> </div>

                <div class = "left" id = "left-admin" onClick={this.showAddMovie}> Movie Controls</div>
                <div class = "middle" id = "middle-admin" onClick={this.showScheduleMovie}> Schedule Movie</div>
                <div class = "right" id = "left-admin" onClick={this.showAddPromo}> Promotion Controls</div>

                {newPanel}
                                

            </div>

            
        );
    }
}



export default AdminPanel