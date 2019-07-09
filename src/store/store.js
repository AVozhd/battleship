import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import reducer from "@/components/Landing/store/reducer";
import sagas from "@/components/Landing/store/sagaGenerator";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

sagas.forEach(saga => sagaMiddleware.run(saga));

export default store;
