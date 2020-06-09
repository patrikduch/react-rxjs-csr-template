import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import pingReducer from "../reducers/pingpong-reducer";
import { pingEpic } from "../epics";

import { composeWithDevTools } from "redux-devtools-extension";

// Bundling Epics
const epicMiddleware = createEpicMiddleware(pingEpic as any);

// Define Middleware
const middlewares = [epicMiddleware];

const store = createStore(
  pingReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
