import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/Sidebar.data";
import { IconContext } from "react-icons";
import { Avatar } from "@mui/material";

import SofyaLogo from "../../images/Sofya.jpg";

import "./css/navbar.css";

function Navbar() {
  /**** UseState Section ****/
  const [sidebar, setSidebar] = useState(false);

  /**** UseState Section ****/

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    console.log(sidebar);
  }, [sidebar]);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
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

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="/" className="menu-bars">
                <Avatar
                  alt="Argentarius"
                  src={SofyaLogo}
                  sx={{ height: "70px", width: "70px" }}
                ></Avatar>
              </Link>
              <p
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingLeft: 10,
                  fontSize: 16,
                }}
              >
                Sofya Systems SA.
              </p>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
