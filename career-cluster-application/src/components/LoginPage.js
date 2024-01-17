import React from 'react';
import TopLeftLogo from './pageTemplate/TopLeftLogo';
import BottomRectangle from './pageTemplate/BottomRectangle';
import './LoginPage.css'

import express from 'express';
import mysql from 'mysql2';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const app = express();

const db = mysql.createConnection({
    host: 'placeholder_host',
    user: 'placeholder_user',
    password: 'placeholder_password',
    database: 'my_vaughnk3_clusters',
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("Connected to MySQL!")
})


const LoginPage = () => {
    return (
        <div id="page">
            <div id="topbar">
            <TopLeftLogo/>
        </div>
        <div id="content">
            <div id="form">
                <form>
                    <label for="usernameField"><strong>Username</strong></label><br></br>
                    <input type="text" class="field" placeholder='Input username here'/><br></br>
                    <label for="passwordField"><strong>Password</strong></label><br></br>
                    <input type="text" id="bottomField" placeholder='Input password here'/><br></br>
                    <p>Forgot Password?</p>
                    <a href="" id="login-button">Login</a>
                </form>
            </div>
        </div>

        <BottomRectangle/>
        </div>
    )
};


export default LoginPage;