import { fetchTodosAction } from '@redux/json-placeholder/json-placeholder-actions';
import INITIALSTATE from '@redux/store/initial-state';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import useDidMount from '@hooks/dom/component.didmount.hook';
import { Typography } from '@mui/material';

/**
 * @interface IState Type annotation for redux state of PingTest component.
 * @author Patrik Duch
 */
 interface IState {
    jsonplaceholder: typeof INITIALSTATE.todos
}

/**
 * @function TodoList Render list of todos.
 * @author Patrik Duch
 * @returns JSX content with list of todos.
 */
const TodoList: React.FC = () => {
    const dispatch = useDispatch();

    const jsonPlaceholderTodos = useSelector((state: IState) => {
        return state.jsonplaceholder
    });

    useDidMount(() => {
        dispatch(fetchTodosAction());
    });

    const renderTodoList = () => {
        return jsonPlaceholderTodos.map((todo => {
            return <p>UserId: {todo.userId}, Id: {todo.id}, title: {todo.title}, {todo.completed ? 'Completed': 'Not done' }</p>
        }));
    }

    return (
        <>
            <Typography variant='h5' component='h2'>Todo list</Typography>
            { renderTodoList() }  
        </>
    );
}

export default TodoList;

