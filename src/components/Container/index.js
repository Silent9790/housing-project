import React from "react";

function Container({ children }) {

    return (
        <div class="container ">

            <div
                style={{ height: 350, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "maroon" }}
                className="container"
            >
                {children}
            </div>
            <div className="section">

            </div>
        </div>
    )
}
export default Container;