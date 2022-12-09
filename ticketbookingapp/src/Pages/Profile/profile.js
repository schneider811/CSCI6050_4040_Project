import React from "react";
import "./profile.css"
import ProfilePanel from "./ProfilePanel";

class ProfileView extends React.Component {
    constructor( props ) {
        super(props);
    }
    render() {
        return <ProfilePanel></ProfilePanel>
    }
}

export default ProfileView