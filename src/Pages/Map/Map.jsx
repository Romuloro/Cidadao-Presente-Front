import React, { useState, useEffect } from "react";

import MyMap from "../../Components/Map/MyMap";
import SearchField from "../../Components/SearchField";

export default function Map() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
          gap: "3%",
        }}
      >
        <div style={{ width: "60vw", height: "90%" }}>
          <MyMap selectPosition={selectPosition} />
        </div>
        <div style={{ width: "40vw", height: "80%" }}>
          <SearchField
            selectPosition={selectPosition}
            setSelectPosition={setSelectPosition}
          />
        </div>
      </div>
    </>
  );
}
