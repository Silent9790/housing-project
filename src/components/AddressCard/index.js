import React from "react";

function AddressCard(props){
    console.log(props.data)
    // function callLog(){

    //     console.log(props.data);
    // }
    return(
        <div>
            <h5>Complete address</h5>
            {/* {props.data[0].delivery_line_1}
            <br></br>
            {props.data[0].last_line}
            {props.data[0].analysis.active === "Y" ? <p>This property is reported as having been occupied in the last 90 days.</p> : <p>This property has not been active and may be vacant.</p>} */}
        </div>
    )
}

export default AddressCard;