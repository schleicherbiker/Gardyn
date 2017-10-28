import React from "react";
import "./LoginButton.css";
//const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const session = require("express-session");

const LoginButton = (props) => { 
    
    const FACEBOOK_APP_ID = "124126441638491", 
          FACEBOOK_APP_SECRET = "c921158635f1c0a19fb5ed62adf5211e";
    
    const FBOptions = {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback" 
    }
    
    const FBCallback = function(accessToken, refreshToken, profile, cb){
        //console.log(accessToken, refreshToken, profile)
    };
    
    //passport.use(new FacebookStrategy(FBOptions, FBCallback));
    
    // function login() {
    //     passport.authenticate("facebook");
    // }
    
    // app.route("/auth/facebook/callback")
    //     .get(function(req, res){
    //         res.send("Logged In to Facebook");
    //     });
    
    
    return (
        <div id="loginButton">Login</div>
    );
}

export default LoginButton;
