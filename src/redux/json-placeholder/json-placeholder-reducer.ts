import initialState from '@redux/store/initial-state';
import { AxiosError } from 'axios';
import { FetchTodosResponse, SAVE_TODOS_ACTION_FAIL, SAVE_TODOS_ACTION_SUCCESS } from './json-placeholder-types';

/**
 * @type ActionPayloadType Reducer`s payload type.
 * @author Patrik Duch
 */
 type ActionPayloadType = {
    type: string;
    payload: FetchTodosResponse[],
    error: AxiosError
  };

const jsonPlaceholderReducer = (state = initialState.todos, action: ActionPayloadType): typeof initialState.todos => {

    switch (action.type) {
        case SAVE_TODOS_ACTION_SUCCESS:
            return [
                ...state = action.payload
            ]
        case SAVE_TODOS_ACTION_FAIL:
            return []

        default:
            return [...state]
    }
};

export default jsonPlaceholderReducer;