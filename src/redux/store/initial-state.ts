import { FetchTodosResponse } from "@redux/json-placeholder/json-placeholder-types";

// Initial state of Redux store.
const INITIALSTATE = {

    pingPong: {
        isPinging: false
    },
    todos: [] as FetchTodosResponse[]
};
  
export default INITIALSTATE;