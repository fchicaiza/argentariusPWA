import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/Sidebar.data";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      {sidebar === false ? (
        <p style={{ paddingLeft: 15, fontSize: 19 }}>Argentarius Mobile</p>
      ) : (
        <p style={{ paddingLeft: 230, fontSize: 19 }}>Argentarius Mobile</p>
      )}
    </div>
  );
};

// export default Header;
