import React, { useEffect, useState } from "react";

import SidebarLink from "./SidebarLink";

import { SidebarContainer } from "./style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="sidebar">
        <SidebarLink text="Home" />
        <SidebarLink text="Explore" />
        <SidebarLink text="Notifications" />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
