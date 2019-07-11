import React from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { bindActionCreators } from "redux";

// eslint-disable-next-line no-empty-pattern
const Main = ({} = {}) => (
  <main role="main">
    <div className="container">main content</div>
  </main>
);

export default connect(
  state => ({}),
  dispatch => ({})
)(Main);
