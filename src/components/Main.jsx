import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
// eslint-disable-next-line no-unused-vars
import { bindActionCreators } from "redux";

// eslint-disable-next-line no-empty-pattern
const Main = ({} = {}) => (
  <main role="main">
    <Board />
  </main>
);

export default connect(
  state => ({}),
  dispatch => ({})
)(Main);
