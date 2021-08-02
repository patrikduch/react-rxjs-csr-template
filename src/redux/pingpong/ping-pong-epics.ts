import { map, delay } from 'rxjs/operators';
import { Epic, ofType } from 'redux-observable';
import { IPingAction, IPongAction, PING_ACTION } from '@redux/pingpong/ping-pong-action-types';
import { pongAction } from './ping-pong-actions';

/**
 * @type Actions Type annotation for pipeable action of pingEpic.
 */
type Actions = IPingAction | IPongAction;

/**
 * @function pingEpic Epic for interception ping redux action.
 * @param action$ Interception pipeable redux action.
 */
const pingEpic: Epic<Actions, IPongAction> = (action$) =>
  action$.pipe(
    ofType(PING_ACTION),
    delay(1000),
    map(() => pongAction())
);

export { pingEpic };