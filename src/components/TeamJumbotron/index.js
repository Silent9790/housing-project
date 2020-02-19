import React from "react";

function TeamJumbotron({ children }) {
  return (
    <div style={{ height: 800, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: " tan" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default TeamJumbotron;
