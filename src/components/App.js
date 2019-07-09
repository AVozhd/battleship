import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/App.css";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="test-div">test</div>
    </div>
  </Provider>
);

export default App;
