import { IPingAction, IPongAction, PING_ACTION, PONG_ACTION } from './ping-pong-action-types';

/**
 * @function pongAction Pong action creator.
 * @author Patrik Duch 
 */
const pongAction = (): IPongAction => ({ type: PONG_ACTION });

/**
 * @function pingAction Ping action creator.
 * @author Patrik Duch
 */
const pingAction = (): IPingAction => ({ type: PING_ACTION });

export { pongAction, pingAction };