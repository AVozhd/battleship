import initial_state from "./initial_state";
import createReducer from "../helpers/createReducer";
import * as ACTION from "./actions";
import { set } from "immutable";

const setDefaultValues = (state, { payload }) =>
  set(state, "test_key", "test_value");

const reducer = createReducer(initial_state, {
  [ACTION.INITIAL_ACTION]: setDefaultValues
});

export default reducer;
