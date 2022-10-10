import initialState from '@redux/store/initial-state';
import { PING_ACTION, PONG_ACTION } from './ping-pong-action-types';

/**
 * @type ActionPayloadType Reducer`s payload type.
 * @author Patrik Duch
 */
type ActionPayloadType = {
  type: string;
  payload: {
  }
};

/**
 * @function pingPongReducer PingPong test reducer.
 * @author Patrik Duch
 * @param state   Initial state for ping pong`s reducer.
 * @param action  Action that enters into ping pong`s reducer.
 */
const pingPongReducer = (state = initialState.pingPong, action: ActionPayloadType): typeof initialState.pingPong => {
  switch (action.type) {
    case PING_ACTION:
      return {
        ...state,
        isPinging: true
      };
    case PONG_ACTION:
        return {
          ...state,
          isPinging: false
        };

    default:
      return state;
  }
};

export default pingPongReducer;
