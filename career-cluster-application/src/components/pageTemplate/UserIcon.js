import React from "react";
import './UserIcon.css';

const UserIcon = () => {
    return (
    <div>
        <img src={require('./UserIcon.png')} alt="User Icon" className="top-right-image"></img>
    </div>
    );
}

export default UserIcon;