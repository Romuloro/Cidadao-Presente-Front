import React, { useEffect, useState } from "react";

import SidebarLink from "./SidebarLink";

import { SidebarContainer } from "./style";
import MapIcon from "@mui/icons-material/Map";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="sidebar">
        <div>
          <AccountCircleIcon />
          <SidebarLink text="Cidadão" />
        </div>
        <div>
          <HomeIcon />
          <SidebarLink text="Home" />
        </div>
        <div>
          <MapIcon />
          <SidebarLink text="Map" />
        </div>
        <div>
          <BusinessIcon />
          <SidebarLink text="Sobre" />
        </div>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
