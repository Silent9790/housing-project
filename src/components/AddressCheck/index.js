import React, { useState, useEffect } from "react";
import AddressCard from "../AddressCard";
import axios from "axios";

function AddressCheck() {
  const [streetNumber, setStreetNumber] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [address, setAddress] = useState([]);
  const URLBase = "https://us-street.api.smartystreets.com/street-address?";

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    if (target.name === "streetNumber") {
      setStreetNumber(value);
    }
    if (target.name === "city") {
      setCity(value);
    }
    if (target.name === "zip") {
      setZip(value);
    }
  }
  // vvvvvvv limited calls. commented for testing
  const queryUrl =
    URLBase +
    "street=" +
    streetNumber +
    "&city=" +
    city +
    "&zipcode=" +
    zip +
    "&address-type=us-street-components&match=invalid&auth-id=697f9c0a-f9a9-bd7d-bc70-46b6a3a5bd49&auth-token=FNljSUnRG221uDOVQ4Eg";
  //  ^^^^^^^^^
  // vvvvv just testing axios vvvvv
  // const queryUrl =
  //   "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=tzoBL5LAxOpGGiNnnhbAW53SbvA4uC4F";
  // ^^^^^^

  const fakedata = [
    {
      input_index: 0,
      candidate_index: 0,
      delivery_line_1: "38037 158th Ave SE",
      last_line: "Auburn WA 98092-9428",
      delivery_point_barcode: "980929428379",
      components: {
        primary_number: "38037",
        street_name: "158th",
        street_postdirection: "SE",
        street_suffix: "Ave",
        city_name: "Auburn",
        default_city_name: "Auburn",
        state_abbreviation: "WA",
        zipcode: "98092",
        plus4_code: "9428",
        delivery_point: "37",
        delivery_point_check_digit: "9"
      },
      metadata: {
        record_type: "S",
        zip_type: "Standard",
        county_fips: "53033",
        county_name: "King",
        carrier_route: "R001",
        congressional_district: "08",
        rdi: "Commercial",
        elot_sequence: "0089",
        elot_sort: "A",
        latitude: 47.25806,
        longitude: -122.13104,
        precision: "Zip9",
        time_zone: "Pacific",
        utc_offset: -8,
        dst: true
      },
      analysis: {
        dpv_match_code: "Y",
        dpv_footnotes: "AABB",
        dpv_cmra: "N",
        dpv_vacant: "N",
        active: "Y",
        footnotes: "L#"
      }
    }
  ];

  function getAddress() {
    const joinUrl = queryUrl.split(" ").join("+");
    axios.get("https://us-street.api.smartystreets.com/street-address?street=38037+158th+ave+se&city=auburn&zipcode=98092&address-type=us-street-components&match=invalid&auth-id=697f9c0a-f9a9-bd7d-bc70-46b6a3a5bd49&auth-token=FNljSUnRG221uDOVQ4Eg").then(response => {
      console.log(response.data);
      setAddress(response.data);
    }).catch(err=>{
      console.log(err)
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s6">
          <input
            type="text"
            name="streetNumber"
            placeholder="street number"
            value={streetNumber}
            onChange={handleInputChange}
          ></input>
          <input
            type="text"
            name="city"
            placeholder="city"
            value={city}
            onChange={handleInputChange}
          ></input>
          <input
            type="number"
            name="zip"
            placeholder="zip code"
            value={zip}
            onChange={handleInputChange}
          ></input>
          <input type="submit" value="Get address" onClick={getAddress} />
        </div>
        {address.length > 0 ? <AddressCard data={address} /> : <div />}
      </div>
    </div>
  );
}

export default AddressCheck;
