import React, { useState } from "react";
import SideBar from "../Navigation/SlideBar/SideBar";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

function Layout({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const sideBarClosed = () => {
    setSidebar(false);
  };
  const SideDrawerToggle = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <Toolbar drawerToggleClicked={SideDrawerToggle} />
      <SideBar closed={sideBarClosed} openbar={sidebar} />
      <main className="layout__content">{children}</main>
    </div>
  );
}

export default Layout;
