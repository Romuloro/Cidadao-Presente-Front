import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import SearchField from "../SearchField";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import placeIcon from "./images/placeholder.png";

const center = [-22.85754769972381, -43.017380878034544];

const icon = L.icon({
  iconUrl: placeIcon /* "./placeholder.png" */,
  iconSize: [38, 38],
});

function handleSetView(map, location) {
  if (map && location) {
    map.flyTo(location, 18, {
      duration: 4,
    });
  }
}

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      handleSetView(map, selectPosition);
    }
  }, [selectPosition]);

  return null;
}

const MyMap = (props) => {
  const { selectPosition } = props;
  console.log(selectPosition);
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  return (
    <MapContainer
      center={center}
      zoom={18}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectPosition && (
        <Marker position={locationSelection} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )}
      <ResetCenterView selectPosition={selectPosition} />
    </MapContainer>
  );
};

export default MyMap;
