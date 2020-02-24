import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function CreateAccountCard() {
    const history = useHistory();
    const [newAccount, setNewAccount] = useState({
        firstName: '',
        lastName: '',
        userID: '',
        email: '',
        password: ''
    })
    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewAccount({
            ...newAccount,
            [name]: value
        })
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(newAccount);
        API.createAccount(newAccount).then(res => {
            console.log(res.data)
            setNewAccount({
                firstName: '',
                lastName: '',
                userID: '',
                email: '',
                password: ''
            })
            history.push("/login")

        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="container">
            <h5 className="createAccountTitle">Enter User Information:</h5>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card red darken-4 createAccountCard">
                        <div className="card-content white-text">
                            <form className="container" onSubmit={handleFormSubmit}>
                                <div className="row" style={{ marginBottom: 0 }}>
                                    <x-h7 className="white-text">First Name:</x-h7>
                                    <div className="lastNameText"><x-h7 className="white-text">Last Name:</x-h7></div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m5 white firstNameBox">
                                        <input onChange={handleInputChange} value={newAccount.firstName} className="validate" name="firstName" type="text" />
                                    </div>
                                    <div className="input-field col m5 white">
                                        <input onChange={handleInputChange} value={newAccount.lastName} className="validate" name="lastName" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">User ID:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input onChange={handleInputChange} value={newAccount.userID} className="validate" name="userID" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">Email:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input onChange={handleInputChange} value={newAccount.email} className="validate" name="email" type="email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <x-h7 className="white-text">Password:</x-h7>
                                    <div className="input-field col m12 white">
                                        <input onChange={handleInputChange} value={newAccount.password} className="validate" name="password" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <input className="createAccountButton" type="submit" value="Create" />
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