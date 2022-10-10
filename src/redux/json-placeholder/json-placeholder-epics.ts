import axios, { AxiosError } from 'axios';
import { Epic, ofType } from "redux-observable";
import { catchError, from, map, mergeMap, of } from "rxjs";
import { failedSaveTodosAction, saveTodosAction } from './json-placeholder-actions';
import { FetchTodosResponse, FETCH_TODOS_ACTION, IFailedSaveTodosAction, IFetchTodosAction, ISaveTodosAction } from "./json-placeholder-types";

/**
 * @type Actions Type annotation for pipeable action of jsonPlaceholderEpic.
 * @author Patrik Duch 
 */
 type Actions = IFetchTodosAction | ISaveTodosAction | IFailedSaveTodosAction;

const fetchTodosEpic: Epic<Actions, ISaveTodosAction | IFailedSaveTodosAction> = (action$) => {  
    return action$.pipe(
      ofType(FETCH_TODOS_ACTION),
      mergeMap(() =>
      from(
        axios.get<FetchTodosResponse>("https://jsonplaceholder.typicode.com/todosa")
      )
      .pipe(
          map((response) =>  {
            return saveTodosAction(response.data)
          }),
          catchError((err: AxiosError) => {
            return of(failedSaveTodosAction(err))
          }))
      )
  );
  }

export { fetchTodosEpic };