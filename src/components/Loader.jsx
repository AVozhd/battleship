import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import classNames from "classnames";

const Loader = ({ size = 56, className, styles = {}, loaderWrapper = true }) => (
  <div
    className={classNames({ "loader-wrapper": loaderWrapper }, className)}
    style={{ fontSize: size, minHeight: size, ...styles }}
  >
    <i className="fa fa-spinner fa-spin loader" />
  </div>
);

export default Loader;
