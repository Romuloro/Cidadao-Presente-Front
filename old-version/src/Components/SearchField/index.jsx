import React, { useState, useEffect } from "react";
import { GeoSearchControl, MapBoxProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const NOMINATIM_BASE_URL =
  "https://nominatim.openstreetmap.org/search?";

const params = {
  q:"",
  format:"json",
  addressdetails: "addressdetails"
}

const SearchField = (props) => {
  const { selectPosition, setSelectPosition } = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  /* const provider = new MapBoxProvider({
    params: {
      access_token: apiKey,
    },
  });

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null; */
  return (
    <div>
      <h1>Search</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          margin: "3px",
        }}
      >
        <div style={{ display: "flex", gap: "5%", width: "100%" }}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              onClick={() => {
                const params = {
                  q: searchText,
                  format: "json",
                  addressdetails: 1,
                  polygon_geojson: 0,
                };
                const queryString = new URLSearchParams(params).toString();
                const requestOptions = {
                  method: "GET",
                  redirect: "follow",
                };
                fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
                  .then((response) => response.text())
                  .then((result) => {
                    console.log(JSON.parse(result));
                    setListPlace(JSON.parse(result));
                  })
                  .catch((err) => console.log("err: ", err));
              }}
            >
              OK
            </Button>
          </div>
        </div>
        <div>
          <List>
            {listPlace.map((item) => {
              return (
                <div key={item?.place_id}>
                  <ListItem
                    disablePadding
                    onClick={() => {
                      setSelectPosition(item);
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <LocationOnIcon />
                      </ListItemIcon>
                      <ListItemText primary={item?.display_name} />
                    </ListItemButton>
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
