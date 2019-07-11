import React from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { initialAction } from "../store/action_creators";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  store.dispatch(initialAction());
  return (
    <Provider store={store}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
};

export default App;
