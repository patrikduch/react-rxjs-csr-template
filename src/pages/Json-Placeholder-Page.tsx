import TodoList from '@components/application/json-placeholder/Todo-List';
import { Container, Typography } from '@mui/material';
import React from 'react';

/**
 * @function JsonPlaceholderPage  Displays some example JsonPlaceholder content.
 * @author Patrik Duch
 */
const JsonPlaceholderPage: React.FC = () => {
    return (
        <Container>
             <Typography variant='h4' component='h1'>JsonPlaceholder page</Typography>
             <TodoList />
        </Container>
    );
}

export default JsonPlaceholderPage;

