import React from "react";

function Mission ({children}) {
return (
<div style =  {{ height: 350, paddingBottom: 120, textAlign: "center", backgroundColor: "maroon" }} 
    >
{children}
</div>
);
}

export default Mission;