import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LoginCard() {
    return (
        <div className="container">
            <h5 className="loginTitle">Login to your MHA Account:</h5>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card red darken-4 loginCard">
                        <div className="card-content white-text">
                            <form className="container">
                                <div className="row">
                                    <x-h7 className="white-text">User ID:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input className="validate" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">Password:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input className="validate" type="password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="loginButton" type="button" value="Login" />
                                    <Link to="/createaccount"><input className="loginButton" type="button" value="Create Account" /></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="loginBumper">
            </div>
        </div>
    );
}

export default LoginCard;