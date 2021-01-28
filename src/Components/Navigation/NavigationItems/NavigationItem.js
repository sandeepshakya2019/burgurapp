import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItem.css";

function NavigationItem() {
  const [active, setActive] = useState(null);
  return (
    <ul className="NavigationItems">
      <li className="NavigationItem">
        <NavLink
          exact
          to="/"
          id="1"
          // activeClassName={active}
          onClick={(e) => setActive(e.target.id)}
          className={active === 1 ? "active" : null}
        >
          Burger Builder
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink
          exact
          to="/checkout"
          // activeClassName={active}
          id="2"
          onClick={(e) => setActive(e.target.id)}
          className={active === 2 ? "active" : null}
        >
          Checkout
        </NavLink>
      </li>
      <li className="NavigationItem">
        <NavLink
          exact
          to="/orders"
          id="3"
          // activeClassName={active}
          onClick={(e) => setActive(e.target.id)}
          className={active === 3 ? "active" : null}
        >
          Order
        </NavLink>
      </li>
    </ul>
  );
}

export default NavigationItem;
