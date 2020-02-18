import React from "react";

function login() {

    return (

    <div className="container">
      <h4>Login</h4>
      <div className="form-group" >
        <input type="radio" name="rating-1" />1
        {/* instead of rating add login form */}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default login;