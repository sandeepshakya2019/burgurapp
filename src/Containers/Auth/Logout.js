import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/index";
import { Redirect } from "react-router-dom";
function Logout(props) {
  useEffect(() => {
    props.onLogout();
  }, []);
  return <Redirect to="/login" />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
