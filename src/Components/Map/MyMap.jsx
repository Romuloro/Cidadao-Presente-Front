import React, { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";

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
  const [coords, setCoords] = useState(null);
  const { selectPosition } = props;

  console.log(selectPosition);
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  function MyComponent() {
    //const [coords, setCoords] = useState(props);
    const map = useMapEvent("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
    });
    let locationSelection;
    if (!coords) {
      locationSelection = [center[0], center[1]];
    } else {
      locationSelection = [coords?.lat, coords?.lng];
    }
    
    return (
      <>
        {coords && (
          <Marker position={locationSelection} icon={icon}>
            <Popup>
              <p>{`lat: ${coords.lat.toFixed(4)} lng: ${coords.lng.toFixed(
                4
              )}`}</p>
            </Popup>
          </Marker>
        )}
      </>
    );
  }

  return (
    <>
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
        <MyComponent coords={coords}/>
      </MapContainer>
      {!coords? null : (
        <h1>{`Latitude${coords.lat} Longitude: ${coords.lng}`}</h1>
      )}
      
    </>
  );
};

export default MyMap;
