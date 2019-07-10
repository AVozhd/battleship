import React from "react";
import { render } from "react-dom";
import "./styles/App.css";
import Loader from "./components/Loader";
import * as serviceWorker from "./serviceWorker";

document.addEventListener("DOMContentLoaded", () => {
  const App = React.lazy(async () => await import("./components/App"));
  return Promise.resolve(
    render(
      <React.Suspense fallback={<Loader />}>
        <App />
      </React.Suspense>,
      document.getElementById("root")
    )
  );
});

serviceWorker.unregister();
