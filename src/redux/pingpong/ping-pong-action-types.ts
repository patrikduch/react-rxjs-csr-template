export const PING_ACTION = 'PING';
export const PONG_ACTION = 'PONG';

/**
 * @interface IPingAction Ping redux action type.
 */
export interface IPingAction {
  type: typeof PING_ACTION
}

/**
 * @interface IPongAction Pong redux action type.
 */
export interface IPongAction {
  type: typeof PONG_ACTION,
}