import React, { useState } from "react";

function AddressCard() {
  const [streetNumber, setStreetNumber] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const URLBase = "https://us-street.api.smartystreets.com/street-address?";

  function handleInputChange(event){
    const target = event.target;
    const value = target.value;
    
    if(target.name === "streetNumber"){
      setStreetNumber(value);
    }
    if(target.name === "city"){
      setCity(value);
    }
    if(target.name === "zip"){
      setZip(value);
    }
  }

  const queryUrl = URLBase + "street= " + streetNumber +"&street2=&city=" + city + "&state=&zipcode=" + zip + "&address-type=us-street-components" + "&match=invalid"

  function getAddress(){
    console.log(queryUrl);
    
  }

  return (
    <div>
      <input
        type="text"
        name="streetNumber"
        placeholder="street number"
        value = {streetNumber}
        onChange = {handleInputChange}
      ></input>
      <input
        type="text"
        name="city"
        placeholder="city"
        value = {city}
        onChange = {handleInputChange}
      ></input>
      <input
        type="number"
        name="zip"
        placeholder="zip code"
        value = {zip}
        onChange = {handleInputChange}
      ></input>
      <input type = "submit" value = "get address" onClick = {getAddress}/>
    </div>
  );
}

export default AddressCard;
