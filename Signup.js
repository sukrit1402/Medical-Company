import React from "react";
import "./Signup.css";

const Signup = () => {
    
    return <div className="signup"> 
    
    
    
    <form>
        <input type= "email" class="input box" placeholder="Your Email"></input>
        <input type= "password" class="input box" placeholder="Your Password"></input>
        <p><span> <input type="checkbox"></input> </span> I agree to the terms of services</p>
        <button type="button" class="signup-btn"> Sign up</button>
        
        <p class="or">OR</p>
        <button type="button" class=" twitter-btn"> Login with twitter </button>
        <p> Do you have an acoount ? <a href ="#">Sign in</a></p>
        
        </form>
        </div>;
};

export default Signup;