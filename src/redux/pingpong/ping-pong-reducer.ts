import initialState from '@redux/store/initial-state';
import { PING_ACTION, PONG_ACTION } from './ping-pong-action-types';

/**
 * @type ActionPayloadType Reducer`s payload type.
 */
type ActionPayloadType = {
  type: string;
  payload: {
  }
};

/**
 * @function pingPongReducer PingPong test reducer.
 * @param state   Initial state for ping pong`s reducer.
 * @param action  Action that enters into ping pong`s reducer.
 */
const pingPongReducer = (state = initialState, action: ActionPayloadType): typeof initialState => {
  switch (action.type) {
    case PING_ACTION:
      return {
        isPinging: true
      };
    case PONG_ACTION:
        return {
          isPinging: false
        };

    default:
      return state;
  }
};

export default pingPongReducer;
