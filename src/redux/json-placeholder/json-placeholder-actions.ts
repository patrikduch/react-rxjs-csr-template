import { AxiosError } from "axios";
import { FetchTodosResponse, IFailedSaveTodosAction, IFetchTodosAction, ISaveTodosAction } from "./json-placeholder-types";

 const fetchTodosAction = (): IFetchTodosAction => ({ type: 'FETCH_TODOS_ACTION' });
 const saveTodosAction = (data: FetchTodosResponse): ISaveTodosAction => ({ type: 'SAVE_TODOS_ACTION_SUCCESS', payload: data})
 const failedSaveTodosAction = (axiosError: AxiosError): IFailedSaveTodosAction  => ({ type: 'SAVE_TODOS_ACTION_FAIL', error: axiosError });

 export { fetchTodosAction, saveTodosAction, failedSaveTodosAction };