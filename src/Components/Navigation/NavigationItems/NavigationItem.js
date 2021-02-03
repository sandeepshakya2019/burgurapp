import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./NavigationItem.css";

function NavigationItem(props) {
  const [active, setActive] = useState(null);
  return (
    <ul className="NavigationItems">
      {props.token && (
        <>
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
              to="/orders"
              id="3"
              // activeClassName={active}
              onClick={(e) => setActive(e.target.id)}
              className={active === 3 ? "active" : null}
            >
              Order
            </NavLink>
          </li>
          <li className="NavigationItem">
            <NavLink
              exact
              to="/logout"
              id="6"
              // activeClassName={active}
              onClick={(e) => setActive(e.target.id)}
              className={active === 5 ? "active" : null}
            >
              Logout
            </NavLink>
          </li>
        </>
      )}
      {!props.token && (
        <>
          <li className="NavigationItem">
            <NavLink
              exact
              to="/login"
              id="4"
              // activeClassName={active}
              onClick={(e) => setActive(e.target.id)}
              className={active === 4 ? "active" : null}
            >
              Login
            </NavLink>
          </li>
          <li className="NavigationItem">
            <NavLink
              exact
              to="/register"
              id="5"
              // activeClassName={active}
              onClick={(e) => setActive(e.target.id)}
              className={active === 5 ? "active" : null}
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
export default connect(mapStateToProps)(NavigationItem);
