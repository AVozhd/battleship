import { call, put, takeLatest, select, delay, all } from "redux-saga/effects";
import * as ACTION from "./actions";

function* initialAction() {
  yield console.log("saga initial action");
}

export default [
  function* () {
    yield takeLatest(ACTION.INITIAL_ACTION, initialAction)
  }
];
