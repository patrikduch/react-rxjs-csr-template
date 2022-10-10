import { AxiosError } from "axios";

export const FETCH_TODOS_ACTION = 'FETCH_TODOS_ACTION';
export const SAVE_TODOS_ACTION_SUCCESS = 'SAVE_TODOS_ACTION_SUCCESS';
export const SAVE_TODOS_ACTION_FAIL = 'SAVE_TODOS_ACTION_FAIL';


/**
 * @interface IFetchTodosAction Action type for fetching jsonplaceholder todos.
 * @author Patrik Duch
 */
 export interface IFetchTodosAction {
    type: typeof FETCH_TODOS_ACTION
}

/**
 * @interface ISaveTodosAction Action type for saving jsonplaceholder todos.
 * @author Patrik Duch
 */
export interface ISaveTodosAction {
    type: typeof SAVE_TODOS_ACTION_SUCCESS,
    payload: FetchTodosResponse
}

/**
 * @interface IFailedSaveTodosAction Action type for handling failed jsonplaceholder's persistence.
 * @author Patrik Duch
 */
export interface IFailedSaveTodosAction {
    type: typeof SAVE_TODOS_ACTION_FAIL
    error: AxiosError
}


export type FetchTodosResponse = {
    userId:  number;
    id: number;
    title: string;
    completed: boolean;
}