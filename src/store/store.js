import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import reducer from "./reducer";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

saga.forEach(handler => sagaMiddleware.run(handler));

export default store;
