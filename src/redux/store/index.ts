import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import pingReducer from '@redux/pingpong/ping-pong-reducer';
import jsonplaceholderReducer from '@redux/json-placeholder/json-placeholder-reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { pingEpic } from '@redux/pingpong/ping-pong-epics';
import { fetchTodosEpic } from '@redux/json-placeholder/json-placeholder-epics';

// Bundling Epics
const rootEpic = combineEpics<any>(
  fetchTodosEpic,
  pingEpic
);

const rootReducer = combineReducers(
  {
    jsonplaceholder: jsonplaceholderReducer,
    pingPong: pingReducer
  }
);

const epicMiddleware = createEpicMiddleware();

// Define Middleware
const middlewares = [epicMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

epicMiddleware.run(rootEpic);

export default store;