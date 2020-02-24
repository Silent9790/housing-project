import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function LoginCard() {
  const history = useHistory();
  const [userAccount, setUserAccount] = useState({
    userID: "",
    password: ""
  });
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserAccount({
      ...userAccount,
      [name]: value
    });
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    API.getAccountByID(userAccount.userID)
      .then(res => {
        setUserAccount({
          userID: "",
          password: ""
        });
        if (res.data === null) {
          alert("Invalid user credentials");
        } else if (res.data.password === userAccount.password) {
          history.push("/loginsuccess");
        } else {
          alert("Incorrect password");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h5 className="loginTitle">Login to your MHA Account:</h5>
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card red darken-4 loginCard">
            <div className="card-content white-text">
              <form className="container" onSubmit={handleFormSubmit}>
                <div className="row">
                  <div className="row">
                  <x-h7 className="white-text">User ID:</x-h7>
                  </div>
                  <div className="input-field col m12 white">
                    <input
                      onChange={handleInputChange}
                      value={userAccount.userID}
                      className="validate"
                      name="userID"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row">
                    <div className="row">
                  <x-h7 className="white-text">Password:</x-h7>
                    </div>
                  <div className="input-field col m12 white">
                    <input
                      onChange={handleInputChange}
                      value={userAccount.password}
                      className="validate"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="row"  id="buttonsBox">
                  <input className="loginButton" type="submit" value="Login" />
                  <Link to="/createaccount">
                    <input
                      className="loginButton"
                      type="button"
                      value="Create Account"
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {/* <input
            className="loginButton"
            type="button"
            value="Login"
            id="loginlog"
          />
          <Link to="/createaccount">
            <input
              className="loginButton"
              type="button"
              value="Create Account"
            />
          </Link> */}
        </div>
        {/* </form> */}
      </div>
      {/* </div> */}
      {/* //     </div> */}
      {/* //   </div> */}
      <div id="loginBumper"></div>
    </div>
  );
}

export default LoginCard;
