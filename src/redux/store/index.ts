import { createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import pingReducer from '@redux/pingpong/ping-pong-reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { pingEpic } from '@redux/pingpong/ping-pong-epics';

// Bundling Epics
const rootEpic = combineEpics<any>(
  pingEpic
);

const epicMiddleware = createEpicMiddleware();

// Define Middleware
const middlewares = [epicMiddleware];

const store = createStore(
  pingReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

epicMiddleware.run(rootEpic);

export default store;