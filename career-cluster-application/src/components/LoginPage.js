import React from 'react';
import TopLeftLogo from './pageTemplate/TopLeftLogo';
import BottomRectangle from './pageTemplate/BottomRectangle';
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div>
            <TopLeftLogo/>
            <div id="form">
                <form>
                    <label for="usernameField"><strong>Username</strong></label><br></br>
                    <input type="text" class="field" placeholder='Input username here'/><br></br>
                    <label for="passwordField"><strong>Password</strong></label><br></br>
                    <input type="text" id="bottomField" placeholder='Input password here'/><br></br>
                    <p>Forgot Password?</p>
                    <button type="submit" id="loginButton">Login</button>
                </form>
            </div>
            <BottomRectangle/>
        </div>
    )
};


export default LoginPage;