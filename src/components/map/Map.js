import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import coordinates from "../../assets/JsonData/map-coordinates.json";

const containerStyle = {
  width: "82vw",
  height: "83vh",
};

const center = {
  lat: 0.7893,
  lng: 113.9213,
};

const API_KEY = "AIzaSyBaxw_PufQJiOsjk4siSI7p4sKEE1Rf8J8";

function Map() {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
        {/* Child components, such as markers, info windows, etc. */}
        {coordinates.map((coor, index) => {
          return <Marker position={coor} key={index} />;
        })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
