import React from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItem from "../NavigationItems/NavigationItem";
import "./SideBar.css";

function SideBar({ openbar, closed }) {
  let attachedClasses = ["SideDrawer", "Close"];
  if (openbar) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <>
      <Backdrop show={openbar} cancelButton={closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" />
        <div className="margin"></div>
        <nav>
          <NavigationItem />
        </nav>
      </div>
    </>
  );
}

export default SideBar;
