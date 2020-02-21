import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CreateAccountCard() {
    return (
        <div className="container">
            <h5 className="createAccountTitle">Enter User Information:</h5>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card red darken-4 createAccountCard">
                        <div className="card-content white-text">
                            <form className="container">
                                <div className="row" style={{marginBottom: 0}}>
                                <x-h7 className="white-text">First Name:</x-h7>
                                <div className="lastNameText"><x-h7 className="white-text">Last Name:</x-h7></div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m5 white firstNameBox">
                                        <input className="validate" type="text" />
                                    </div>
                                    <div className="input-field col m5 white">
                                        <input className="validate" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">User ID:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input className="validate" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">Email:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input className="validate" type="email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">Password:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input className="validate" type="password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">Confirm Password:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input className="validate" type="password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="createAccountButton" type="button" value="Create" />
                                    <Link to="/login"><input className="createAccountButton" type="button" value="Back to Login" /></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="createAccountBumper">
            </div>
        </div>
    );
}

export default CreateAccountCard;