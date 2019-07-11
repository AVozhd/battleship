import React from "react";
import { connect } from "react-redux";
import { selectBoardState } from "../store/selectors";

const Board = ({ board_state } = {}) => (
  <div className="board_container">
    {board_state.map((array, index) => (
      <div className="board_column" key={index}>
        {array.map((elem, index) =>
          typeof elem === "object" ? (
            <div
              className="board_cell"
              key={index}
              onClick={() => console.log(elem.index)}
            />
          ) : elem === 0 ? (
            <div key={index} />
          ) : (
            <div className="board_header" key={index}>
              {elem}
            </div>
          )
        )}
      </div>
    ))}
  </div>
);

export default connect(
  state => ({
    board_state: selectBoardState(state)
  }),
  dispatch => ({})
)(Board);
