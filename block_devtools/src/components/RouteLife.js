import React from 'react';
import PropTypes from 'prop-types';
import MainPage from "./MainPage";
import {Route} from "react-router-dom";

function RouteLife(props) {
  return (
      <Route {...props} />
  );
}

RouteLife.defaultProps = {};
RouteLife.propTypes = {};

export default RouteLife;