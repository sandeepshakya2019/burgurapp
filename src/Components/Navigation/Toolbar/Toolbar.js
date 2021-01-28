import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItem from "../NavigationItems/NavigationItem";
import DrawerToggle from "../SlideBar/DrawerToggle/DrawerToggle";
import "./Toolbar.css";

function Toolbar(props) {
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Logo height="80%" />
      <nav className="DesktopOnly">
        <NavigationItem />
      </nav>
    </header>
  );
}

export default Toolbar;
