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
import TextField from "@mui/material/TextField";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import placeIcon from "./images/placeholder.png";

import { api, createLocalidade } from "../../api/api";

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

const MyMap = ({ selectPosition, postCoords }) => {
  const [coords, setCoords] = useState("");
  
  // const { selectPosition } = props;

  console.log("select position", selectPosition);
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  useEffect(() => {
    if (!coords) {
      setCoords({ lat: center[0], lng: center[1] });
      postCoords({ lat: center[0], lng: center[1] });
    }
  }, []);

  /* const handleLocalidade = async (e) => {
    e.preventDefault();
    const nickName = localStorage.getItem("user");
    try {
      resultCreatedLocalidade = await createLocalidade(
        coord,
        descricao,
        nickName
      );
    } catch (error) {
      console.log(error);
    }
  }; */

  function MyComponent() {
    const map = useMapEvent("click", (e) => {
      setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
      postCoords(coords);
    });
    let locationSelection;
    if (!map) {
      locationSelection = [center[0], center[1]];
    } else {
      locationSelection = [coords?.lat, coords?.lng];
    }

    return (
      <>
        {coords && (
          <>
            <Marker position={locationSelection} icon={icon}>
              <Popup>
                <p>{`lat: ${coords.lat.toFixed(4)} lng: ${coords.lng.toFixed(
                  4
                )}`}</p>
              </Popup>
            </Marker>
          </>
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
        <MyComponent /* coords={coords} */ />
      </MapContainer>
    </>
  );
};

export default MyMap;
