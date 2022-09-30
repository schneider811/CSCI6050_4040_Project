import React from "react";
import "./admin.css";


class AdminView extends React.Component {
    render() {
        return <div id="AdminView">
            <h1> Admin Control Center</h1>
            <div class="input-box" id="edit-movies">
                <div class="box-header">
                    <h2> Edit Movies</h2>
                </div>

                <form>
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
                </form>
                <br></br>
                <button> Submit</button>
            </div>
            <div class = "input-box" id="edit-prom">
                <div class = "box-header">
                    <h2> Edit Promotions </h2>
                </div>
                
                <form>
                    <label for="prom"> Promotion Name:</label><br/>
                    <input type="text" id="prom-name" name="prom-name"/><br/>

                    <label for="discount">Discount Rate:</label><br/>
                    <input type="number" id="discount" name="discount"/><br/>

                    <label for="prom-start">Promotion Start Date:</label> <br/>
                    <input type="date" id="prom-start" name="prom-start"/><br/>

                    <label for="prom-end">Promotion End Date:</label> <br/>
                    <input type="date" id="prom-end" name="prom-end"/><br/>
                </form>
                <br/>

                <button> Submit</button>

            </div>
        </div>
    }
}

export default AdminView

