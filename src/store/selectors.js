import { get } from "immutable";
import chainChanges from "../helpers/chainChanges";
import transposeArray from "../helpers/transposeArray";

export const selectBoardState = state =>
  chainChanges([
    elem => Object.entries(elem).map(array => array.flat()),
    elem => transposeArray(elem),
    elem => elem.map((array, index) => [index].concat(array))
  ])(get(state, "board", {}));
