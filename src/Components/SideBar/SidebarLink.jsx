import React, { useEffect, useState } from "react";

import { Link } from "./style";

const SidebarLink = ({ text }) => {
  return (
    <Link>
    <div className="link">
      <h2>{text}</h2>
    </div>
    </Link>
  );
}
export default SidebarLink;
