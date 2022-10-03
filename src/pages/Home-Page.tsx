import PingTest from '@components/Pingtest';
import { Container, Typography } from '@mui/material';
import React from 'react';

/**
 * @function HomePage  Displays content of homepage component.
 * @author Patrik Duch
 */
const HomePage: React.FC = () => {
    return (
        <Container>
            <Typography variant='h4' component='h1'>HomePage</Typography>
            <PingTest />
        </Container>
    );
}

export default HomePage;